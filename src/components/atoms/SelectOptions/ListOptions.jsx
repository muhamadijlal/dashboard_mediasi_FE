function ListOptions({ value, label }) {
  return (
    <option value={value} className="capitalize" key={value}>
      {label}
    </option>
  );
}

export default ListOptions;
