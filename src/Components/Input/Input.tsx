interface props {
  label: string;
  name: string;
  type: "text" | "password" | "email" | "number";
  style?: React.CSSProperties;
}
const Input = ({ label, name, type = "text", style }: props) => {
  return (
    <div style={{ textAlign: "left", margin: 10, ...style }}>
      <label htmlFor="input">{label}: </label>
      <br></br>
      <input id="input" name={name} type={type} />
    </div>
  );
};

export default Input;
