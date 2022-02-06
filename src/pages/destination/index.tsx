import { useEffect } from "react";
import { navigate } from "gatsby";

const IndexPage = () => {
  useEffect(() => {
    navigate("/destination/moon");
  });

  return null;
};

export default IndexPage;
