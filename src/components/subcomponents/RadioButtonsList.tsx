import React from "react";

interface Box {
  label: string;
  value: string;
}

/**
 * This is a component displaying a list of radio buttons.
 * @param Boxes Array of boxes, each box should have a label and a value.
 * @param Name Name shared by all checkboxes.
 * @param CheckedValue The value for which a radio button should be checked.
 * @param OnChange Function to call when selecting a new value, it should change CheckedValue.
 */
const RadioButtonsList: React.FC<{
  Boxes: Box[];
  Name: string;
  CheckedValue: string;
  OnChange: (value: string) => void;
}> = (props) => {
  const handleSelectedBoxChange = (event: { target: { value: string } }) => {
    props.OnChange?.(event.target.value);
  };

  return (
    props.Boxes.length >= 0 && (
      <div className="radio__buttons">
        {props.Boxes.map((box, index) => {
          const boxId = `${props.Name}--box--${index}`;
          return (
            <div className="radio__checkbox__choice" key={index}>
              <input
                id={boxId}
                type="radio"
                name={props.Name}
                value={box.value}
                checked={props.CheckedValue === box.value}
                onChange={handleSelectedBoxChange}
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
