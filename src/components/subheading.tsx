import styled from "styled-components";

import * as styles from "../styles";

type SubheadingLevel = 1 | 2;

type SubheadingProps = { level: SubheadingLevel };

const Subheading = styled.p`
  color: ${(props: SubheadingProps) =>
    styles[`subheading${props.level}`].color};
  font-family: ${(props: SubheadingProps) =>
    styles[`subheading${props.level}`].fontFamily};
  font-size: ${(props: SubheadingProps) =>
    styles[`subheading${props.level}`].fontSize.mobile};
  letter-spacing: ${(props: SubheadingProps) =>
    styles[`subheading${props.level}`].letterSpacing.mobile};
  line-height: ${(props: SubheadingProps) =>
    styles[`subheading${props.level}`].lineHeight.mobile};
  text-transform: upppercase;

  @media (min-width: 768px) {
    font-size: ${(props: SubheadingProps) =>
      styles[`subheading${props.level}`].fontSize.tablet};
    letter-spacing: ${(props: SubheadingProps) =>
      styles[`subheading${props.level}`].letterSpacing.tablet};
    line-height: ${(props: SubheadingProps) =>
      styles[`subheading${props.level}`].lineHeight.tablet};
  }

  @media (min-width: 1024px) {
    font-size: ${(props: SubheadingProps) =>
      styles[`subheading${props.level}`].fontSize.desktop};
    letter-spacing: ${(props: SubheadingProps) =>
      styles[`subheading${props.level}`].letterSpacing.desktop};
    line-height: ${(props: SubheadingProps) =>
      styles[`subheading${props.level}`].lineHeight.desktop};
    text-align: left;
  }
`;

export default Subheading;
