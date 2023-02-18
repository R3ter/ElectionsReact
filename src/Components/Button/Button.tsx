import { useState } from "react";
import "./style.scss";

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
      {loading ? "Loaidng..." : text}
    </button>
  );
};
