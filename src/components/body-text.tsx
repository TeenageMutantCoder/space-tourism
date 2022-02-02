import styled from "styled-components";

import * as styles from "../styles";

const BodyText = styled.p`
  color: ${styles.bodyText.color};
  font-family: ${styles.bodyText.fontFamily};
  font-size: ${styles.bodyText.fontSize.mobile};
  line-height: ${styles.bodyText.lineHeight.mobile};
  text-align: center;

  @media (min-width: 768px) {
    font-size: ${styles.bodyText.fontSize.tablet};
    line-height: ${styles.bodyText.lineHeight.tablet};
  }

  @media (min-width: 1024px) {
    font-size: ${styles.bodyText.fontSize.desktop};
    line-height: ${styles.bodyText.lineHeight.desktop};
    text-align: left;
  }
`;

export default BodyText;
