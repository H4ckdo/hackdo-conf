import styled from "styled-components";

export const Container = styled.div`
  #videoWrapper {
    height: 500px;
    background-image: url("/assets/images/spin.gif");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 80px;
  }

  .section-about {
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 40px;
    padding-right: 40px;
    max-width: 1440px;
    margin: 0px auto;
    position: relative;
    .section-about__video {
      width: 70%;
      display: inline-block;
      vertical-align: middle;
      text-align: center;
      position: relative;
      left: 20px;
      img {
        height: 400px;
        position: relative;
      }
      .alice-carousel__prev-btn-item {
        left: 70px;
      }
      .alice-carousel__next-btn-item {
        right: 70px;
      }
      .alice-carousel__prev-btn-item,
      .alice-carousel__next-btn-item {
        border-radius: 0px !important;
        height: 60px !important;
        border: none;
        background: whitesmoke;
        color: #333;
        opacity: 0.5;
        &:hover {
          opacity: 1;
        }
      }
      .alice-carousel__stage-item {
        background: black;
      }
    }
    .section-about__article {
      width: 30%;
      display: inline-block;
      vertical-align: top;
      position: relative;
      .section-about__article__title {
        font-size: 2em;
        font-family: Raleway;
        padding: 0px;
        margin: 0px;
        display: inline;
        color: black;
        .lower-bar {
          background-color: black;
          margin-top: 10px;
        }
      }
      .section-about__article__copy {
        font-size: 1em;
        font-family: Open Sans;
        line-height: 1.5;
        color: $black;
      }
    }
  }

  @media (max-width: 1085px) {
    .section-about__article {
      width: 100% !important;
      display: block !important;
    }
    .section-about__video {
      width: 100% !important;
      display: block !important;
      left: 0px !important;
    }
    .section-about__article__title {
      display: block !important;
      padding-top: 20px !important;
      padding-left: 17px !important;
    }
    .section-about__article__copy {
      padding-left: 20px !important;
      padding-right: 20px !important;
    }
    .section-about__article {
      padding-top: 20px !important;
      padding-bottom: 20px !important;
      position: relative;
      left: 0px !important;
    }
    .alice-carousel {
      padding: 0px !important;
    }
    .alice-carousel__dots {
      display: none !important;
    }
    .alice-carousel__prev-btn-item {
      left: 0px !important;
    }
    .alice-carousel__next-btn-item {
      right: 0px !important;
    }
  }

  @media (max-width: 768px-l) {
    .section-about {
      padding: 0px;
      padding-bottom: 20px;
    }
  }

  @media (max-width: 1024px) {
    .section-about {
      width: 100%;
      grid-template-columns: 1fr;
      padding: 0px !important;
    }
  }

  .alice-carousel__wrapper {
    border: none !important;
  }
`;
