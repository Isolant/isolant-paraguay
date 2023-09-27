export default function Input({
  type,
  id,
  labelVisible,
  label,
  placeholder,
  required,
}: {
  type: string;
  id: string;
  labelVisible: boolean;
  label: string;
  placeholder: string;
  required: boolean;
}) {
  return (
    <div>
      {labelVisible !== false &&
        <label className="text-gray-800 font-poppins-regular mb-2" htmlFor={id}>{label}</label>
      }
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
        className="font-poppins-regular text-gray-600 border border-gray-300 p-3 rounded-xl w-full"
      />
    </div>
  )
}