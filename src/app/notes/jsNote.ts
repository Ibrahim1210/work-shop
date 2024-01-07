//TODO:1 diger input tiplerini de forma ekle
//handler Fonksiyonlari yukari tasi
//

interface IGeneric<T> {
    itemId: T;
  }
  interface I1 {
    itemId: string;
  }
  interface I2 {
    itemId: number;
  }
  interface I3 {
    itemId: object;
  }
  
  const o1: I1 = { itemId: "at" };
  const o2: I2 = { itemId: 5 };
  const o3: I3 = { itemId: {} };
  const o4: IGeneric<object> = { itemId: {} };
  
  ///
  const myb1 = { at1: "at1", at2: "at2" };
  const myob2 = myb1;
  myob2.at2 = "hello";
  console.log("myb1", myb1);
  
  //
  
  const objKey = "at2";
  const myb3 = { at1: "at1", at2: "at2" };
  const myob4 = { ...myb3, [objKey]: "at2copied" };
  
  const id = "at2";
  const value = "at2copied";
  const prev = { at1: "at1", at2: "at2" };
  const updated = { ...prev, [id]: value };
  
  console.log("myb3", myb3);
  console.log("myb4", myob4);


  