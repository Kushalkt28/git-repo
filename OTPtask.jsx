import React, { useRef } from "react";

const OTPtask = () => {
  const Arr1 = [];
  for (let i = 0; i < 4; i++) {
    Arr1.push(useRef());
console.log(useRef)
  }
  console.log(useRef)


  function change(index, e) {
    if (index < Arr1.length - 1 && e.target.value !== "") {
      Arr1[index + 1].current.focus();
    } else if (index > 0 && e.target.value == "") {
      Arr1[index - 1].current.focus();
    }
  }
  console.log(Arr1);

  return (
    <div>
      {Arr1.map((data, index) => (
        <input
          type="text"
          ref={data}
          onChange={(e) => change(index, e)}
          maxLength={1}
          autoFocus={index === 0}
          key={index}
        />
      ))}
    </div>
  );
};

export default OTPtask;
