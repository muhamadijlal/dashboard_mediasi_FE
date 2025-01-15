function ListOptions({ value }) {
  return (
    <option value={value} className="capitalize" key={value}>
      {value}
    </option>
  );
}

export default ListOptions;
