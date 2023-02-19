import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import VoteIcon from "@mui/icons-material/HowToVote";
import CheckedIcon from "../CheckedAnimation/CheckedIcon";
import { useState } from "react";
import {
  getUserData,
  getVoters,
  vote,
  getUsersCount,
} from "../../Data/ModifyData";
import { LinearProgress } from "@mui/material";
interface IProps {
  name: string;
  image?: string;
  voted: boolean;
  setAllCardsStates: Function[];
}
export default ({ name, image, voted, setAllCardsStates }: IProps) => {
  const [checked, setChecked] = useState(!!voted);
  setAllCardsStates.push(() => {
    setChecked(false);
  });
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
      <CardContent>
        {checked ? (
          <CheckedIcon style={{}} />
        ) : (
          <div style={{ padding: 31 }}></div>
        )}
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => {
            const temp = vote(name, getUserData().email);
            setAllCardsStates.forEach((e) => {
              e();
            });
            if (temp) setChecked(true);
            else setChecked(false);
          }}
          variant="contained"
          color="success"
          size="medium"
        >
          {checked ? "Remove Vote" : "vote"}
          <VoteIcon />
        </Button>
      </CardActions>
      <p>
        {getVoters(name).length - 1}/{getUsersCount()} Votes
      </p>
      <LinearProgress
        variant="buffer"
        value={((getVoters(name).length - 1) * 100) / getUsersCount()}
        valueBuffer={100}
        style={{ margin: 20, marginTop: 0 }}
      />
    </Card>
  );
};
