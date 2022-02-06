import styled from "styled-components";

import * as styles from "../styles";

type HeadingProps = { level: 1 | 2 | 3 | 4 | 5; pageHeading?: boolean };

const Heading = styled.h1`
  color: ${(props: HeadingProps) =>
    props.pageHeading
      ? styles.colors.white
      : styles[`heading${props.level}`].color};
  font-family: ${(props: HeadingProps) =>
    styles[`heading${props.level}`].fontFamily};
  font-size: ${(props: HeadingProps) =>
    styles[`heading${props.level}`].fontSize.mobile};
  font-weight: normal;
  line-height: ${(props: HeadingProps) =>
    styles[`heading${props.level}`].lineHeight.mobile};
  letter-spacing: ${(props: HeadingProps) =>
    styles[`heading${props.level}`].letterSpacing.mobile};
  opacity: ${(props: HeadingProps) =>
    props.level === 4 ? "0.5042" : "initial"};
  text-align: center;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: ${(props: HeadingProps) =>
      styles[`heading${props.level}`].fontSize.tablet};
    line-height: ${(props: HeadingProps) =>
      styles[`heading${props.level}`].lineHeight.tablet};
    letter-spacing: ${(props: HeadingProps) =>
      styles[`heading${props.level}`].letterSpacing.tablet};
    margin-left: ${(props: HeadingProps) => (props.pageHeading ? "38.5px" : 0)};
    margin-top: ${(props: HeadingProps) => (props.pageHeading ? "40px" : 0)};
    text-align: ${(props: HeadingProps) =>
      props.pageHeading ? "left" : "center"};
  }

  @media (min-width: 1024px) {
    font-size: ${(props: HeadingProps) =>
      styles[`heading${props.level}`].fontSize.desktop};
    line-height: ${(props: HeadingProps) =>
      styles[`heading${props.level}`].lineHeight.desktop};
    letter-spacing: ${(props: HeadingProps) =>
      styles[`heading${props.level}`].letterSpacing.desktop};
    margin-left: ${(props: HeadingProps) => (props.pageHeading ? "8vw" : 0)};
    margin-top: ${(props: HeadingProps) => (props.pageHeading ? "76px" : 0)};
    text-align: left;
  }

  b {
    margin-right: 1em;
    opacity: 0.25;
  }
`;

export default Heading;
