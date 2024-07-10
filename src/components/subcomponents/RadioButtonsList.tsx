import React from "react";

interface Box {
  label: string;
  value: string;
}

/**
 * This is a component displaying a list of radio buttons.
 * @param Boxes Array of boxes, each box should have a label and a value.
 * @param Name Name shared by all checkboxes.
 * @param OnChange Function to call when selecting a new value, it should change CheckedValue.
 * @param CheckedValue The optional value for which a radio button should be checked.
 */
const RadioButtonsList: React.FC<{
  Boxes: Box[];
  Name: string;
  OnChange: (value: string) => void;
  CheckedValue?: string;
}> = (props) => {
  function handleSelectedBoxChange(event: { target: { value: string } }) {
    props.OnChange?.(event.target.value);
  }

  return (
    props.Boxes.length > 0 &&
    props.Boxes.map((box, index) => {
      const boxId = `${props.Name}--box--${index}`;
      return (
        <React.Fragment key={index}>
          <input
            id={boxId}
            type="radio"
            name={props.Name}
            value={box.value}
            checked={props.CheckedValue === box.value}
            onChange={handleSelectedBoxChange}
          />
          <label htmlFor={boxId}>{box.label}</label>
        </React.Fragment>
      );
    })
  );
};

export default RadioButtonsList;
