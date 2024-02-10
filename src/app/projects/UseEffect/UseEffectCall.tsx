import React, { useEffect, useState } from "react";
import Axios from "axios";

//fetc fonksiyonu bir apiden veri almak için kullanılır ve bu şekilde yapmamız gerekir.

// fetch("https://catfact.ninja/fact")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

function UseEffectCall() {
  const [catFact, setCatFach] = useState("");
  const fetchCatFact = () => {
    Axios.get(`https://catfact.ninja/fact`).then((res) => {
      setCatFach(res.data.fact);
    });
  };

  useEffect(() => {
    fetchCatFact();
  }, []);
  //Bir kütüphane yardımı ile daha kısa ve daha düzenli yukarıdaki fetc kodunun aynı şekilde consolda bir obje çevirir.

  return (
    <div className="">
      <button
        onClick={fetchCatFact}
        className="border border-black bg-slate-100 rounded-md p-1"
      >
        Generate Cat Fact
      </button>
      <p>{catFact}</p>
    </div>
  );
}

export default UseEffectCall;
