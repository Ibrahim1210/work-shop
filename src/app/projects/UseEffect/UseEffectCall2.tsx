import Axios from "axios";
import React, { useState } from "react";

function UseEffectCall2() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data);
    });
  };
  return (
    <div>
      <input
        onChange={(event) => {
          setName(event.target.value);
        }}
        className="border border-slate-900 rounded-sm mx-56 mb-4 mt-2"
        type="text"
        placeholder="Ex. Pedro ..."
      />
      <button
        onClick={fetchData}
        className="border border-slate-950 p-1 rounded-md mx-72 "
      >
        Predict Age
      </button>
      <div>
        <h1>Predicted Name: {predictedAge?.name}</h1>
        <h1>Predicted Age: {predictedAge?.age}</h1>
        <h1>Predicted Count: {predictedAge?.count}</h1>
      </div>
    </div>
  );
}

export default UseEffectCall2;
