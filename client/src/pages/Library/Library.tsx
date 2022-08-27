import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import Layout from "../../components/layout/Layout";
import { Typography } from "../../components/typography/Typography";
import { TopContainer } from "./Library.styled";

function Library() {
  return (
    <Layout title="Library">
      <TopContainer>
        <Typography variant="h1">Your spaces</Typography>
        <Link to="/space"><Button text="Create a space" /></Link>
      </TopContainer>
    </Layout>
  );
}

export default Library;
