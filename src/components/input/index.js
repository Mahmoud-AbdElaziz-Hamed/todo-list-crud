const Input = ({ type, value, onChange, className, labelText }) => {
  return (
    <>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={className}
      />
    </>
  );
};

export default Input;