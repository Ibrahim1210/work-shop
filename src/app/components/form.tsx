import React, { useState } from "react";
import { TextInput } from "./form/TextInput";
import SubmitButton from "./form/SubmitButton";
import Checkbox from "./form/Checkbox";
import { CheckboxSection } from "./form/CheckBoxSection";

function Form() {
  const [state, setState] = useState({
    checked: false,
    dietaryrequirements: "",
    expectations: "",
    user: {
      firstName: "",
      lastName: "",
      email: "",
      title: "",
      phone: "",
      company: "",
    },
    userSelection: {
      car: "",
    },
    jobSelection: {
      job1: false,
      job2: false,
    },
  });

  const {
    checked,
    dietaryrequirements,
    expectations,
    user,
    userSelection,
    jobSelection,
  } = state;

  const handleDietaryRequirementsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setState({ ...state, dietaryrequirements: e.target.value });

  const handleExpectationsChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => setState({ ...state, expectations: e.target.value });

  const onJobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => {
      const newState = {
        ...prev,
        jobSelection: { ...prev.jobSelection, [e.target.id]: e.target.checked },
      };
      return newState;
    });
  };

  const setUser = (updatedState: {
    company?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    title?: string;
    phone?: string;
  }) => {
    setState((prev) => ({ ...prev, user: { ...prev.user, ...updatedState } }));
  };

  const onUserDataChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const updatedState = {
      ...user,
      [id]: e.target.value,
    };
    setUser(updatedState);
  };

  const onUserSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState({
      ...state,
      userSelection: { ...state.userSelection, [e.target.id]: e.target.value },
    });
  };

  const formData = [
    { id: "firstName", label: "First Name", onChange: onUserDataChange },
    { id: "lastName", label: "Last Name", onChange: onUserDataChange },
    { id: "email", label: "E-mail", onChange: onUserDataChange },
    { id: "title", label: "Title", onChange: onUserDataChange },
    { id: "phone", label: "Phone", onChange: onUserDataChange },
    { id: "company", label: "Company", onChange: onUserDataChange },
  ];

  const checkBoxSection = [
    {
      label: "Job function",
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
            onUserDataChange={(e) => onUserDataChange(e, data.id)}
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
                onChange={(e) =>
                  setState({ ...state, checked: e.target.checked })
                }
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
        <CheckboxSection
          checkBoxSection={checkBoxSection}
          jobSelection={jobSelection}
          onJobChange={onJobChange}
        />

        <div className="mb-4 flex items-center">
          <Label text="Digital Requirements" />
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

        <SubmitButton
          label="at"
          onClick={(e: any) => {
            console.log(
              userSelection,
              user,
              dietaryrequirements,
              expectations,
              jobSelection
            );
          }}
        />
      </form>
    </div>
  );
}

const Label = (props:any) => {
  return (
    <label className="flex-shrink-0 block text-sm font-semibold text-gray-600 w-1/3">
      {props.text}
    </label>
  );
};

export default Form;
