import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MediaCard from "../../Components/Card/CandidateCard";
import { getAllCandidate, getUserData } from "../../Data/ModifyData";
import "./style.scss";

export default () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!getUserData()) {
      navigate("/");
    }
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <h1 style={{ alignItems: "normal" }}>Voting page</h1>
      <div className="VotingPage">
        {Object.keys(getAllCandidate()).map((e: string) => (
          <div>
            <MediaCard
              name={e}
              voted={
                !!getAllCandidate()[e].voters.find(
                  (e: string) => e === getUserData()?.email?.value
                )
              }
              image={getAllCandidate()[e].image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
