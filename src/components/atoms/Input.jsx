function Input({
  type = "text",
  name = "",
  placeholder = "",
  value = "",
  handleChange,
}) {
  return (
    <>
      <input
        type={type}
        name={name}
        defaultValue={value}
        placeholder={placeholder}
        onChange={handleChange}
        className="input input-sm input-bordered grid w-full max-w-xs grid-cols-1"
      />
    </>
  );
}

export default Input;
