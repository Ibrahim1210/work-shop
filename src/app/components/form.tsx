import React, { useState } from "react";
import { TextInput } from "./form/TextInput";

function Form() {
  const [checked, setChecked] = useState(false);
  const [dietaryrequirements, setdietaryrequirements] = useState<string>("");
  const [expectations, setExpectations] = useState("");
  const [user, setUser] = useState({
    company: "",
    firstName: "",
    lastName: "",
    email: "",
    title: "",
    phone: "",
  });
  const [userSelection, setUserSelection] = useState({
    car: "",
  });
  const [jobSelection, setJobSelection] = useState({
    job1: false,
    job2: false,
  });

  const handleDietaryRequirementsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setdietaryrequirements(e.target.value);
  const handleExpectationsChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => setExpectations(e.target.value);

  const onJobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJobSelection((prev) => {
      const newState = { ...prev, [e.target.id]: e.target.checked };
      return newState;
    });
  };

  //input:ibrahim
  //conts e={nativeevent:{},feild2:{},target:{value:"ibrahim",id:"company"}}

  const onUserDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedState={...user,[e.target.id]:e.target.value}
    //{ firstName: "",lastName: "",email: "",title: "qtzeqwte",phone: "",company:"ibrahim"}
    //{ firstName: "",lastName: "",email: "",phone: "",title:"qtzeqwtex"}
    setUser(updatedState)
  };
  const onUserSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserSelection((prev) => {
      const newState = { ...prev, [e.target.id]: e.target.value };
      return newState;
    });
  };

  const formData = [
    { id: "firstName", label: "First Name", onChange: onUserDataChange },
    { id: "lastName", label: "Last Name", onChange: onUserDataChange },
    { id: "email", label: "E-mail", onChange: onUserDataChange },
    { id: "title", label: "Title", onChange: onUserDataChange },
    { id: "phone", label: "Phone", onChange: onUserDataChange },
    { id: "fax", label: "Fax", onChange: onUserDataChange },
    { id: "company", label: "Company", onChange: onUserDataChange },
  ];

  const checkBoxSection = [
    {
      label: "Job fuction",
      options: [
        { id: "job1", label: "CRM", onChange: onJobChange },
        { id: "job2", label: "CRM2", onChange: onJobChange },
      ],
      id: 1,
    },
  ];

  return (
    <div className="max-w-md mx-auto mt-4 p-4 bg-white rounded shadow-md">
      <form>
        {formData.map((data) => (
          <TextInput
            key={data.id}
            value={user[data.id as keyof typeof user]}
            id={data.id}
            label={data.label}
            onUserDataChange={onUserDataChange}
          />
        ))}

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
              id="car"
              value={userSelection.car}
              onChange={onUserSelectionChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            >
              <option value=""> --Select a date-- </option>
              <option value="Volvo">Volvo</option>
              <option value="Fiat">Fiat</option>
            </select>
          </div>
        </div>

        {checkBoxSection.map((section) => (
          <div key={section.id} className="mb-4 flex items-center">
            <label className="flex-shrink-0 block text-sm font-semibold text-gray-600 w-1/3">
              <div>
                <label className="flex relative">{section.label}</label>
                {section.options.map((option) => (
                  <div key={option.id} className="ml-36 mb-2 flex w-72">
                    <input
                      id={option.id}
                      type="checkbox"
                      checked={
                        jobSelection[option.id as keyof typeof jobSelection]
                      }
                      onChange={onJobChange}
                    />
                    <label className="ml-4 text-lg">{option.label}</label>
                  </div>
                ))}
              </div>
            </label>
          </div>
        ))}

        <div className="mb-4 flex items-center">
          <label className="flex-shrink-0 block text-sm font-semibold text-gray-600 w-1/3">
            Dietary Requirements :
          </label>
          <div className="flex-grow">
            <input
              value={dietaryrequirements}
              onChange={handleDietaryRequirementsChange}
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
              value={expectations}
              onChange={handleExpectationsChange}
              className="p-2 border border-gray-300 rounded w-full"
              style={{ resize: "none" }}
            />
          </div>
        </div>
        <button
          type="button"
          onClick={(e) => {
            console.log(
              userSelection,
              user,
              dietaryrequirements,
              expectations,
              jobSelection
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
