import { useEffect } from "react";
import { navigate } from "gatsby";

const IndexPage = () => {
  useEffect(() => {
    navigate("/crew/commander");
  });

  return null;
};

export default IndexPage;
