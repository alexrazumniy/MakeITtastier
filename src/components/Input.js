const Input = ({
  label,
  placeholder,
  name,
  type = "text",
  value,
  onChange,
}) => {
  return (
    <label style={{display: "block"}}>
      <span className="label">{label}</span>
      <input className="input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </label>
  );
};

export default Input;
