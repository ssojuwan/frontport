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
            학교에서 처음으로 HTML, CSS, JavaScript를 접하면서, <span className="boldP">결과물이
            즉각적으로 나타나는 프론트엔드 개발</span>에 매력을 느꼈습니다. 이후
            개인적으로 공부하던 중 React라는 라이브러리를 알게 되었고, 실제
            프로젝트 경험을 쌓기 위해 'Together'라는 봉사단체와 봉사자를
            매칭하는 플랫폼에 참여하게 되었습니다. 이 프로젝트에서 저는 게시판
            CRUD 기능 구현과 컴포넌트 제작을 담당하며, 프론트엔드 개발의 매력과
            사용자 경험 개선의 중요성을 깊이 이해하게 되었습니다. 이러한 경험을
            통해 프론트엔드 개발에 대한 열정이 더욱 커졌고, <span className="boldP">사용자 중심의
            혁신적인 웹 애플리케이션을 개발</span>하고 싶습니다.
          </div>
          <br />
          <div className="overViewContent">
            <p>Q. 본인의 장 · 단점</p>
            제 장점은 <span className="boldP">새로운 기술에 대한 호기심</span>이
            많다는겁니다. 저는 항상 최신 웹 기술과 트렌드에 대해 배우고 탐구하는
            것을 즐깁니다. 이러한 호기심 덕분에 다양한 프레임워크와 라이브러리를
            익히며, 문제를 창의적으로 해결하는 능력을 키워왔습니다. 반면, 제
            단점은 조급함입니다. 프로젝트를 진행할 때 결과를 빠르게 보고
            싶어하는 경향이 있어, 때때로 충분한 검토 없이 진행하게 되는 경우가
            있습니다. 이를 개선하기 위해 최근에는 <span className="boldP">작업의 우선순위</span>를 정하고, 각
            단계에서 충분한 시간을 할애하도록 노력하고 있습니다.
          </div>
          <br />
          <div className="overViewContent">
            <p>Q. 가치관</p>
            프론트엔드 개발자로서 제 가치관은 <span className="boldP">피드백과 개선</span>입니다. 모든
            프로젝트가 처음부터 완벽할 수는 없다고 생각합니다. 그러나 좋은
            개발자는 사용자와 팀원으로부터 받은 <span className="boldP">개선 방안을 적극적으로 수용</span>하여
            프로젝트를 발전시킬 수 있습니다. <span className="boldP">피드백을 통한 반복적인 개선 과정</span>을
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
          </div>
          <div>
            <p>Backend</p>
            <hr />
              <img src={Mysql} alt="Mysql" />
              <img src="https://velog.velcdn.com/images/deep-of-machine/post/3f778fa2-2b43-42b3-9233-091424be7d73/image.png" alt="Python" />
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
                          <h2>아두이노 동전 분류기</h2>
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
                              <img src={ImgReact} alt="ImgReact" />
                            </SwiperSlide>
                          </Swiper>
                          <p>
                            아두이노를 활용한 동전 분류 및 지문 인식 금고 제작
                            프로젝트에 대한 자세한 설명입니다. 이 프로젝트에서는
                            아두이노와 다양한 센서를 이용해 동전을 자동으로
                            분류하고, 지문 인식을 통해 금고를 열 수 있는
                            시스템을 개발하였습니다.
                          </p>
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
                          <h2>아두이노 동전 분류기</h2>
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
                              <img src={ImgReact} alt="ImgReact" />
                            </SwiperSlide>
                          </Swiper>
                          <p>
                            아두이노를 활용한 동전 분류 및 지문 인식 금고 제작
                            프로젝트에 대한 자세한 설명입니다. 이 프로젝트에서는
                            아두이노와 다양한 센서를 이용해 동전을 자동으로
                            분류하고, 지문 인식을 통해 금고를 열 수 있는
                            시스템을 개발하였습니다.
                          </p>
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
                          <h2>아두이노 동전 분류기</h2>
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
                              <img src={ImgReact} alt="ImgReact" />
                            </SwiperSlide>
                          </Swiper>
                          <p>
                            아두이노를 활용한 동전 분류 및 지문 인식 금고 제작
                            프로젝트에 대한 자세한 설명입니다. 이 프로젝트에서는
                            아두이노와 다양한 센서를 이용해 동전을 자동으로
                            분류하고, 지문 인식을 통해 금고를 열 수 있는
                            시스템을 개발하였습니다.
                          </p>
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
                          <h2>함께해요 투게더</h2>
                          <hr />
                          <p>
                            리액트 기반의 웹 페이지 개발 프로젝트로, 봉사단체와
                            봉사자를 매칭하는 플랫폼입니다. 이 프로젝트에서는
                            사용자 인터페이스를 구성하고, 게시판 CRUD 기능을
                            구현하였습니다.
                          </p>
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
