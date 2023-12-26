import React, { useState } from "react";

import SettingsComponent from "./ayarlar";

//TODO:1 diger input tiplerini de forma ekle
//handler Fonksiyonlari yukari tasi
//
function Form() {
  const [company, setCompany] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [checked, setChecked] = useState(false);
  const [car, setCar] = useState("");
  const [job1, setJob1] = useState(false);
  const [job2, setJob2] = useState(false);
  const [text, setText] = useState("");
  const [task, setTask] = useState("");
  const [jobSelection,setJobSelection]=useState({
    job3:false,
    job4:true,
    job5:true
  })

  const handleCompanyChange=(e:React.ChangeEvent<HTMLInputElement>) => setCompany(e.target.value)

  const onJobChange=(e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.id);
    setJobSelection(prev=>{
      const newState={...prev,[e.target.id]:e.target.checked}
      return newState
    })
    //setJob1(e.target.checked)
  
  }

  return (
    <div className="max-w-md mx-auto mt-4 p-4 bg-white rounded shadow-md">
      <form>
        <div className="mb-4 flex items-center">
          <label className="flex-shrink-0 block text-sm font-semibold text-gray-600 w-1/3">
            Company :
          </label>
          <div className="flex-grow">
            <input
              value={company}
              onChange={handleCompanyChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <label className="flex-shrink-0 block text-sm font-semibold text-gray-600 w-1/3">
            First Name :
          </label>
          <div className="flex-grow">
            <input
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <label className="flex-shrink-0 block text-sm font-semibold text-gray-600 w-1/3">
            Last Name :
          </label>
          <div className="flex-grow">
            <input
              onChange={(e) => setLastName(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <label className="flex-shrink-0 block text-sm font-semibold text-gray-600 w-1/3">
            E-mail Address :
          </label>
          <div className="flex-grow">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <label className="flex-shrink-0 block text-sm font-semibold text-gray-600 w-1/3">
            Title :
          </label>
          <div className="flex-grow">
            <input
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <label className="flex-shrink-0 block text-sm font-semibold text-gray-600 w-1/3">
            Phone :
          </label>
          <div className="flex-grow">
            <input
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <label className="flex-shrink-0 block text-sm font-semibold text-gray-600 w-2/3">
            <div className="flex">
              <p className="">Cancel Registration :</p>

              <input
                className="ml-20"
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
            </div>
          </label>
        </div>

        <div className="mb-4 flex items-center">
          <label className="flex-shrink-0 block text-sm font-semibold text-gray-600 w-1/3">
            252 Training Session:
          </label>
          <div className="flex-grow">
            <select
              id="bntstate"
              value={car}
              onChange={(e) => setCar(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            >
              <option value=""> --Select a date-- </option>
              <option value="Volvo">Volvo</option>
              <option value="Fiat">Fiat</option>
            </select>
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <label className="flex-shrink-0 block text-sm font-semibold text-gray-600 w-1/3">
            <div>
              <label className="flex relative">Job fuction :</label>

              <div className="ml-36 mb-2 flex w-72">
                <input
                  type="checkbox"
                  checked={job1}
                  onChange={(e) => setJob1(e.target.checked)}
                />
                <label className="text-lg">Campaign Management</label>
              </div>

              <div className="ml-36 mb-2 flex w-72">
                <input
                  type="checkbox"
                  checked={job2}
                  onChange={(e) => setJob2(e.target.checked)}
                />
                <label className="text-lg">CRM Administration</label>
              </div>
            </div>
          </label>
        </div>
        <div className="mb-4 flex items-center">
          <label className="flex-shrink-0 block text-sm font-semibold text-gray-600 w-1/3">
            <div>
              <label className="flex relative">Job fuction :</label>

              <div className="ml-36 mb-2 flex w-72">
                <input
                  type="checkbox"
                  checked={jobSelection.job3}
                  onChange={(e) => {
                    setJobSelection(prev=>{
                      const newState={...prev,job3:e.target.checked}
                      return newState
                    })
                    //setJob1(e.target.checked)
                  
                  }}
                />
                <label className="text-lg">Campaign Management</label>
              </div>

              <div className="ml-36 mb-2 flex w-72">
                <input
                id="job4"
                  type="checkbox"
                  checked={jobSelection.job4}
                  onChange={onJobChange}
                />
                <label className="text-lg">CRM Administration</label>
              </div>
              <div className="ml-36 mb-2 flex w-72">
                <input
                id="job5"
                  type="checkbox"
                  checked={jobSelection.job5}
                  onChange={onJobChange}
                />
                <label className="text-lg">CRM Administration</label>
              </div>
            </div>
          </label>
        </div>

        <div className="mb-4 flex items-center">
          <label className="flex-shrink-0 block text-sm font-semibold text-gray-600 w-1/3">
            Dietary Requirements :
          </label>
          <div className="flex-grow">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <label className="flex-shrink-0 block text-sm font-semibold text-gray-600 w-1/3">
            Expectations? :
          </label>
          <div className="flex-grow">
            <textarea
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="p-2 border border-gray-300 rounded w-full"
              style={{ resize: "none" }}
            />
          </div>
        </div>
        <button
          type="button"
          onClick={(e) => {
            console.log(
              company,
              firstName,
              lastName,
              email,
              title,
              phone,
              car,
              job1,
              job2,
              text,
              task
            );
          }}
          className="bg-blue-500 text-white p-2 rounded "
        >
          AT
        </button>
      </form>
    </div>
  );
}

export default Form;
