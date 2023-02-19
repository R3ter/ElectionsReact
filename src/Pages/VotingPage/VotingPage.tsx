import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MediaCard from "../../Components/Card/CandidateCard";
import Header from "../../Components/Header/Header";
import { getAllCandidate, getUserData } from "../../Data/ModifyData";
import "./style.scss";

export default () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!getUserData()) {
      navigate("/");
    }
  }, []);
  const setCardsStates: Function[] = [];
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <h1 style={{ alignItems: "normal" }}>Voting page</h1>
      <div className="VotingPage">
        {Object.keys(getAllCandidate()).map((e: string) => (
          <div>
            <MediaCard
              setAllCardsStates={setCardsStates}
              name={e}
              voted={
                !!getAllCandidate()[e].voters.find(
                  (e: string) => e === getUserData()?.email
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
