import { COVER_IMAGE } from "../images"
import "./cover.scss"

export function Cover() {
  return (
    <div className="card cover-card">
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
    </div>
  )
}
