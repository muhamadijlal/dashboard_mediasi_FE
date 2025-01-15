import Input from "@atoms/Input";

function FormInput(props) {
  const { type, name, placeholder, labelName, value, handleChange } = props;

  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text truncate">{labelName}</span>
      </div>

      <Input
        type={type}
        name={name}
        value={value}
        handleChange={handleChange}
        placeholder={placeholder}
      />
    </label>
  );
}

export default FormInput;
