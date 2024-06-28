import { ChangeEvent } from "react";

interface labeledinput {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}
const Labeled = ({ label, placeholder, onChange, type }: labeledinput) => {
  return (
    <div>
      <label className="block mb-2 text-md font-medium text-gray-900 pt-2 pb-2">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        className="w-full border text-md rounded-lg block p-2.5 dark:border-gray-200 dark:placeholder-gray-400 dark:text-black "
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Labeled;
