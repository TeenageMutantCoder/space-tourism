import styled from "styled-components";

import * as styles from "../styles";

type HeadingProps = { level: 1 | 2 | 3 | 4 | 5 };

const Heading = styled.h1`
  color: ${(props: HeadingProps) => styles[`heading${props.level}`].color};
  font-family: ${(props: HeadingProps) =>
    styles[`heading${props.level}`].fontFamily};
  font-size: ${(props: HeadingProps) =>
    styles[`heading${props.level}`].fontSize.mobile};
  font-weight: normal;
  line-height: ${(props: HeadingProps) =>
    styles[`heading${props.level}`].lineHeight.mobile};
  letter-spacing: ${(props: HeadingProps) =>
    styles[`heading${props.level}`].letterSpacing.mobile};
  text-align: center;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: ${(props: HeadingProps) =>
      styles[`heading${props.level}`].fontSize.tablet};
    line-height: ${(props: HeadingProps) =>
      styles[`heading${props.level}`].lineHeight.tablet};
    letter-spacing: ${(props: HeadingProps) =>
      styles[`heading${props.level}`].letterSpacing.tablet};
  }

  @media (min-width: 1024px) {
    font-size: ${(props: HeadingProps) =>
      styles[`heading${props.level}`].fontSize.desktop};
    line-height: ${(props: HeadingProps) =>
      styles[`heading${props.level}`].lineHeight.desktop};
    letter-spacing: ${(props: HeadingProps) =>
      styles[`heading${props.level}`].letterSpacing.desktop};
    text-align: left;
  }
`;

export default Heading;
