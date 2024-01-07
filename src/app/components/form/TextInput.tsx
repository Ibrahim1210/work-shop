export interface ITextInput {
    id: string;
    label: string;
    onUserDataChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
  }
export   const TextInput = ({ id, value, label, onUserDataChange }: ITextInput) => {
    return (
      <div className="mb-4 flex items-center">
        <label className="flex-shrink-0 block text-sm font-semibold text-gray-600 w-1/3">
          {label}
        </label>
        <div className="flex-grow">
          <input
            id={id}
            value={value}
            onChange={onUserDataChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>
      </div>
    );
  };