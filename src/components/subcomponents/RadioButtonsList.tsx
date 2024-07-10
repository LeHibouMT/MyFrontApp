import React, { useEffect, useState } from "react";
import { isNullish } from "utils/functions.utils";

interface Box {
  label: string;
  value: string;
}

/**
 * This is a component displaying a list of radio buttons.
 * You can manage the checked input from a parent component by using checked and onChange.
 * You can also let this component manage the checked input by not giving it a checked value.
 * @param boxes Array of boxes, each box should have a label and a value.
 * @param name Name shared by all checkboxes.
 * @param defaultChecked Optional value for which a radio button should be checked at the start.
 * @param checked Optional value for which a radio button should be checked, ignore defaultChecked.
 * @param onChange Optional function to call when selecting a new value.
 * @returns The component.
 */
const RadioButtonsList: React.FC<{
  boxes: Box[];
  name: string;
  defaultChecked?: string;
  checked?: string;
  onChange?: (value: string) => void;
}> = (props) => {
  const [valueChecked, setValueChecked] = useState<string | undefined>(props.checked ?? props.defaultChecked);

  useEffect(() => {
    setValueChecked(props.checked ?? props.defaultChecked);
  }, [props.checked, props.defaultChecked]);

  function handleSelectedBoxChange(value: string) {
    if (!props.checked) {
      setValueChecked(value);
    }
    props.onChange?.(value);
  }

  return (
    props.boxes.length && (
      <div className="radio__buttons__list">
        {props.boxes.map((box, index) => {
          const boxId = `${props.name}--option--${index}`;
          return (
            <div
              className="radio__buttons__option"
              key={index}
              onClick={() => handleSelectedBoxChange(box.value)}>
              <input
                id={boxId}
                type="radio"
                name={props.name}
                value={box.value}
                checked={!isNullish(valueChecked) && valueChecked === box.value}
                readOnly={true}
              />
              <label htmlFor={boxId}>{box.label}</label>
            </div>
          );
        })}
      </div>
    )
  );
};

export default RadioButtonsList;
