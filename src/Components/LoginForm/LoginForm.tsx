import Button from "../Button/Button";
import Input from "../Input/Input";
import { getAllUsers } from "../../Data/ModifyData";
import { useNavigate } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";
export default () => {
  const email = { value: "" };
  const password = { value: "" };
  const navigate = useNavigate();
  const [error, setError] = useState("");
  return (
    <div>
      <Input valueRef={email} label="Email" name="email" type="email" />
      <Input
        valueRef={password}
        label="Password"
        name="username"
        type={"password"}
      />
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={!!error}
        autoHideDuration={5000}
        onClose={() => {
          setError("");
        }}
      >
        <Alert variant="filled" severity="error">
          {error}
        </Alert>
      </Snackbar>
      <Button
        onclick={(startLoading, endLoading) => {
          startLoading();
          setTimeout(() => {
            endLoading();
            if (getAllUsers().find((e: any) => e.email == email.value)) {
              localStorage.setItem("user", JSON.stringify({ email, password }));
              navigate("VotingPage");
            } else {
              setError("Email or Password is incorrect!!");
            }
          }, 1000);
        }}
        text="Login"
      />
    </div>
  );
};
