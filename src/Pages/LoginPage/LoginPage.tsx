import "./style.scss";
import Logo from "../../Components/Logo/Logo";
import LoginForm from "../../Components/LoginForm/LoginForm";

export default () => {
  return (
    <div className="loginPage">
      <Logo />
      <h1>Login Page</h1>
      <LoginForm />
    </div>
  );
};
