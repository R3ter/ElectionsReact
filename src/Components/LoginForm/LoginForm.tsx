import Button from "../Button/Button";
import Input from "../Input/Input";
import Users from "../../Data/Users";
import { useNavigate } from "react-router-dom";
export default () => {
  const email = { value: "" };
  const password = { value: "" };
  const navigate = useNavigate();

  return (
    <div>
      <Input valueRef={email} label="Email" name="email" type="email" />
      <Input
        valueRef={password}
        label="Password"
        name="username"
        type={"password"}
      />
      <Button
        onclick={(startLoading, endLoading) => {
          startLoading();
          setTimeout(() => {
            endLoading();
            if (Users.find((e) => e.email == email.value)) {
              navigate("VotingPage");
            }
          }, 1000);
        }}
        text="Login"
      />
    </div>
  );
};
