const Input = (props) => {
  const { type, placeholder, name, defaultValue } = props;

  return (
    <input
      type={type}
      className="text-sm border border-slate-500 rounded w-full py-2 px-3 placeholder: opacity-80"
      placeholder={placeholder}
      name={name}
      id={name}
      defaultValue={defaultValue}
    />
  );
};

export default Input;
