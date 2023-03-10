import styled from "styled-components";

export const Container = styled.div`
  @keyframes appear-smoothly {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes disappear-smoothly {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      display: none !important;
    }
  }

  .appear {
    animation-name: appear-smoothly;
    animation-duration: 0.4s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    opacity: 0;
  }

  .disappear {
    animation-name: appear-smoothly;
    animation-duration: 0.4s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    opacity: 0;
    animation-name: disappear-smoothly;
  }
`;
