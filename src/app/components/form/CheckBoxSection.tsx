import Checkbox from "./Checkbox";

export const CheckboxSection = (props: any) => {
  return (
    <>
      {props.checkBoxSection.map((section: any) => (
        <div key={section.id} className="mb-4 flex items-center">
          <label className="flex-shrink-0 block text-sm font-semibold text-gray-600 w-2/3">
            <div>
              <label className="flex relative">{section.label}</label>
              {section.options.map((option: any) => (
                <Checkbox
                  key={option.id}
                  id={option.id}
                  checked={
                    props.jobSelection[
                      option.id as keyof typeof props.jobSelection
                    ]
                  }
                  onChange={props.onJobChange}
                  label={option.label}
                  value={""}
                />
              ))}
            </div>
          </label>
        </div>
      ))}
    </>
  );
};
