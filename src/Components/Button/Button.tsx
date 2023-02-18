import { useState } from "react";
import Button from "@mui/material/Button";
import "./style.scss";
import { CircularProgress } from "@mui/material";

interface props {
  text: string;
  style?: React.CSSProperties;
  onclick(startLoading: Function, endLoading: Function): any;
}
export default ({ text, style = {}, onclick }: props) => {
  const [loading, setLoading] = useState(false);
  return (
    <button
      disabled={loading}
      className="button"
      style={{ ...style }}
      onClick={() =>
        onclick(
          () => {
            setLoading(true);
          },
          () => {
            setLoading(false);
          }
        )
      }
    >
      {/* {loading ? <CircularProgress color="info" size={25} /> : text} */}
      {loading ? "Loading..." : text}
    </button>
  );
};
