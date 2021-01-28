import { css } from '@emotion/core';
import { createStyles } from '@material-ui/core/styles';

/**
export default`
  flex: 1;

  width: 100%;
  max-width: 1400px;
  padding: 10vh 2vw 5vw 2vw;

  margin: 0 auto;

  > h1 {
    padding-bottom: 3rem;
    font-size: 4rem;
  }

  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-height: 430px) {
  }
`;
**/

export default () =>
createStyles({
  root: {
    flex: '1',
    width: '100%',
    maxWidth: '1400px',
    padding: '10vh 2vw 5vw 2vw',
    margin: '0 auto',
    'h1': {
      paddingBottom: '3rem',
      fontSize: '4rem',
    }
  },
})