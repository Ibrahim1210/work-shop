//spread operator
//1.Array
//2.Object

const myObj = { hell: "hello", val: "val", val1: "val1" }; //adress=0x7854545454
const myObj2 = { ...myObj }; //{hell:"hello",val:"val",val1:"val1" }//adress0x7854787435
console.log(myObj2 === myObj); //false
const myObj3 = { ...myObj, val1: "val1 edited" };
//{hell:"hello",val:"val",val1:"val1"}
//{hell:"hello",val:"val",val1:"val1",val1:"val1 edited"}
//overwrite
//result: {hell:"hello",val:"val",val1:"val1 edited"}
// const user = { userName: "ibrahim", userId: 1 };
// const user1 = { ...user, userId: 2 };
// const user2 = { ...user, userName: "hello" };
// const user3 = { ...user, age: 15 };
// console.log("user==>", user);
// console.log("user1==>", user1);
// console.log("user2==>", user2);
// console.log("user3==>", user3);
// ///
// const obj1 = { age: 15, name: "ibrahim" };
// const obj2 = { ...obj1, age: 10 };
// //@ts-ignore
// const obj3 = { age: 58, ...obj1 }; //{age:15,name:"Ibrahim"}
// console.log("obj3==>", obj3);
//NESTED OBJECT
const nestedObj = {
  userName: "ibrahim",
  age: 25,
  hobby: { tennis: true, football: false },
};

//1: {userName:"mehmet",age:25,hobby:{tennis:true,football:false}}
const nestedObj2 = { ...nestedObj, userName: "mehmet" };
//console.log(nestedObj2);

//2: {userName:"ahmet",city:"alasehir",age:25,hobby:{tennis:true,football:false}}

const nestedObj3 = { ...nestedObj, userName: "ahmet", city: "alaşehir" };
//console.log(nestedObj3);

//3.{userName:"ahmet",city:"alasehir",age:25,hobby:{tennis:true,football:true}}

const nestedObj4 = {
  ...nestedObj,
  userName: "ahmet",
  city: "alaşehir",
  hobby: { ...nestedObj.hobby, football: true },
};
//console.log(nestedObj4);

//4.{userName:"ahmet",city:"alasehir",age:25,hobby:{tennis:false,football:false}}

const nestedObj5 = {
  ...nestedObj,
  userName: "ahmet",
  city: "alaşehir",
  hobby: { ...nestedObj.hobby, tennis: false },
};
//console.log(nestedObj5);

//4.{userName:"ahmet",city:"alasehir",age:25,hobby:{tennis:false,football:true}}
const nestedObj6 = {
  ...nestedObj,
  userName: "ahmet",
  city: "alaşehir",
  hobby: { tennis: false, fooball: true },
};
//console.log(nestedObj6);

///
const deepNested = {
  userName: "ibrahim",
  age: 25,
  hobby: {
    tennis: true,
    football: false,
    extra: { info: { title: "title", header: "header" } },
  },
};
//{userName:"ibrahim",age:25, hobby: { tennis: true, football: false,extra:{info:{title:"title1",header:"header"}} }}
const deepNested1 = {
  ...deepNested,
  hobby: {
    ...deepNested.hobby,
    extra: {
      ...deepNested.hobby.extra,
      info: { ...deepNested.hobby.extra.info, title: "title1" },
    },
  },
};

//

const state = {
  field1: "field1",
  field2: "field2",
  field3: "field3",
};

const updateField1 = (value: string) => {
  return { ...state, field1: value, field2: "", field3: "" };
};

const updateField2 = (value: string) => {
  return { ...state, field2: value, field1: "", field3: "" };
};

const updateField3 = (value: string) => {
  return { ...state, field3: value, field1: "", field2: "" };
};

console.log(updateField1("Field 1 new project"));
console.log(updateField2("Field 2 new project"));
console.log(updateField3("Field 3 new project"));
