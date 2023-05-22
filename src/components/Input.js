const Input = ({
  label,
  placeholder,
  name,
  type,
  value,
  onChange,
  onBlur,
  errors,
}) => {
  return (
    <label>
      <span className="label">{label}</span>
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        errors={errors}
      />
    </label>
  );
};

export default Input;
