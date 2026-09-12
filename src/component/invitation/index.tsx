import {
  BRIDE_FULLNAME,
  GROOM_FULLNAME,
} from "../../const"
import { LazyDiv } from "../lazyDiv"

export const Invitation = () => {
  return (
    <>
      <style>{`
        .card.invitation {
          padding: 20px 20px !important;
          margin-bottom: 20px;
        }
        .card.invitation h2 {
          margin-top: 0;
          margin-bottom: 12px;
        }
        .card.invitation .message {
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .card.invitation .parents-wrap {
          font-size: 0.85rem;
          margin-bottom: 16px;
        }
      `}</style>

      <LazyDiv className="card invitation">
        <h2 className="english">Invitation</h2>
        
        <div className="message">
          찬 바람이 부는 하얀 겨울, <br />
          혼자였다면 시렸을 이 계절에 <br />
          소중한 분들을 초대합니다. <br />
          <div className="break" />
          눈이 내릴 때면 늘 생각나는 소중한 사람과 <br />
          함께 새로운 인생의 계절을 시작하려 합니다. <br />
          <div className="break" />
          각자의 겨울을 지나 마침내 하나가 된 저희 두 사람이 <br />
          서로의 온기가 되어 따뜻한 봄을 향해 나아갑니다. <br />
          <div className="break" />
          1월의 어느 날, 저희가 맞이할 포근한 첫날을 <br />
          귀한 걸음으로 함께 축복해 주세요.
        </div>

        <div className="parents-wrap">
          <div className="parents">
            송순배 · 안인숙의 장남 <b>{GROOM_FULLNAME}</b>
          </div>
          <div className="parents" style={{ marginTop: "4px" }}>
            이시바시요시히코 (石橋芳彦) · 의 장녀 <b>{BRIDE_FULLNAME}</b>
          </div>
        </div>

        <div className="button-wrap">
          <button className="contact-button" onClick={() => {
            const btn = document.querySelector(".contact-button") as HTMLElement;
            if (btn) btn.click();
          }}>
            연락하기
          </button>
        </div>
      </LazyDiv>
    </>
  )
}

export default Invitation
