import React, {useState} from "react";


import '../App/App.css';

const PostList = (props) => {
    const [card, setCard] = useState('')
    const [a, aa] = useState(['a','b','c'])
    return (
        <React.Fragment>
            <div className="site-content">
                <div className="title">

                    <div style={{
                        fontSize: "14px",
                        padding: "0px 0px 8px"
                    }}>300개 이상의 숙소 ・ 11월 3일 - 11월 4일</div>
                    <span style={{
                        fontSize: "32px",
                        fontWeight: "bold"
                    }}>서울의 숙소</span>
                    
                    {/* 상세버튼 */}
                    <div className="btnDiv">
                        <button className="btnDiv1"> 취소 수수료 없음</button>
                        <button className="btnDiv1">숙소 유형</button>
                        <button className="btnDiv1">요금</button>
                        <button className="btnDiv1">즉시 예약</button>
                        <button className="btnDiv1">필터 추가하기</button>
                    </div>

                    <div style={{
                        fontSize: "14px",
                        padding: "0px 0px 8px",
                        marginTop: "24px"
                    }}>
                        예약하기 전에 코로나19 관련 여행 제한 사항을 확인하세요. <a href="https://www.airbnb.co.kr/help/topic/1418/government-travel-restrictions-and-advisories"
                        style={{
                            textDecoration: "underline"
                        }}>자세히 알아보기</a>
                    </div>
                </div>
                
                <div style={{
                    marginLeft: "24px",
                    marginRight: "24px",
                    marginTop: "-15px"
                }}>
                    <hr />
                </div>

                {/* 카드 */}
                <div className="cardBox">
                        
                    {
                    a.map(function() {
                        return <div className="card">
                                {/* 이미지 박스 */}
                                <div>
                                    <img src="http://www.traveldaily.co.kr/news/photo/201803/14195_19416_2410.jpg" style={{
                                        width: "300px",
                                        borderRadius: "5px"
                                    }}  />
                                </div>
                                {/* 오른쪽 글박스 */}
                                <div style={{
                                    paddingLeft: "16px"
                                }}>
                                    {/* 글박스 안에 첫번째 박스 */}
                                    <div className="titleBox">
                                        <div>
                                            <div className="cardText1">충무로의 레지던스 전체
                                            </div>
                                            <div>
                                                [OPEN SALL]뷰맛집 4K UHD 빔프로젝터 송현아&트리플 1분 테크노파크역 5분
                                            </div>
                                        </div>
                                        <button className="loveBtn">
                                            <img className="loveBtn01" alt="loveBtn01" src="./loveBtn01.png" />
                                        </button>
                                    </div>
                                    {/* 3번째줄 구분선 */}
                                    <div className="line">
                                        <hr />
                                    </div>

                                    <div className="px14">
                                        최대 인원 2명 ・ 침실 1개 ・ 침대 1개 ・ 욕실 1개 주방 ・ 에어컨 ・ 무선 인터넷 ・ 헤어드라이기
                                    </div>
                                    <div className="px14 mt">
                                        주방 ・ 에어컨 ・ 무선 인터넷
                                    </div>
                                    <div className="cardBorderbox">
                                        <div className="cardBorder">
                                            예약이 금방 마감되는 숙소
                                        </div>
                                    </div>

                                    <div className="star">
                                        
                                        <div style={{
                                            verticalAlign: "bottom",
                                            display: "block"
                                        }}><span style={{
                                            color: "red",
                                            paddingTop: "14px",
                                        }}>★</span>5.0(후기76개)
                                        </div>


                                        <div style={{
                                            display: "block",
                                            verticalAlign: "bottom"
                                        }}>
                                        ₩117,840 / 박<br />
                                        총액 ₩117,840
                                        </div>
                                    </div>
                                </div>
                        </div>
                    })
                    }
                </div>
            </div>
        </React.Fragment>
    )
}





export default PostList;