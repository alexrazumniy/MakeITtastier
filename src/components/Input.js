const Input = ({
  label,
  placeholder,
  name,
  type,
  value,
  onChange,
}) => {
  return (
    <label>
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
