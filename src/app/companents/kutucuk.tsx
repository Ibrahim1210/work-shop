import React, { useState } from "react";

function CheckboxExample() {
  // state tanımı
  const [isChecked, setIsChecked] = useState(false);

  // kutucuk durumu değiştiğinde çağrılacak fonksiyon
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex">
      <p className="">
        Cancel Registration :{/* {isChecked ? "checked" : "unchecked"} */}
      </p>
      {/* Tik işaretlemeli kutucuk */}
      <input
        className="ml-20"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />

      {/* Kutucuğun durumunu gösteren metin */}
    </div>
  );
}

export default CheckboxExample;
