import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import "./ChipInput.css";

const ChipInput = ({ userContacts }) => {
  const [inputValue, setInputValue] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [chips, setChips] = useState([
    {
      name: "Girinath",
      email: "girinath@gmail.com",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Rb-0os2-V1LfrNaGsf9Fgpu6aUyi93Pvnw&usqp=CAU",
    },
  ]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [highLightInput, setHighLightInput] = useState(null);
  const [hitBackButton, setHitBackButton] = useState(false);
  const [data, setData] = useState(userContacts);
  const inputRef = useRef(null);
  //   let highLightInput = null;
  //   let hitBackButton = null;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [chips]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    console.log("value", value);
    // Check if the selectedValue exists in your data
    const selectedDataItem = data.find((item) => item.email === value);

    if (selectedDataItem) {
      // Handle the selection, for example, set it as the input value
      setInputValue(selectedDataItem.email);

      // Call your custom function for selection
      handleSelection(selectedDataItem);
    } else {
      // Continue handling input changes as needed
      setSelectedItem(null);

      if (value.trim() === "" && chips.length > 0) {
        // Handle backspace when input is empty
        setSelectedItem(chips[chips.length - 1]);
      } else {
        setSelectedItem(null);
      }
    }
  };

  const handleSelection = (selectedItem) => {
    // Your custom logic when an option is selected
    console.log("Selected:", selectedItem);
    // setChips([...chips, selectedItem.name]);
    setChips([...chips, selectedItem]);
    setInputValue("");
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      handleChipAdd();
    }
    if (e.key === "Backspace" && inputValue === "" && chips.length > 0) {
      // Handle backspace when input is empty

      setHighLightInput(chips.length - 1);
      console.log("highLightInput", highLightInput);
      console.log("isSelected", isSelected);
      console.log("hitBackButton before", hitBackButton);
      //   debugger;
      if (hitBackButton) {
        handleChipRemove(chips.length - 1);
        setHitBackButton(false);
      }
      setHitBackButton(true);
      console.log("hitBackButton after", hitBackButton);
    }
  };

  const handleChipAdd = () => {
    console.log("inputValue", inputValue);
    const selectedDataItem = data.find((item) => item.email === inputValue);
    console.log("selectedDataItem", selectedDataItem);
    if (selectedDataItem) {
      setChips([...chips, selectedDataItem]);
      setInputValue("");
    }

    // if (inputValue.trim() !== "" && !chips.includes(inputValue)) {
    //   setChips([...chips, inputValue]);
    //   setInputValue("");
    // }
  };

  const handleChipClick = (chip) => {
    setChips(chips.filter((c) => c !== chip));
    setInputValue("");
  };

  const handleChipRemove = (index) => {
    const removedChip = chips[index];
    setChips(chips.filter((_, i) => i !== index));
    setInputValue("");
    setSelectedItem(removedChip);
    setIsSelected(false);
    setHitBackButton(false);
    // highLightInput = null;
  };

  return (
    <div className="chip-input">
      <div className="chips-container">
        {chips.map((chip, index) => (
          <div
            key={index}
            className={`chip ${
              highLightInput === index ? "highlight-chip" : ""
            }`}
            onClick={() => handleChipClick(chip)}
          >
            <img src={chip.image} />
            {chip.name}
            <span
              className={`chip-remove ${
                highLightInput === index ? "highlight-chip-remove" : ""
              }`}
              onClick={() => handleChipRemove(index)}
            >
              X
            </span>
            {console.log("highLightInput", highLightInput, index)}
          </div>
        ))}
        <input
          className="chip-input"
          ref={inputRef}
          type="text"
          list="data-list"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          placeholder="Type to search..."
        />
        <datalist id="data-list">
          {/* {data?.map((item, index) => (
            <option key={index} value={item.email}></option>
          ))} */}
          {data
            ?.filter((item) => !chips.some((chip) => chip === item.name))
            .map((item, index) => (
              <option key={index} value={item.email}>
                {item.name}
              </option>
            ))}{" "}
        </datalist>
      </div>
    </div>
  );
};

export default ChipInput;
