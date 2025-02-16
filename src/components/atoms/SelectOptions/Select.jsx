function Select(props) {
  const {
    isDisabled,
    placeholder = "--Pilih--",
    name = "",
    children,
    defaultValue = "",
    handleChange,
    style = "",
  } = props;

  return (
    <select
      className={`select select-bordered select-sm ${style}`}
      name={name}
      disabled={isDisabled}
      defaultValue={defaultValue}
      onChange={(e) => handleChange(e.target.value)}
    >
      <option value="">{placeholder}</option>
      {children}
    </select>
  );
}

export default Select;
