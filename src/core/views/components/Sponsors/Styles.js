import styled from "styled-components";

export const Container = styled.div`
  .wrap-sponsors {
    background-color: #010415;
  }

  .section-sponsors {
    max-width: 1440px;
    width: 1024px;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 50px;
    padding-bottom: 40px;
    color: white;
    .section-sponsors__article__copy {
      font-size: 1em;
      font-family: Open Sans;
      line-height: 1.5;
      color: #ffffff;
      .section-sponsors__article__copy__join {
        border: 2px solid white;
        color: #f44336;
        padding: 10px;
        background-color: white;
        margin-left: 10px;
        font-family: Raleway;
        transition: all 0.25s;
        cursor: pointer;
        outline: none;
        &:hover {
          background-color: #f44336;
          border-color: #f44336;
          color: #ffffff;
        }
      }
    }
    .section-sponsors__article__title {
      font-size: 2em;
      font-family: Raleway;
      padding: 0;
      margin: 0;
      display: inline;
      color: #fff;
      .lower-bar {
        background-color: white;
        margin-top: 10px;
      }
    }
  }

  .section-sponsors__article__list__gold__title,
  .section-sponsors__article__list__silver__title {
    font-family: Raleway;
    margin-top: 40px;
  }

  .section-sponsors__article__list {
    .section-sponsors__article__list__gold,
    .section-sponsors__article__list__silver {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      .section-sponsors__article__list__gold__item,
      .section-sponsors__article__list__silver__item {
        list-style: none;
        margin-top: 25px;
        margin-bottom: 25px;
      }
      .section-sponsors__article__list__gold__img,
      .section-sponsors__article__list__silver__img {
        background: white;
        display: block;
        width: 180px;
      }
      .section-sponsors__article__list__gold__copy,
      .section-sponsors__article__list__silver__copy {
        font-family: Open Sans;
        text-align: center;
      }
    }
  }

  @media (max-width: 1024px) {
    .section-sponsors {
      width: auto !important;
    }
    .section-sponsors__article__list__gold__item,
    .section-sponsors__article__list__silver__item {
      margin-top: 20px;
    }
    .section-sponsors__article__list__gold,
    .section-sponsors__article__list__silver {
      grid-template-columns: 1fr !important;
    }
    .section-sponsors__article__list__gold__img,
    .section-sponsors__article__list__silver__img {
      width: 210px !important;
      margin: 0px auto !important;
      position: relative;
      right: 15px;
    }
  }
`;
