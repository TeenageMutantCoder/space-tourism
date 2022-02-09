import styled from "styled-components";
import { Link } from "gatsby";

import * as styles from "../styles";

type NavTextProps = { headerNav?: boolean };

const NavText = styled(Link).attrs({ activeClassName: "active" })`
  color: ${styles.navText.color};
  font-family: ${styles.navText.fontFamily};
  font-size: ${(props: NavTextProps) =>
    props.headerNav ? "16px" : styles.navText.fontSize.mobile};
  letter-spacing: ${(props: NavTextProps) =>
    props.headerNav ? "2.7px" : styles.navText.letterSpacing.mobile};
  line-height: ${(props: NavTextProps) =>
    props.headerNav ? "1.5em" : styles.navText.lineHeight.mobile};
  margin-bottom: 32px;
  opacity: 1;
  padding-left: 32px;
  position: relative;
  text-decoration: none;

  @media (min-width: 768px) {
    font-size: ${(props: NavTextProps) =>
      props.headerNav ? "14px" : styles.navText.fontSize.tablet};
    letter-spacing: ${(props: NavTextProps) =>
      props.headerNav ? "2.36px" : styles.navText.letterSpacing.tablet};
    line-height: ${styles.navText.lineHeight.tablet};
    margin-bottom: 0;
    padding: 32px 0;
  }

  @media (min-width: 1024px) {
    font-size: ${styles.navText.fontSize.desktop};
    letter-spacing: ${styles.navText.letterSpacing.desktop};
    line-height: ${styles.navText.lineHeight.desktop};
  }

  b {
    @media (min-width: 768px) {
      display: none;
    }

    ::after {
      content: " ";
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  &.active::before {
    background-color: ${styles.navText.color};
    content: "";
    display: block;
    height: 1.5em;
    position: absolute;
    right: 0;
    width: 4px;

    @media (min-width: 768px) {
      width: 100%;
      height: 3px;
      right: initial;
      bottom: 0;
    }
  }
`;

export default NavText;
