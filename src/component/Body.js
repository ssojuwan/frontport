import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination } from "swiper/modules";
import "../css/Body.css";
import "../css/Header.css"; // 헤더 CSS 가져오기
import Profile from "../image/profile.png";
import Html from "../image/html.png";
import Css from "../image/css.png";
import Js from "../image/js.png";
import Aws from "../image/aws.png";
import Android from "../image/android.png";
import Discord from "../image/discord.jpg";
import Github from "../image/github.png";
import Mysql from "../image/mysql.png";
import ImgReact from "../image/react.png";
import Email from "../image/email.svg";
import Raspberrypi from "../image/raspberrypi.png";
import Arduino from "../image/arduino.png";
import Coin from "../image/coin.png";
import Together from "../image/together.png";
import Locker from "../image/locker.png";
import Togetherflow from "../image/togetherflow.png";
import Togetherhome from "../image/togetherHome.png";
import TogetherMain from "../image/togetherMain.png";
import Expression from "../image/expression.png";
import ReactPracticeColor from "../image/reactPracticeColor.png";
import ReactPracticeLogin from "../image/reactPracticeLogin.png";
import ReactPracticeMain from "../image/reactPracticeMain.png";
import ReactPracticeSignUp from "../image/reactPracticeSignUp.png";
import ReactPracticeSignUpC from "../image/reactPracticeSignUpC.png";
import ReactPracticeTemperature from "../image/reactPracticeTemperature.png";
import ReactPracticeTodo from "../image/reactPraticeTodo.png";
import AI from "../image/ai.jpg";
import AI1 from "../image/ai1.png";
import AI2 from "../image/ai2.png";
import AI3 from "../image/ai3.png";
import mfcExcel from "../image/mfcExcel.png";
import mfcMain from "../image/mfcMain.png";
import mfcRecipt from "../image/mfcRecipt.png";
import ycBar from "../image/ycbar.png";
import ycbarFlow from "../image/ycbarFlow.jpg";
import ycbarFlow2 from "../image/ycbarFlow2.png";
import ycbarFlow3 from "../image/ycbarFlow3.jpg";
import ycbarPlan from "../image/ycbarPlan.png";
import AWSArc from "../image/AWS.jpg";
import Gunjang1 from "../image/gunjang1.png";
import Gunjang2 from "../image/gunjang2.png";
import port1 from "../image/port1.png";
import port2 from "../image/port2.png";
import port3 from "../image/port3.png";
import port4 from "../image/port4.png";
import port5 from "../image/port5.png";

const Body = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [headerTransparent, setHeaderTransparent] = useState(true);
  const [modalContent, setModalContent] = useState(null);
  const [modalContentPro, setModalContentPro] = useState(null);

  const handleScroll = () => {
    const introSection = document.getElementById("intro");
    const introHeight = introSection ? introSection.offsetHeight : 0;

    setShowScrollButton(window.scrollY > introHeight);
    setHeaderTransparent(window.scrollY < introHeight);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sendToEmail = () => {
    const copyTxt = document.getElementById("copyTxt");
    if (copyTxt) {
      copyTxt.select();
      copyTxt.setSelectionRange(0, 99999); // Mobile 대응

      navigator.clipboard.writeText(copyTxt.value);

      alert("복사되었습니다.");
    } else {
      alert("복사할 이메일 주소를 찾을 수 없습니다.");
    }
  };

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const openModalPro = (content) => {
    setModalContentPro(content);
  };

  const closeModalPro = () => {
    setModalContentPro(null);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="body">
      <header className={`header ${headerTransparent ? "transparent" : ""}`}>
        <h2>
          <a href="#">{`SJW's portfolio`}</a>
        </h2>
        <nav>
          <ul>
            <li>
              <a href="#about-section">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="https://github.com/">GitHub</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="intro">
        <p className="intro">
          - 서 주 완 -
          <br />
          프론트 엔드 개발자 포트폴리오
          <hr className="hr" />
        </p>
        <p className="intro1">
          안녕하세요. 저는 꿈을 쫒는 프론트 엔드 개발자, 서주완입니다.
        </p>
        <div className="buttonDeo">
          <button>
            <a href="#about-section">더 알아보기 ↓</a>
          </button>
        </div>
      </section>

      <section id="about-section">
        <h2 className="bodyH2">About me</h2>
        <div className="profile-picture">
          <img src={Profile} alt="Profile" />
        </div>
        <div id="about">
          <div className="info-item">
            <div className="label">이름</div>
            <div className="value">서주완</div>
          </div>
          <div className="info-item">
            <div className="label">생년월일</div>
            <div className="value">99.08.24</div>
          </div>
          <div className="info-item">
            <div className="label">주소지</div>
            <div className="value">경상남도 진주시</div>
          </div>
          <div className="info-item">
            <div className="label">연락처</div>
            <div className="value">010-5292-6389</div>
          </div>
          <div className="info-item">
            <div className="label">이메일</div>
            <div className="value">
              <input
                type="text"
                id="copyTxt"
                value="wndhks990824@naver.com"
                readOnly
                style={{ position: "absolute", top: "-9999px" }}
              />
              wndhks990824@naver.com
            </div>
          </div>
          <div className="info-item">
            <div className="label">
              학력{" "}
              <button
                className="eduButton"
                onClick={() =>
                  openModal(
                    <div>
                      <h2>학력 상세</h2>
                      <table className="education-table">
                        <thead>
                          <tr>
                            <th>기 간</th>
                            <th>학 교 명</th>
                            <th>학과 및 전공</th>
                            <th>졸업 여부</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2015.03~2018.02</td>
                            <td>대아고등학교</td>
                            <td>이과</td>
                            <td>졸업</td>
                          </tr>
                          <tr>
                            <td>2018.03~2024.02</td>
                            <td>연암공과대학교</td>
                            <td>스마트소프트웨어학과</td>
                            <td>졸업</td>
                          </tr>
                          <tr>
                            <td>2024.03~</td>
                            <td>연암공과대학교</td>
                            <td>스마트소프트웨어학과(심화)</td>
                            <td>재학중</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )
                }
                style={{ marginLeft: "10px" }}
              >
                +
              </button>
            </div>
            <div className="value">
              연암공과대학교
              <br />
              스마트소프트웨어학과(심화)
            </div>
          </div>
        </div>
        <hr className="aboutHr" />
        <div className="overViewDiv">
          <h2>OverView</h2>
          <div className="overViewContent">
            <p>Q. 프론트앤드 지원 동기</p>
            학교에서 처음으로 HTML, CSS, JavaScript를 접하면서,
            <span className="boldP">
              결과물이 즉각적으로 나타나는 프론트엔드 개발
            </span>
            에 매력을 느꼈습니다. 이후 개인적으로 공부하던 중 React라는
            라이브러리를 알게 되었고, 실제 프로젝트 경험을 쌓기 위해
            'Together'라는 봉사단체와 봉사자를 매칭하는 플랫폼에 참여하게
            되었습니다. 이 프로젝트에서 저는 게시판 CRUD 기능 구현과 컴포넌트
            제작을 담당하며, 프론트엔드 개발의 매력과 사용자 경험 개선의
            중요성을 깊이 이해하게 되었습니다. 이러한 경험을 통해 프론트엔드
            개발에 대한 열정이 더욱 커졌고,{" "}
            <span className="boldP">
              사용자 중심의 혁신적인 웹 애플리케이션을 개발
            </span>
            하고 싶습니다.
          </div>
          <br />
          <div className="overViewContent">
            <p>Q. 본인의 장 · 단점</p>제 장점은{" "}
            <span className="boldP">새로운 기술에 대한 호기심</span>이
            많다는겁니다. 저는 항상 최신 웹 기술과 트렌드에 대해 배우고 탐구하는
            것을 즐깁니다. 이러한 호기심 덕분에 다양한 프레임워크와 라이브러리를
            익히며, 문제를 창의적으로 해결하는 능력을 키워왔습니다. 반면, 제
            단점은 조급함입니다. 프로젝트를 진행할 때 결과를 빠르게 보고
            싶어하는 경향이 있어, 때때로 충분한 검토 없이 진행하게 되는 경우가
            있습니다. 이를 개선하기 위해 최근에는{" "}
            <span className="boldP">작업의 우선순위</span>를 정하고, 각 단계에서
            충분한 시간을 할애하도록 노력하고 있습니다.
          </div>
          <br />
          <div className="overViewContent">
            <p>Q. 가치관</p>
            프론트엔드 개발자로서 제 가치관은{" "}
            <span className="boldP">피드백과 개선</span>입니다. 모든 프로젝트가
            처음부터 완벽할 수는 없다고 생각합니다. 그러나 좋은 개발자는
            사용자와 팀원으로부터 받은{" "}
            <span className="boldP">개선 방안을 적극적으로 수용</span>하여
            프로젝트를 발전시킬 수 있습니다.{" "}
            <span className="boldP">피드백을 통한 반복적인 개선 과정</span>을
            통해 더욱 사용자 친화적이고, 사용자에게 더 나은 경험을 제공할 수
            있습니다. 또한, 팀 내에서의 피드백을 통해 동료 개발자, 디자이너,
            기획자와 원활하게 소통하며 서로의 아이디어를 공유하고, 더 나은
            솔루션을 도출할 수 있습니다. 마지막으로, 피드백을 통해 자신의
            개발물에 부족한 부분을 인식하고 지속적으로 성장할 수 있다고
            믿습니다. 이러한 가치관을 바탕으로, 저는 더욱 발전하는 프론트엔드
            개발자가 되고자 합니다.
            <br />
          </div>
          <br />
        </div>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <div className="divSkills">
          <div>
            <p>Frontend</p>
            <hr />
            <img src={Html} alt="Html" />
            <img src={Css} alt="Css" />
            <img src={Js} alt="Js" />
            <img src={ImgReact} alt="React" />
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Microsoft_Foundation_Class_logo.svg/180px-Microsoft_Foundation_Class_logo.svg.png"
              }
              alt="MFC"
            />
          </div>
          <div>
            <p>Backend</p>
            <hr />
            <img src={Mysql} alt="Mysql" />
            <img
              src="https://velog.velcdn.com/images/deep-of-machine/post/3f778fa2-2b43-42b3-9233-091424be7d73/image.png"
              alt="Python"
            />
          </div>
          <div>
            <p>Mobile App</p>
            <hr />
            <img src={Android} alt="Android" />
          </div>
          <div>
            <p>Deployment</p>
            <hr />
            <img src={Aws} alt="Aws" />
          </div>
          <div>
            <p>Version Control</p>
            <hr />
            <img src={Github} alt="Github" />
          </div>
          <div>
            <p>Communication</p> <hr />
            <img src={Discord} alt="Discord" />
          </div>
          <div>
            <p>Hardware</p> <hr />
            <img src={Arduino} alt="Arduino" />
            <img src={Raspberrypi} alt="Raspberrypi" />
          </div>
        </div>
      </section>

      <section id="project">
        <div className="project-container">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            style={{
              "--swiper-pagination-color": "white",
              "--swiper-navigation-color": "white",
            }}
          >
            <SwiperSlide>
              <div className="project-item">
                <img src={Coin} alt="Coin" />
                <div className="project-overlay">
                  <p className="project-title">아두이노 동전 분류기</p>
                  <p className="project-description">
                    아두이노를 활용한 <br /> 동전 분류 및 지문 인식 금고 제작
                  </p>
                  <button
                    className="project-button"
                    onClick={() =>
                      openModalPro(
                        <div>
                          <div className="projectType">
                            <div>
                              <span>개인 프로젝트</span>
                            </div>
                            <div>
                              <span>아두이노</span>
                            </div>
                          </div>
                          <h2 style={{ textAlign: "center", fontSize: "3rem" }}>
                            아두이노 동전 분류기
                          </h2>
                          <p style={{ textAlign: "center" }}>
                            개발 기간 : 2019.05~2019.06
                          </p>
                          <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            style={{
                              "--swiper-pagination-color": "white",
                              "--swiper-navigation-color": "white",
                            }}
                          >
                            <SwiperSlide>
                              <img src={Coin} alt="Coin" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src={Locker} alt="Locker" />
                            </SwiperSlide>
                          </Swiper>
                          <p>
                            아두이노를 활용한 동전 분류 및 지문 인식 금고 제작
                            프로젝트입니다. 이 프로젝트에서는 아두이노와 다양한
                            센서를 이용해 동전을 자동으로 분류하고, 지문 인식을
                            통해 금고를 열 수 있는 시스템을 개발하였습니다.
                          </p>
                          <hr />
                          <div className="projectLi">
                            <h2>주요 기능 및 특징</h2>
                            <li>
                              아두이노를 활용한 동전 분류 및 지문인식 금고
                            </li>
                            <li>지문 인식 센서 활용</li>
                            <li>초음파 센서 활용</li>
                            <h2>사용 기술 및 언어</h2>
                            <li>C++</li>
                            <h2>작업 기여도</h2>
                            <ul>
                              <li>하드웨어</li>
                              <ul>
                                <li>하드웨어 틀 제작</li>
                              </ul>
                              <li>소프트웨어</li>
                              <ul>
                                <li>초음파 센서 인식 코드 작성</li>
                                <li>지문 인식 센서 코드 작성</li>
                                <li>
                                  초음파 센서 인식 후 동전 카운트 코드 작성
                                </li>
                              </ul>
                              <li>프로젝트 일정관리</li>
                            </ul>
                            <h2>회고</h2>
                            처음 프로젝트를 진행하면서 주제 선정과 일정 관리에
                            어려움을 겪었지만, 차근차근 계획을 세워 하드웨어
                            제작과 센서 연결 작업을 진행했습니다. 시간이
                            지나면서 프로젝트가 점차 구체화되고, 각 단계가
                            성공적으로 구현될 때마다 성취감을 느끼며 개발에 대한
                            흥미가 점점 커졌습니다. 다만, 모든 시스템은 구현에
                            성공했지만, 하드웨어 구성 과정에서 기술적인 한계로
                            인해 동전 분류가 완벽하게 이루어지지 않은 점은
                            아쉬움으로 남았습니다. 하지만 이러한 경험을 통해
                            문제 해결 능력을 더욱 키울 수 있었고, 앞으로
                            기술적인 도전에 대한 자신감을 얻게 되었습니다.
                            <hr />
                          </div>
                        </div>
                      )
                    }
                  >
                    자세히 보기
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="project-item">
                <img src={Together} alt="Together" />
                <div className="project-overlay">
                  <p className="project-title">함께해요 투게더</p>
                  <p className="project-description">리액트 웹 페이지 개발</p>
                  <button
                    className="project-button"
                    onClick={() =>
                      openModalPro(
                        <div>
                          <div className="projectType">
                            <div>
                              <span>팀 프로젝트</span>
                            </div>
                            <div>
                              <span>J S</span>
                            </div>
                            <div>
                              <span>React</span>
                            </div>
                          </div>
                          <h2 style={{ textAlign: "center", fontSize: "3rem" }}>
                            함께해요 투게더
                          </h2>
                          <p style={{ textAlign: "center" }}>
                            개발 기간 : 2022.08~2022.12
                          </p>
                          <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            style={{
                              "--swiper-pagination-color": "white",
                              "--swiper-navigation-color": "white",
                            }}
                          >
                            <SwiperSlide>
                              <img src={Together} alt="Together" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src={Togetherflow} alt="Togetherflow" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src={TogetherMain} alt="TogetherMain" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src={Togetherhome} alt="Togetherhome" />
                            </SwiperSlide>
                          </Swiper>
                          <p>
                            리액트 기반의 웹 페이지 개발 프로젝트로, 봉사단체와
                            봉사자를 매칭하는 플랫폼입니다. 이 프로젝트에서는
                            사용자 인터페이스를 구성하고, 게시판 CRUD 기능을
                            구현하였습니다.
                          </p>
                          <hr />
                          <div className="projectLi">
                            <h2>주요 기능 및 특징</h2>
                            <li>봉사기관 및 봉사자를 위한 매칭 서비스</li>
                            <li>로그인 계정에 따른 접근 통제</li>
                            <h2>사용 기술 및 언어</h2>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>MySQL</li>
                            <h2>작업 기여도</h2>
                            <ul>
                              <li>공지사항 CRUD 게시판</li>
                              <ul>
                                <li>게시판의 기본 기능인 CRUD를 구현</li>
                                <li>
                                  Axios 라이브러리를 이용하여 서버와 통신 구축
                                </li>
                              </ul>
                            </ul>
                            <ul>
                              <li>로그인 계정에 따른 접근 권한 부여</li>
                              <ul>
                                <li>
                                  관리자 계정으로 로그인 시 공지사항 CRUD가능{" "}
                                </li>
                                <li>
                                  사용자 계정으로 로그인 시 공지사항 Read만 가능
                                </li>
                              </ul>
                            </ul>
                            <ul>
                              <li>DB 정의서 작성</li>
                              <li>플로우 차트 작성</li>
                            </ul>
                            <h2>회고</h2>
                            "함께해요 투게더" 프로젝트를 통해 처음으로 장기 팀
                            프로젝트를 경험하며 많은 것을 배울 수 있었습니다.
                            프로젝트 매니저(PM) 역할을 맡았던 팀원이 일정을
                            맞추지 못해 팀원들과의 소통에 어려움이 있었고, 제가
                            처음으로 리액트를 사용해야 했기 때문에 기술적인
                            도전도 많았습니다. 리액트의 구조를 이해하기 위해
                            CRUD 기능을 구현한 게시판을 개발하면서, 기본적인
                            컴포넌트 설계와 상태 관리 방법을 익혔습니다. 이
                            과정에서 팀원들과의 협업이 얼마나 중요한지 깊게
                            이해하게 되었고, 문제를 해결하기 위해 주기적인
                            소통과 협력의 필요성을 실감했습니다. 특히, 기술적인
                            문제를 해결하고 프로젝트를 성공적으로 완수하기 위해
                            팀원들과 함께 노력하며 부족한 부분을 보완할 수
                            있었습니다. 이 프로젝트는 제게 기술적 역량을 키울
                            뿐만 아니라, 효과적인 팀워크와 문제 해결 능력을 배울
                            수 있는 유익한 경험이었습니다. 또한 리액트에 관심을
                            가지고 깊게 공부할 수 있었던 기회였습니다. 이를 통해
                            향후 프로젝트에서의 리더십과 협업 능력을 더욱 강화할
                            수 있을 것이라고 확신합니다.
                            <hr />
                            <div className="githubA">
                              <span>깃허브를 클릭하면 이동합니다.</span>
                              <h3>
                                <a href="https://github.com/ssojuwan/together">
                                  GitHub
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  >
                    자세히 보기
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="project-item">
                <img src={Expression} alt="Expression" />
                <div className="project-overlay">
                  <p className="project-title">표정 분석 AI</p>
                  <p className="project-description">
                    표정 분석을 통한 노래 추천
                  </p>
                  <button
                    className="project-button"
                    onClick={() =>
                      openModalPro(
                        <div>
                          <div className="projectType">
                            <div>
                              <span>팀 프로젝트</span>
                            </div>
                            <div>
                              <span>Python</span>
                            </div>
                            <div>
                              <span>A I</span>
                            </div>
                          </div>
                          <h2 style={{ textAlign: "center", fontSize: "3rem" }}>
                            표정 인식 및 분석을 통한 노래 추천 AI
                          </h2>
                          <p style={{ textAlign: "center" }}>
                            개발 기간 : 2022.10~2022.12
                          </p>
                          <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            style={{
                              "--swiper-pagination-color": "white",
                              "--swiper-navigation-color": "white",
                            }}
                          >
                            <SwiperSlide>
                              <img src={Expression} alt="Expression" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <video controls>
                                <source
                                  src="/expressionCut.mp4" // 공용 디렉토리에 상대적 경로로 접근
                                  type="video/mp4"
                                />
                                Your browser does not support the video tag.
                              </video>
                            </SwiperSlide>
                          </Swiper>
                          <p>
                            파이썬을 기반으로 한 AI 개발 프로젝트로, 사람의
                            표정을 분석하여 기분에 맞는 음악을 추천해주는 간단한
                            AI입니다. 이 프로젝트에서는 OpenCV 라이브러리를
                            사용하여 표정을 분석한 후, CNN 학습 모델의 결과를
                            불러와 음악 추천 기능을 구현하였습니다.
                          </p>
                          <hr />
                          <div className="projectLi">
                            <h2>주요 기능 및 특징</h2>
                            <li>
                              OpenCV라이브러리를 활용한 얼굴 인식 및 표정 분석
                            </li>
                            <li>CNN 학습 모델에 따른 표정 분류 후 음악 추천</li>
                            <h2>사용 기술 및 언어</h2>
                            <li>Python</li>
                            <h2>작업 기여도</h2>
                            <ul>
                              <li>CNN 모델 학습</li>
                              <ul>
                                <li>
                                  AI 모델을 위한 학습 데이터 준비 및 트레이닝
                                </li>
                              </ul>
                            </ul>
                            <ul>
                              <li>OpenCV 라이브러리 활용</li>
                              <ul>
                                <li>OpenCV 라이브러리 조사 및 적용</li>
                              </ul>
                            </ul>
                            <h2>회고</h2>
                            프로젝트를 진행하면서 데이터의 중요성을 깊이
                            실감했습니다. 모델의 성능이 학습 데이터의 질에 크게
                            의존한다는 것을 깨달았고, 데이터를 충분히 준비하고
                            전처리하는 것이 얼마나 중요한지 알게 되었습니다.
                            OpenCV와 같은 라이브러리를 효과적으로 활용하여
                            프로젝트의 생산성을 크게 향상시킬 수 있었습니다.
                            또한, CNN 모델의 하이퍼파라미터를 조정하면서 모델
                            성능 최적화의 필요성을 느꼈고, 지속적인 실험과
                            조정이 중요하다는 것을 깨달았습니다. 마지막으로,
                            이론적으로 완벽한 모델이라도 실제 적용 시 예상치
                            못한 문제가 발생할 수 있음을 경험하며, 사용자 경험을
                            고려한 추가적인 개선이 필요하다는 점을 인식하게
                            되었습니다. 추후 프로젝트를 다시 진행할 때는, 설정된
                            음악 대신 알고리즘을 통해 유형별로 음악을 추천할 수
                            있는 기능을 구현하고 싶습니다.
                            <hr />
                            <div className="githubA">
                              <span>텍스트를 클릭하면 이동합니다.</span>
                              {/* 추후 서버 연결 시 코드 수정 필요 */}
                              <h3>
                                <a
                                  href={`${process.env.PUBLIC_URL}/expression.pdf`}
                                  download="expression.pdf"
                                >
                                  PDF
                                </a>
                              </h3>
                              <h3>
                                <a href="https://github.com/ssojuwan/expression">
                                  GitHub
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  >
                    자세히 보기
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="project-item">
                <img src={ReactPracticeMain} alt="ReactPracticeMain" />
                <div className="project-overlay">
                  <p className="project-title">리액트 실습 프로젝트 모음</p>
                  <p className="project-description">
                    간단한 실습 프로젝트 모음
                  </p>
                  <button
                    className="project-button"
                    onClick={() =>
                      openModalPro(
                        <div>
                          <div className="projectType">
                            <div>
                              <span>개인 프로젝트</span>
                            </div>
                            <div>
                              <span>J S</span>
                            </div>
                            <div>
                              <span>React</span>
                            </div>
                          </div>
                          <h2 style={{ textAlign: "center", fontSize: "3rem" }}>
                            리액트 실습 프로젝트 모음
                          </h2>
                          <p style={{ textAlign: "center" }}>
                            개발 기간 : 2023.04~2023.06
                          </p>
                          <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            style={{
                              "--swiper-pagination-color": "white",
                              "--swiper-navigation-color": "white",
                            }}
                          >
                            <SwiperSlide>
                              <img
                                src={ReactPracticeMain}
                                alt="ReactPracticeMain"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img
                                src={ReactPracticeSignUp}
                                alt="ReactPracticeSignUp"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img
                                src={ReactPracticeSignUpC}
                                alt="ReactPracticeSignUpC"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img
                                src={ReactPracticeLogin}
                                alt="ReactPracticeLogin"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img
                                src={ReactPracticeColor}
                                alt="ReactPracticeColor"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img
                                src={ReactPracticeTodo}
                                alt="ReactPracticeTodo"
                              />
                            </SwiperSlide>

                            <SwiperSlide>
                              <img
                                src={ReactPracticeTemperature}
                                alt="ReactPracticeTemperature"
                              />
                            </SwiperSlide>
                          </Swiper>
                          <p>
                            리액트 기반의 실습 프로젝트 모음으로, 강의를 통해
                            배운 다양한 간단한 프로젝트들을 모아놓았습니다. 이
                            프로젝트들은 로컬 스토리지를 활용하여 기본적인
                            회원가입과 로그인 기능을 구현하였으며, 컴포넌트들을
                            분리하여 리액트의 기본 구조를 잘 유지했습니다.
                            리액트를 학습하며, 간단히 활용할 만한 프로젝트로
                            구성되었습니다.
                          </p>
                          <hr />
                          <div className="projectLi">
                            <h2>주요 기능 및 특징</h2>
                            <li>
                              로컬 스토리지를 활용한 회원가입 및 로그인 구현
                            </li>
                            <li>배경색 추가 및 변경 기능</li>
                            <li>반응형 디자인을 위한 border 및 width 조정</li>
                            <li>간단한 To-Do List 기능</li>
                            <li>리액트 상태 기반의 UI 업데이트</li>
                            <li>
                              섭씨 온도와 화씨 온도 변환 (배경색 변화 포함)
                            </li>
                            <li>숫자 맞추기 게임과 다크 모드 변환 기능</li>
                            <h2>사용 기술 및 언어</h2>
                            <ul>
                              <li>JavaScript</li>
                              <li>React</li>
                              <li>CSS</li>
                            </ul>
                            <h2>작업 기여도</h2>
                            <ul>
                              <li>일정 관리</li>
                              <li>
                                전체 구조 정의 후 개발
                                <ul>
                                  <li>리액트 기본 구조를 따르며 개발</li>
                                </ul>
                              </li>
                            </ul>
                            <h2>회고</h2>
                            학교 강의를 통해 배운 리액트의 기본 구조를 충실히
                            따르며 다양한 기능을 구현한 이 웹 페이지 프로젝트는
                            로컬 스토리지를 활용한 회원가입 및 로그인, 사용자
                            입력에 따라 실시간으로 반응하는 색상과 디자인 조정
                            기능, 간단한 To-Do List, 섭씨와 화씨 온도 변환 및
                            배경색 변화, 그리고 다크 모드를 지원하는 숫자 맞추기
                            게임을 포함하고 있으며, 이 과정을 통해 리액트의 상태
                            관리와 동적 UI 업데이트를 깊이 이해하고, 실제
                            애플리케이션 개발에 대한 자신감을 얻는 데 큰 도움이
                            되었습니다.
                            <hr />
                            <div className="githubA">
                              <span>텍스트를 클릭하면 이동합니다.</span>
                              <h3>
                                <a
                                  href={`${process.env.PUBLIC_URL}/reactPracticePDF.pdf`}
                                  download="reactPracticePDF.pdf"
                                >
                                  PDF
                                </a>
                              </h3>
                              <h3>
                                <a href="https://github.com/ssojuwan/reactClass">
                                  GitHub
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  >
                    자세히 보기
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="project-item">
                <img src={AI} alt="AI" />
                <div className="project-overlay">
                  <p className="project-title">
                    AI(Linear, Binary, Multi-class)모델
                  </p>
                  <p className="project-description">간단한 AI 프로젝트</p>
                  <button
                    className="project-button"
                    onClick={() =>
                      openModalPro(
                        <div>
                          <div className="projectType">
                            <div>
                              <span>팀프로젝트</span>
                            </div>
                            <div>
                              <span>Python</span>
                            </div>
                            <div>
                              <span>A I</span>
                            </div>
                          </div>
                          <h2 style={{ textAlign: "center", fontSize: "3rem" }}>
                            AI(Linear, Binary, Multi-class)모델
                          </h2>
                          <p style={{ textAlign: "center" }}>
                            개발 기간 : 2023.03~2023.06
                          </p>
                          <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            style={{
                              "--swiper-pagination-color": "white",
                              "--swiper-navigation-color": "white",
                            }}
                          >
                            <SwiperSlide>
                              <img src={AI1} alt="AI1" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src={AI2} alt="AI2" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src={AI3} alt="AI3" />
                            </SwiperSlide>
                          </Swiper>
                          <p>
                            파이썬 기반의 AI 개발 프로젝트에서, 1) Linear
                            Regression을 활용한 보험료 예측 모델, 2) Binary
                            Classification을 활용한 수질 판별 모델, 3)
                            Multi-class Classification을 활용한 와인 품질 예측
                            모델을 개발했습니다. 데이터는 Kaggle에서 참조하여
                            모델을 학습시켰습니다.
                          </p>
                          <hr />
                          <div className="projectLi">
                            <h2>주요 기능 및 특징</h2>
                            <li>
                              Linear-Regression, Binary-Classification,
                              Multi-class Classification을 이용하여 모델 학습 후
                              예측치 출력
                            </li>
                            <h2>사용 기술 및 언어</h2>
                            <li>Python</li>
                            <h2>작업 기여도</h2>
                            <ul>
                              <li>
                                Kaggle 데이터 선별
                                <ul>
                                  <li>
                                    Kaggle에서 가공하기 쉬운 데이터 선별 및 가공
                                  </li>
                                </ul>
                              </li>
                              <li>
                                AI 모델 학습
                                <ul>
                                  <li>
                                    가공된 데이터를 사용하여 AI 모델에 가중치를
                                    조정하며 학습 반복
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            <h2>회고</h2>이 프로젝트는 Linear Regression, Binary
                            Classification, Multi-class Classification을
                            활용하여 각각 보험료 예측, 수질 판별, 와인 품질 예측
                            모델을 개발하는 과정이었습니다. Kaggle에서 제공하는
                            데이터를 활용하여 모델을 학습시키며, 데이터의 선별과
                            가공이 모델의 성능에 미치는 영향을 깊이
                            이해했습니다. 데이터 전처리의 중요성을 체감하고, 각
                            모델에 적합한 학습 방법을 적용하며 반복적인 학습과
                            가중치 조정의 필요성을 배웠습니다. 또한, 실질적인
                            문제 해결 과정에서 얻은 경험을 통해 AI 모델 개발에
                            대한 자신감을 얻었고, 데이터 품질이 예측 정확도에
                            미치는 영향을 명확히 인식하게 되었습니다.
                            <hr />
                            <div className="githubA">
                              <span>텍스트를 클릭하면 이동합니다.</span>
                              {/* 추후 서버 연결 시 코드 수정 필요 */}
                              <h3>
                                <a
                                  href={`${process.env.PUBLIC_URL}/AIModel.pdf`}
                                  download="AIModel.pdf"
                                >
                                  PDF
                                </a>
                              </h3>
                              <h3>
                                <a href="https://colab.research.google.com/drive/1If55QiFlCXLeRxQx01AhYALv0OadNhLf?usp=drive_link">
                                  Linear-Regression(Colab)
                                </a>
                              </h3>
                              <h3>
                                <a href="https://colab.research.google.com/drive/1e1eTymOJOaYVcwN_ahZ_DFkEPcciMoYj?usp=drive_link">
                                  Binary-Classification(Colab)
                                </a>
                              </h3>
                              <h3>
                                <a href="https://colab.research.google.com/drive/1wln3IC7LA3ZAqgmuB398D87E_9ycyqdB?usp=drive_link">
                                  Multi-class Classification
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  >
                    자세히 보기
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="project-item">
                <img src={mfcMain} alt="mfcMain" />
                <div className="project-overlay">
                  <p className="project-title">MFC 프로젝트</p>
                  <p className="project-description">
                    카페 키오스크 및 영수증 출력 시스템
                  </p>
                  <button
                    className="project-button"
                    onClick={() =>
                      openModalPro(
                        <div>
                          <div className="projectType">
                            <div>
                              <span>개인 프로젝트</span>
                            </div>
                            <div>
                              <span>C++</span>
                            </div>
                            <div>
                              <span>MFC</span>
                            </div>
                          </div>
                          <h2 style={{ textAlign: "center", fontSize: "3rem" }}>
                            카페 키오스크 및 영수증 출력 시스템
                          </h2>
                          <p style={{ textAlign: "center" }}>
                            개발 기간 : 2023.07~2023.12
                          </p>
                          <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            style={{
                              "--swiper-pagination-color": "white",
                              "--swiper-navigation-color": "white",
                            }}
                          >
                            <SwiperSlide>
                              <img src={mfcMain} alt="mfcMain" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src={mfcExcel} alt="mfcExcel" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src={mfcRecipt} alt="mfcRecipt" />
                            </SwiperSlide>
                          </Swiper>
                          <p>
                            MFC기반의 음료 주문 및 영수증 출력 시스템입니다.
                            학교에서 배운 MFC기반의 개인 프로젝트를
                            진행하였습니다. MFC 기반의 음료 주문 및 영수증 출력
                            시스템은 사용자 인터페이스를 통해 음료를 선택하고
                            주문할 수 있도록 설계된 응용 프로그램입니다.
                            사용자는 다양한 음료 목록에서 원하는 음료를
                            선택하고, 주문 내용을 확인한 후 결제 단계를
                            진행합니다. 주문이 완료되면 시스템은 주문 정보를
                            바탕으로 영수증을 생성하고 출력합니다. 이 시스템은
                            MFC의 다이얼로그 및 컨트롤 기능을 활용하여
                            직관적이고 사용자 친화적인 인터페이스를 제공하며,
                            데이터 처리를 통해 실시간으로 주문 내역을 관리하고
                            기록할 수 있도록 설계되었습니다.
                          </p>
                          <hr />
                          <div className="projectLi">
                            <h2>주요 기능 및 특징</h2>
                            <li>음료 주문</li>
                            <li>영수증 출력</li>
                            <li>주문 내역 엑셀로 변환</li>
                            <h2>사용 기술 및 언어</h2>
                            <li>C++</li>
                            <h2>작업 기여도</h2>
                            <ul>
                              <li>프로젝트 주제 선정 및 일정 관리</li>
                              <li>MFC 프로젝트 개발</li>
                            </ul>
                            <h2>회고</h2>
                            이번 MFC 기반의 음료 주문 및 영수증 출력 시스템 개발
                            프로젝트를 통해 MFC의 다이얼로그 관리와 이벤트
                            처리에 대한 이해를 더욱 깊게 할 수 있었습니다. 특히,
                            사용자 인터페이스 설계와 데이터 처리의 통합 작업에서
                            발생한 문제들을 해결하면서 실무에서의 응용 능력을
                            키울 수 있었습니다. 그러나 일부 기능 구현 과정에서
                            예상보다 시간이 더 소요되었고, 초기 설계 단계에서
                            충분한 테스트 케이스를 고려하지 못한 부분이 있어
                            향후 프로젝트에서는 사전 기획과 테스트의 중요성을
                            더욱 강조할 필요성을 느꼈습니다. 전반적으로 이번
                            프로젝트는 MFC를 활용한 시스템 개발 능력을 강화하는
                            소중한 경험이었으며, 앞으로의 개발에 있어서도 배운
                            점들을 잘 적용할 수 있을 것 같습니다.
                            <hr />
                            <div className="githubA">
                              <span>텍스트를 클릭하면 이동합니다.</span>
                              {/* 추후 서버 연결 시 코드 수정 필요 */}
                              <h3>
                                <a
                                  href={`${process.env.PUBLIC_URL}/MFC.pdf`}
                                  download="MFC.pdf"
                                >
                                  PDF
                                </a>
                              </h3>
                              <h3>
                                <a href="https://github.com/ssojuwan/MFCCAFE">
                                  GitHub
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  >
                    자세히 보기
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="project-item">
                <img src={ycBar} alt="ycBar" />
                <div className="project-overlay">
                  <p className="project-title">YC Bar</p>
                  <p className="project-description">
                    아두이노, 라즈베리파이를 활용한 칵테일 머신
                  </p>
                  <button
                    className="project-button"
                    onClick={() =>
                      openModalPro(
                        <div>
                          <div className="projectType">
                            <div>
                              <span>팀 프로젝트</span>
                            </div>
                            <div>
                              <span>C++</span>
                            </div>
                            <div>
                              <span>Python</span>
                            </div>
                            <div>
                              <span>A I</span>
                            </div>
                            <div>
                              <span>Android Studio</span>
                            </div>
                          </div>
                          <h2 style={{ textAlign: "center", fontSize: "3rem" }}>
                            아두이노, 라즈베리파이를 이용한 칵테일 머신
                          </h2>
                          <p style={{ textAlign: "center" }}>
                            개발 기간 : 2023.07~2023.12
                          </p>
                          <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            style={{
                              "--swiper-pagination-color": "white",
                              "--swiper-navigation-color": "white",
                            }}
                          >
                            <SwiperSlide>
                              <img src={ycBar} alt="ycBar" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src={ycbarFlow} alt="ycbarFlow" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src={ycbarFlow2} alt="ycbarFlow2" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src={ycbarFlow3} alt="ycbarFlow3" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src={ycbarPlan} alt="ycbarPlan" />
                            </SwiperSlide>
                          </Swiper>
                          <p>
                            아두이노, 라즈베리파이 기반의 칵테일 머신입니다.
                            안드로이드 어플리케이션을 활용하여 기본 등록된
                            칵테일 레시피를 사용하거나 사용자 맞춤형 레시피를
                            등록할 수 있으며, 선택된 레시피는 ‘칵테일 제조
                            머신’으로 전달되어 완전 자동으로 칵테일이
                            제조됩니다. 또한, AI 음성인식 기술을 통해 사용자는
                            원하는 칵테일 도수에 맞는 레시피 추천을 받을 수
                            있고, 특정 분위기에 어울리는 노래 추천도 받을 수
                            있습니다.
                          </p>
                          <hr />
                          <div className="projectLi">
                            <h2>주요 기능 및 특징</h2>
                            <li>음료 제작</li>
                            <li>신규 음료 등록</li>
                            <li>음성 인식</li>
                            <h2>사용 기술 및 언어</h2>
                            <li>C++</li>
                            <li>Python</li>
                            <li>Android Studio</li>
                            <h2>작업 기여도</h2>
                            <ul>
                              <li>PM</li>
                              <ul>
                                <li>개발 문서 작성</li>
                                <li>프로젝트 주제 선정 및 일정 관리</li>
                                <li>개발 스프린트 일정 관리</li>
                              </ul>
                            </ul>
                            <ul>
                              <li>칵테일 머신 제작</li>
                              <ul>
                                <li>음성인식 AI 파이썬 코드 개발</li>
                                <li>
                                  라즈베리 파이, 아두이노, 파이썬 통신 코드 작성
                                </li>
                                <li>하드웨어 제작</li>
                              </ul>
                            </ul>
                            <h2>회고</h2>
                            프로젝트를 진행하며 처음 맡은 PM 역할이 익숙하지
                            않아 일정 관리에 어려움을 겪었습니다. 팀원으로서의
                            경험을 살려 최선을 다했지만, 예상과 달리 프로젝트
                            진행 중 여러 문제에 직면했습니다. 특히 하드웨어 설계
                            미숙으로 인해 머신 오작동과 라즈베리파이, 아두이노,
                            파이썬, 안드로이드 어플리케이션 간의 통신이 원활하지
                            않았습니다. 그러나 팀원들과의 긴밀한 소통을 통해
                            해결 방안을 모색하며, 계획된 일정에 맞춰 프로젝트를
                            완료했습니다. 음성인식 AI 학습에 필요한 데이터
                            부족으로 정확도 문제도 있었지만, 관련 라이브러리를
                            조사하며 이를 극복할 수 있었습니다. 비록 처음 맡은
                            PM 역할이었지만, 이 경험을 바탕으로 향후
                            프로젝트에서도 좋은 결과물을 만들어낼 수 있을 것
                            같습니다.
                            <hr />
                            <div className="githubA">
                              <span>텍스트를 클릭하면 이동합니다.</span>
                              {/* 추후 서버 연결 시 코드 수정 필요 */}
                              <h3>
                                <a
                                  href={`${process.env.PUBLIC_URL}/YCbar.pdf`}
                                  download="YCbar.pdf"
                                >
                                  PDF
                                </a>
                              </h3>
                              <h3>
                                <a href="https://github.com/jiseo0ok/rasberry-ycbar">
                                  GitHub
                                </a>
                              </h3>
                              <h3>
                                <a href="https://youtu.be/kUIPVLE4iqI?si=MRgH1hUgaRm61qPW&t=154">
                                  YouTube 관련 영상
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  >
                    자세히 보기
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="project-item">
                <img src={AWSArc} alt="AWSArc" />
                <div className="project-overlay">
                  <p className="project-title">AWS Cloud</p>
                  <p className="project-description">
                    AWS를 활용한 설문조사 웹 서비스
                  </p>
                  <button
                    className="project-button"
                    onClick={() =>
                      openModalPro(
                        <div>
                          <div className="projectType">
                            <div>
                              <span>개인 프로젝트</span>
                            </div>
                            <div>
                              <span>AWS</span>
                            </div>
                            <div>
                              <span>React</span>
                            </div>
                          </div>
                          <h2 style={{ textAlign: "center", fontSize: "3rem" }}>
                            AWS 아키텍처를 이용한 설문조사 웹 서비스
                          </h2>
                          <p style={{ textAlign: "center" }}>
                            개발 기간 : 2023.10~2023.12
                          </p>
                          <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            style={{
                              "--swiper-pagination-color": "white",
                              "--swiper-navigation-color": "white",
                            }}
                          >
                            <SwiperSlide>
                              <img src={AWSArc} alt="AWSArc" />
                            </SwiperSlide>
                          </Swiper>
                          <p>
                            AWS를 활용하여 간단한 설문조사를 할 수 있는 서비스
                            아키텍처를 설계하였습니다. EC2, S3, CloudFront, EIP,
                            RDS, Auto Scaling, Cloud Watch, GitHub를 이용하여
                            서비스 아키텍처를 구성하였습니다. GitHub에 업로드한
                            리액트 기반 웹사이트는 EC2에 반영되며, EC2와 S3는
                            연동되어 CloudFront를 통해 글로벌 배포가
                            이루어집니다. 사용자와 관리자 웹 페이지는 서로 다른
                            접속 권한을 필요로 하므로 보안 그룹을 통해 IP를
                            다르게 설정했습니다. EIP를 사용하여 사용자
                            인스턴스에 고정 IP를 할당하였으며, 같은 리전의 다른
                            가용 영역에 사용자와 관리자 인스턴스를 분리
                            배치했습니다. 퍼블릭 서브넷에는 t2.micro EC2
                            인스턴스를, 프라이빗 서브넷에는 RDS를 배치하여
                            사용자와 관리자가 같은 MySQL 데이터베이스를
                            공유하도록 했습니다. Auto Scaling을 통해 사용량에
                            따라 인스턴스 수를 조정하고, CloudWatch를 이용하여
                            인스턴스의 CPU 사용량을 모니터링하여 SNS를 통해
                            관리자에게 이메일 알림을 발송합니다.
                          </p>
                          <hr />
                          <div className="projectLi">
                            <h2>주요 기능 및 특징</h2>
                            <li>아키텍처 구성</li>
                            <h2>사용 기술 및 언어</h2>
                            <li>AWS</li>
                            <li>React</li>
                            <h2>작업 기여도</h2>
                            <ul>
                              <li>아키텍처</li>
                              <ul>
                                <li>구성 요소 조사 및 설계</li>
                              </ul>
                            </ul>
                            <h2>회고</h2>
                            이번 프로젝트에서는 AWS를 활용하여 설문조사 서비스를
                            구축하였고, 여러 AWS 서비스를 효과적으로 통합하여
                            성과를 거두었습니다. GitHub에 업로드된 리액트 기반
                            웹사이트는 EC2에 자동 반영되며, EC2와 S3는 연동되어
                            CloudFront를 통해 글로벌 배포가 이루어졌습니다.
                            사용자와 관리자 웹 페이지의 보안은 보안 그룹을 통해
                            IP를 구분하여 강화하였고, EIP를 통해 사용자
                            인스턴스에 고정 IP를 할당했습니다. 퍼블릭 서브넷에
                            t2.micro EC2와 프라이빗 서브넷의 RDS를 배치하여
                            데이터베이스 접근을 관리하였으며, Auto Scaling과
                            CloudWatch를 통해 인스턴스의 수를 조정하고 성능
                            모니터링을 실시하여 관리자에게 적시에 알림을 전달할
                            수 있었습니다. LinearLab에서는 몇 가지 제한 사항으로
                            인해 구현이 어려운 부분이 있었습니다. 또한, 아키텍처
                            설계가 미흡하여 최적화된 구조를 구현하지 못했습니다.
                            추후에 AWS에 대한 학습을 더 진행하여 보다 깔끔하고
                            효율적인 아키텍처를 설계해보고 싶습니다.
                            <hr />
                            <div className="githubA">
                              <span>텍스트를 클릭하면 이동합니다.</span>
                              {/* 추후 서버 연결 시 코드 수정 필요 */}
                              <h3>
                                <a
                                  href={`${process.env.PUBLIC_URL}/AWS.pdf`}
                                  download="AWS.pdf"
                                >
                                  PDF
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  >
                    자세히 보기
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="project-item">
                <img src={Gunjang2} alt="Gunjang2" />
                <div className="project-overlay">
                  <p className="project-title">군장 검사기</p>
                  <p className="project-description">
                    로스트 아크 게임의 스펙 검사
                  </p>
                  <button
                    className="project-button"
                    onClick={() =>
                      openModalPro(
                        <div>
                          <div className="projectType">
                            <div>
                              <span>팀 프로젝트</span>
                            </div>
                            <div>
                              <span>JavaScript</span>
                            </div>
                            <div>
                              <span>React</span>
                            </div>
                            <div>
                              <span>Python</span>
                            </div>
                            <div>
                              <span>A I</span>
                            </div>
                            <div>
                              <span>React</span>
                            </div>
                            <div>
                              <span>AWS</span>
                            </div>
                          </div>
                          <h2 style={{ textAlign: "center", fontSize: "3rem" }}>
                            로스트 아크 게임의 스펙 검사 사이트
                          </h2>
                          <p style={{ textAlign: "center" }}>
                            개발 기간 : 2024.03~2024.06
                          </p>
                          <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            style={{
                              "--swiper-pagination-color": "white",
                              "--swiper-navigation-color": "white",
                            }}
                          >
                            <SwiperSlide>
                              <img src={Gunjang2} alt="Gunjang2" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src={Gunjang1} alt="Gunjang1" />
                            </SwiperSlide>
                          </Swiper>
                          <p>
                            리액트 기반의 로스트아크 스펙 검사 사이트는 WebRTC를
                            통해 웹에서 화면 공유를 지원하며, OCR 기술을
                            사용하여 화면 속 텍스트를 읽어 스펙 검사를 수행할 수
                            있도록 설계되었습니다. 또한, 로스트아크 제작사에서
                            제공하는 API를 활용하여 스펙 검사 기능을
                            구현하였습니다.
                          </p>
                          <hr />
                          <div className="projectLi">
                            <h2>주요 기능 및 특징</h2>
                            <li>스펙검사</li>
                            <li>WebRTC - OCR 연동</li>
                            <li>API 통신</li>
                            <h2>사용 기술 및 언어</h2>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>AWS</li>
                            <li>Python</li>
                            <h2>작업 기여도</h2>
                            <ul>
                              <li>프론트엔드</li>
                              <ul>
                                <li>화면 구성 및 디자인</li>
                                <li>모달창 구현</li>
                                <li>API 통신</li>
                              </ul>
                            </ul>
                            <h2>회고</h2>
                            이 프로젝트에서 리액트 기반의 로스트아크 스펙 검사
                            사이트를 개발하면서, 프론트엔드에 중점을 두고 여러
                            중요한 기능을 구현했습니다. WebRTC를 통한 화면
                            공유와 OCR 기술을 연동하여 사용자가 웹에서 직접 스펙
                            검사를 수행할 수 있는 기능을 제공했습니다. 또한,
                            로스트아크 제작사 API를 활용하여 스펙 검사 기능을
                            통합했습니다. 주요 기능으로는 스펙 검사, WebRTC와
                            OCR 연동, API 통신이 포함되었습니다. 프론트엔드
                            작업으로는 화면 구성 및 디자인, 모달창 구현, API
                            통신 등을 맡아 사용자 경험을 향상시키고 인터페이스를
                            직관적으로 설계하였습니다. 기술적으로는 JavaScript와
                            React를 중심으로 개발하였으며, AWS와 Python을
                            보조적으로 활용하였습니다. 이번 프로젝트를 통해
                            프론트엔드 설계와 구현에서 많은 경험을 얻었으며,
                            향후에는 더 나은 사용자 경험을 제공하기 위해
                            지속적으로 기술을 개선하고 싶습니다.
                            <hr />
                            <div className="githubA">
                              <span>텍스트를 클릭하면 이동합니다.</span>
                              {/* 추후 서버 연결 시 코드 수정 필요 */}
                              <h3>
                                <a
                                  href={`${process.env.PUBLIC_URL}/gunjang.pdf`}
                                  download="gunjang.pdf"
                                >
                                  PDF
                                </a>
                              </h3>
                              <h3>
                                <a href="https://github.com/RPG-Inspection/front/tree/main">
                                  GitHub
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  >
                    자세히 보기
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-item">
                <img src={port1} alt="port1" />
                <div className="project-overlay">
                  <p className="project-title">포트폴리오 사이트</p>
                  <p className="project-description">포트폴리오 사이트</p>
                  <button
                    className="project-button"
                    onClick={() =>
                      openModalPro(
                        <div>
                          <div className="projectType">
                            <div>
                              <span>개인 프로젝트</span>
                            </div>
                            <div>
                              <span>JavaScript</span>
                            </div>
                            <div>
                              <span>React</span>
                            </div>
                          </div>
                          <h2 style={{ textAlign: "center", fontSize: "3rem" }}>
                            개인 포트폴리오
                          </h2>
                          <p style={{ textAlign: "center" }}>
                            개발 기간 : 2024.08~
                          </p>
                          <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            style={{
                              "--swiper-pagination-color": "white",
                              "--swiper-navigation-color": "white",
                            }}
                          >
                            <SwiperSlide>
                              <img src={port1} alt="port1" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src={port2} alt="port2" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src={port3} alt="port3" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src={port4} alt="port4" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src={port5} alt="port5" />
                            </SwiperSlide>
                          </Swiper>
                          <p>
                            이 포트폴리오 사이트는 React를 기반으로
                            제작되었으며, 진행한 다양한 프로젝트들을 한눈에
                            확인할 수 있도록 구성되어 있습니다. 각 프로젝트에는
                            상세한 설명과 함께 관련 자료가 포함되어 있어, 작업
                            과정과 결과물을 쉽게 이해할 수 있습니다. 이 사이트는
                            HTML, CSS, JavaScript를 활용하여 구축되었으며,
                            사용자 친화적인 디자인과 직관적인 네비게이션을 통해
                            포트폴리오를 효과적으로 전달할 수 있도록
                            최적화되었습니다.
                          </p>
                          <hr />
                          <div className="projectLi">
                            <h2>주요 기능 및 특징</h2>
                            <h2>사용 기술 및 언어</h2>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <h2>작업 기여도</h2>
                            <ul>
                              <li>프론트엔드</li>
                            </ul>
                            <h2>회고</h2>
                            포트폴리오 웹사이트를 제작하면서 지금까지 진행한
                            프로젝트들을 정리하고, 배운 기술들을 체계적으로
                            정리할 수 있었습니다. 이를 통해 부족한 점과 자신
                            있는 부분을 명확히 파악하는 계기가 되었습니다.
                            프론트엔드 기술을 활용해 웹 페이지를 제작하며 부족한
                            점을 보완하고, 새로운 기술을 학습하며 성장할 수
                            있었습니다. 앞으로도 지속적으로 포트폴리오를 개선해
                            나갈 예정입니다.
                            <hr />
                            <div className="githubA">
                              <span>텍스트를 클릭하면 이동합니다.</span>
                              <h3>
                                <a href="https://github.com/ssojuwan/frontport">
                                  GitHub
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  >
                    자세히 보기
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {showScrollButton && (
        <>
          <button className="scroll-to-top" onClick={scrollToTop}>
            ↑
          </button>
          <button className="send-to-email" onClick={sendToEmail}>
            <img src={Email} alt="Email" width="90%" height="90%" />
          </button>
        </>
      )}

      {modalContent && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {modalContent}
          </div>
        </div>
      )}

      {modalContentPro && (
        <div className="modalPro">
          <div className="modal-contentPro">
            <span className="close" onClick={closeModalPro}>
              &times;
            </span>
            {modalContentPro}
          </div>
        </div>
      )}
    </main>
  );
};

export default Body;
