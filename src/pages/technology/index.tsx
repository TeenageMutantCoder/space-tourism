import { useEffect } from "react";
import { navigate } from "gatsby";

const IndexPage = () => {
  useEffect(() => {
    navigate("/technology/launch-vehicle");
  });

  return null;
};

export default IndexPage;
