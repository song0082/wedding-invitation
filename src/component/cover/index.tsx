import { COVER_IMAGE } from "../../images"
import { LazyDiv } from "../lazyDiv"

export const Cover = () => {
  return (
    <>
      <style>{`
        .cover-card-custom {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background-color: #ffffff;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          margin-bottom: 20px;
          width: 100%;
          box-sizing: border-box;
        }
        .cover-card-custom .cover-date {
          font-size: 1.1rem;
          color: #333333;
          margin-bottom: 20px;
        }
        .cover-card-custom .cover-date span {
          font-size: 0.9rem;
          color: #888888;
        }
        .cover-card-custom .cover-img-wrapper {
          width: 100%;
          max-width: 380px;
          margin: 0 auto 20px auto;
          border-radius: 8px;
          overflow: hidden;
        }
        .cover-card-custom .cover-img-wrapper img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }
        .cover-card-custom .cover-description .english {
          font-family: "Allura";
          font-size: 1.4rem;
          color: #ff8585;
        }
        .cover-card-custom .cover-description .names {
          font-weight: bold;
          margin-bottom: 8px;
        }
        .cover-card-custom .cover-description .wedding-date,
        .cover-card-custom .cover-description .wedding-location {
          font-size: 0.95rem;
          color: #333333;
          margin-top: 4px;
        }
      `}</style>

      <LazyDiv className="card cover-card-custom">
        <div className="cover-date">
          2027 &nbsp;|&nbsp; 01 &nbsp;|&nbsp; 16 <br />
          <span>Saturday</span>
        </div>
        
        <div className="cover-img-wrapper">
          <img src={COVER_IMAGE} alt="Cover" />
        </div>

        <div className="cover-description">
          <span className="english">Save the date for the wedding of</span>
          <div className="break" />
          <div className="names">송우남 &nbsp;|&nbsp; 이시바시레이코 (石橋怜子)</div>
          <div className="wedding-date">2027년 1월 16일 토요일 오후 12시</div>
          <div className="wedding-location">안양 더스카이 웨딩홀</div>
        </div>
      </LazyDiv>
    </>
  )
}
