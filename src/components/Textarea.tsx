export default function Textarea({
  id,
  labelVisible,
  label,
  placeholder,
  required,
  classes,
}: {
  id: string;
  labelVisible: boolean;
  label: string;
  placeholder: string;
  required: boolean;
  classes?: string;
}) {
  return (
    <div className={classes && classes}>
      {labelVisible !== false &&
        <label className="text-gray-800 font-poppins-regular mb-2" htmlFor={id}>{label}</label>
      }
      <textarea
        id={id}
        placeholder={placeholder}
        required={required}
        className="font-poppins-regular text-gray-600 border border-gray-300 p-3 rounded-xl w-full resize-none h-32 md:h-60"
      />
    </div>
  )
}