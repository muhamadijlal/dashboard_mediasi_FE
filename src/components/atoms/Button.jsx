function Button({ name = "button", isDisabled }) {
  return (
    <button
      className="btn btn-neutral btn-sm max-w-24 capitalize"
      disabled={isDisabled}
    >
      {name}
    </button>
  );
}

export default Button;
