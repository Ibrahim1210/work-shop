import React, { useEffect, useState } from "react";

interface NewProps {}

export default function NewEffect({}: NewProps) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    //The code that we want to run
    console.log(`The count is:`, count);

    return () => {
      console.log("Im being cleaned up!");
    };

    //Optinal return fuction (opsiyonel dönüş fonksiyonu görünmeyen)
  }, [count]); //The dependency array

  //Useeffect en az bir kere dahi olsa çalışır.

  return (
    <>
      <div className="flex flex-col items-center">
        <h1>Count: {count}</h1>
        <button
          className="border border-black p-1 mt-5 bg-blue-600 rounded-md hover:bg-slate-100 font-semibold"
          onClick={() => {
            if (count > 0) setCount(count - 1);
          }}
        >
          Azalt
        </button>
        <button
          className="border border-black p-1 mt-5 bg-blue-600 rounded-md hover:bg-slate-100 font-semibold"
          onClick={() => {
            if (count < 10) setCount(count + 1);
          }}
        >
          Arttır
        </button>
        <button
          className="border border-black p-4 mt-5 bg-blue-600 rounded-md hover:bg-slate-100 font-semibold"
          onClick={() => setCount(0)}
        >
          Sıfırla
        </button>
      </div>
    </>
  );
}
