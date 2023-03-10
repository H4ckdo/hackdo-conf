import styled from "styled-components";

export const Container = styled.div`
  .background-section {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    align-items: center;
    height: 700px;
    .background-section__date {
      background: linear-gradient(270deg, #a2131a, #1d76bd);
      mix-blend-mode: multiply;
      text-align: center;
      grid-area: 1/1;
      position: relative;
      line-height: 1.3;
      height: 100%;
      display: grid;
      grid-template-columns: 0.5fr 1fr 0.5fr;
      grid-template-rows: 1.5fr 1fr 1fr;
      .do-title {
        mix-blend-mode: color-dodge;
        grid-area: 2/2;
        text-align: center;
        font-size: 80px;
        color: #fffa0c;
        line-height: 1.1;
        font-family: $global-font-family;
        font-weight: bold;
        .lower-bar {
          margin: 20px auto;
          background: #ffeb3b;
        }
      }
      .do-date {
        font-family: $global-font-family-light;
        grid-area: 3/2;
        position: relative;
        bottom: 10px;
        color: #ffeb3b;
        font-size: 30px;
        .lower-bar {
          position: relative;
          background: white;
          margin: 20px auto;
          width: 80px;
        }
      }
    }
  }

  .wrap-btn-register {
    position: relative;
    bottom: 240px;
  }

  .btn-register {
    background: #ffffff;
    padding: 10px;
    width: 250px;
    text-align: center;
    display: block;
    margin: 40px auto;
    font-weight: bold;
    color: black;
    font-size: 30px;
    cursor: pointer;
    border: none;
    text-transform: uppercase;
    font-family: $global-font-family-light;
    transition: all 0.25s;
    &:hover {
      box-shadow: 0px 0px 25px black;
    }
  }

  .lower-bar {
    width: 100px;
    height: 5px;
    background: white;
  }

  @media (max-width: 1106px) {
    .wrap-btn-register {
      bottom: 135px;
    }
  }

  @media (max-width: $medium) {
    .wrap-btn-register {
      padding-top: 0px !important;
    }
    .background-section {
      grid-template-columns: 0.1fr 1fr 0.1fr;
    }
    .background-section__date {
      grid-template-columns: 0.1fr 1fr 0.1fr;
      .do-title {
        grid-area: 1/1;
        font-size: 50px !important;
        margin-top: 100px;
      }
    }
  }

  @media (max-width: $medium-l) {
    .wrap-btn-register {
      padding-top: 18px;
    }
    .background-section__date {
      .do-title {
        font-size: 50px !important;
        margin-top: 0px !important;
      }
    }
    .background-section {
      grid-template-columns: 0.1fr 1fr 0.1fr;
      height: 500px;
    }
  }
`;
