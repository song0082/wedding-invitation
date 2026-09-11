import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

/**
 * 오시는 길 정보를 표시하는 컴포넌트입니다.
 * 지도와 대중교통, 자가용 이용 방법을 안내합니다.
 *
 * @returns {JSX.Element} 오시는 길 섹션
 */
export const Location = () => {
  return (
    <>
      {/* 지도 및 주소 섹션 */}
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>

      {/* 대중교통 및 자가용 안내 섹션 */}
    <LazyDiv className="card location">
      {/* 대중교통 안내 */}
      <div className="location-info">
        <div className="transportation-icon-wrapper">
          <BusIcon className="transportation-icon" />
        </div>
        <div className="heading">대중교통</div>
        <div />
        <div className="content">
          * 지하철 4호선 평촌역<br />
          - 3번 출구 나와서 마을버스 <b>5-1</b> 승차 또는 도보 10분
        </div>
        <div />
        <div className="content">
          * 지하철 4호선 인덕원역<br />
          - 7번 또는 8번 출구 나와서 일반버스 <b>83</b> 승차 또는 도보 10분
        </div>
      </div>

      {/* 자가용 안내 */}
      <div className="location-info">
        <div className="transportation-icon-wrapper">
          <CarIcon className="transportation-icon" />
        </div>
        <div className="heading">자가용 / 내비게이션</div>
        <div />
        <div className="content">
          <b>새주소:</b> 경기도 안양시 동안구 벌말로 126, 오비즈타워<br />
          <b>구주소:</b> 경기도 안양시 동안구 관양동 1902, 오비즈타워
        </div>
      </div>
    </LazyDiv>
