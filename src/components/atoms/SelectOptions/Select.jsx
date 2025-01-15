function Select(props) {
  const {
    isDisabled,
    placeholder = "--Pilih--",
    name = "",
    children,
    defaultValue = "",
    handleChange,
  } = props;

  return (
    <select
      className="select select-bordered select-sm"
      name={name}
      disabled={isDisabled}
      defaultValue={defaultValue}
      onChange={(e) => handleChange(e.target.value)}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {children}
    </select>
  );
}

export default Select;
