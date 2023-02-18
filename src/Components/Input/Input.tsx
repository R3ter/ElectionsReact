import "./style.scss";
interface props {
  label: string;
  name: string;
  type: "text" | "password" | "email" | "number";
  style?: React.CSSProperties;
  valueRef?: { value: string };
}
const Input = ({ label, name, type = "text", style, valueRef }: props) => {
  return (
    <div className="input" style={{ textAlign: "left", margin: 10, ...style }}>
      {/* <label htmlFor="input">{label}: </label> */}
      <br></br>
      <input
        onChange={(e) => {
          if (valueRef) valueRef.value = e.target.value;
        }}
        placeholder={label}
        id="input"
        name={name}
        type={type}
      />
    </div>
  );
};

export default Input;
