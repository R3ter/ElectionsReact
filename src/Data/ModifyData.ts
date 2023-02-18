import users from "./users.json";
import Parties from "./Parties.json";

const getAllUsers = (): any => {
  return users;
};
const getAllCandidate = (): any => {
  const obj = localStorage.getItem("info");
  if (obj) return JSON.parse(obj);
  return Parties;
};
const vote = (candidate: string, email: string): Boolean => {
  const data: any = getAllCandidate();
  console.log(getAllCandidate());
  if (getIfUserVoted(email, candidate)) {
    data[candidate].voters.push(email);
    localStorage.setItem("info", JSON.stringify(data));

    return true;
  }
  data[candidate].voters = data[candidate].voters.filter(
    (e: string) => e !== email
  );
  localStorage.setItem("info", JSON.stringify(data));
  return false;
};
const getIfUserVoted = (email: string, candidate: string): Boolean => {
  const data = getAllCandidate();
  return !data[candidate].voters.find((e: string) => {
    return e === email;
  });
};
const getVoters = (candidate: string) => {
  const data = getAllCandidate();
  return data[candidate].voters;
};
const getUserData = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
  return null;
};
const getUsersCount = () => getAllUsers().length;
export {
  getUsersCount,
  getAllUsers,
  getAllCandidate,
  getIfUserVoted,
  vote,
  getVoters,
  getUserData,
};