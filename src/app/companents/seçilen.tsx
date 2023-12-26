import React, { useState } from "react";
function DropdownExample() {
  // state tanımı
  const [selectedOption, setSelectedOption] = useState("option1");

  // dropdown değeri değiştiğinde çağrılacak fonksiyon
  const handleDropdownChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex">
      {/* Dropdown menu */}
      <p style={{ clear: "both" }}>252 Training Session 2010: </p>
      <select value={selectedOption} onChange={handleDropdownChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      {/* Seçilen değeri gösteren metin */}
    </div>
  );
}

export default DropdownExample;
