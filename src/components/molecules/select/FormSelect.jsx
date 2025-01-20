import Select from "@atoms/SelectOptions/Select";
import ListOptions from "@atoms/SelectOptions/ListOptions";

function FormSelect(props) {
  const {
    isDisabled = false,
    name,
    placeholder,
    labelName,
    options = [],
    handleChange,
  } = props;

  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text truncate">{labelName}</span>
      </div>
      <Select
        placeholder={placeholder}
        name={name}
        isDisabled={isDisabled}
        handleChange={handleChange}
      >
        {options?.map((item) => (
          <ListOptions value={item.value} label={item.label} key={item.value} />
        ))}
      </Select>
    </label>
  );
}

export default FormSelect;
