import React, { useState } from "react";
import CheckboxExample from "./kutucuk";
import SettingsComponent from "./ayarlar";
function Form() {
  const [company,setCompany]=useState("")
  return (
    <div className="max-w-md mx-auto mt-4 p-4 bg-white rounded shadow-md">
      <form>
        <div className="mb-4 flex items-center">
          <label className="flex-shrink-0 block text-sm font-semibold text-gray-600 w-1/3">
            Company :
          </label>
          <div className="flex-grow">
            <input  value={company} onChange={(e)=>setCompany(e.target.value)}    className="mt-1 p-2 w-full border border-gray-300 rounded" />
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <label className="flex-shrink-0 block text-sm font-semibold text-gray-600 w-1/3">
            First Name :
          </label>
          <div className="flex-grow">
            <input className="mt-1 p-2 w-full border border-gray-300 rounded" />
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <label className="flex-shrink-0 block text-sm font-semibold text-gray-600 w-1/3">
            Last Name :
          </label>
          <div className="flex-grow">
            <input className="mt-1 p-2 w-full border border-gray-300 rounded" />
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <label className="flex-shrink-0 block text-sm font-semibold text-gray-600 w-1/3">
            E-mail Address :
          </label>
          <div className="flex-grow">
            <input className="mt-1 p-2 w-full border border-gray-300 rounded" />
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <label className="flex-shrink-0 block text-sm font-semibold text-gray-600 w-1/3">
            Title :
          </label>
          <div className="flex-grow">
            <input className="mt-1 p-2 w-full border border-gray-300 rounded" />
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <label className="flex-shrink-0 block text-sm font-semibold text-gray-600 w-1/3">
            Phone :
          </label>
          <div className="flex-grow">
            <input className="mt-1 p-2 w-full border border-gray-300 rounded" />
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <label className="flex-shrink-0 block text-sm font-semibold text-gray-600 w-2/3">
            <CheckboxExample />
          </label>
        </div>

        <div className="mb-4 flex items-center">
          <label className="flex-shrink-0 block text-sm font-semibold text-gray-600 w-1/3">
            252 Training Session:
          </label>
          <div className="flex-grow">
            <select className="mt-1 p-2 w-full border border-gray-300 rounded">
              <option value="Ford"> --Select a date-- </option>
              <option value="Volvo" selected>
                Volvo
              </option>
              <option value="Fiat">Fiat</option>
            </select>
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <label className="flex-shrink-0 block text-sm font-semibold text-gray-600 w-1/3">
            <SettingsComponent />
          </label>
        </div>

        <div className="mb-4 flex items-center">
          <label className="flex-shrink-0 block text-sm font-semibold text-gray-600 w-1/3">
            Dietary Requirements :
          </label>
          <div className="flex-grow">
            <input className="mt-1 p-2 w-full border border-gray-300 rounded" />
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <label className="flex-shrink-0 block text-sm font-semibold text-gray-600 w-1/3">
            Expectations? :
          </label>
          <div className="flex-grow">
            <textarea className="p-2 border border-gray-300 rounded w-full" />
          </div>
        </div>
        <button type="button" onClick={(e)=>{
          console.log(company)
       
          }} className="bg-blue-500 text-white p-2 rounded ">AT</button>
      </form>

    </div>
  );
}

export default Form;
