import styled from 'styled-components';

export const Container = styled.div`
  .wrap-section-agenda {
    background: #4e324a;
    .section-agenda {
      max-width: 1440px;
      width: 1024px;
      margin: 0 auto;
      padding-top: 20px;
      padding-bottom: 0px;
      color: white;
      .section-agenda__wrap_dates {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
      .section-agenda__list__item__copy {
        margin-top: 5px;
        font-size: 16px;
        font-family: Open Sans;
        line-height: 1.4;
      }
      .section-agenda__list__item {
        list-style: none;
        border-left: 2px solid white;
        padding-left: 25px;
        position: relative;
        left: -19px;
        top: -34px;
        padding-top: 30px;
        margin-top: -20px;
        padding-bottom: 0px;
      }
      .section-agenda__title {
        font-family: Raleway;
        color: white;
        .lower-bar {
          background: #fff;
          margin-top: 10px;
        }
      }
      .section-agenda__list {
        margin-top: 5px;
        .section-agenda__list__item__title {
          font-family: Raleway;
          font-size: 22px;
          &::before {
            content: " ";
            width: 10px;
            height: 10px;
            border-radius: 100px;
            background: #ffffff;
            color: #ffffff;
            display: block;
            text-align: center;
            position: absolute;
            left: -6px;
            top: 35px;
          }
        }
        .section-agenda__list__title {
          font-family: Open Sans;
          font-size: 33px;
          position: relative;
          color: #ffffff;
          padding-bottom: 22px;
          padding-left: 10px;
          &::before {
            content: " ";
            width: 25px;
            height: 25px;
            border-radius: 100px;
            background: #ffffff;
            color: #ffffff;
            display: block;
            text-align: center;
            position: absolute;
            left: -30px;
            bottom: 24px;
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .section-agenda {
      width: 100% !important;
    }
    .section-agenda__title {
      padding-left: 20px;
    }
  }

  @media (max-width: 768px) {
    .section-agenda__wrap_dates {
      grid-template-columns: 1fr !important;
    }
  }
`;
