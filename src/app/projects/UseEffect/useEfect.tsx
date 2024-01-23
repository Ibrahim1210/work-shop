import { useEffect, useState } from "react";

function App() {
  const [can, setCan] = useState(0);
  const [tuba, setTuba] = useState(0);

  useEffect(() => {
    console.log("İlk kez render edildiğinde çalışır daha da çalışmaz");
  }, []);
  useEffect(() => {
    console.log("Her zaman çalışır.");
  });
  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde çalışır Can değerinde değişiklik olduğunda çalışır"
    );
  }, [can]);
  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde tuba değerinde değişiklik olduğunda çalışır"
    );
  }, [tuba]);
  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde Can veya tuba değerinde değişiklik olduğunda çalışır"
    );
  }, [can, tuba]);

  return (
    <div className="flex">
      <div className="">
        <button onClick={() => setCan(can + 1)}>Can ++</button>
        <div>Can: {can}</div>
      </div>
      <div>
        <button onClick={() => setTuba(tuba + 1)}>Tuba ++</button>
        <div>Tuba: {tuba}</div>
      </div>
    </div>
  );
}

export default App;
