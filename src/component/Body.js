import React, { useState, useEffect } from "react";
import "../css/Body.css";
import "../css/Header.css"; // 헤더 CSS 가져오기
import Profile from "../image/profile.png";
import Html from "../image/html.png";
import Css from "../image/css.png";
import Js from "../image/js.png";
import Aws from "../image/aws.png";
import Android from "../image/android.png";
import Discord from "../image/discord.jpg";
import Github from "../image/github.jpg";
import Mysql from "../image/mysql.png";
import ImgReact from "../image/react.png";
import Email from "../image/email.svg";

const Body = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [headerTransparent, setHeaderTransparent] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* eslint-disable */
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
                onClick={openModal}
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
            학교에서 처음으로 HTML, CSS, JavaScript를 접하면서, 결과물이
            즉각적으로 나타나는 프론트엔드 개발에 매력을 느꼈습니다. 이후
            개인적으로 공부하던 중 React라는 라이브러리를 알게 되었고, 실제
            프로젝트 경험을 쌓기 위해 'Together'라는 봉사단체와 봉사자를
            매칭하는 플랫폼에 참여하게 되었습니다. 이 프로젝트에서 저는 게시판
            CRUD 기능 구현과 컴포넌트 제작을 담당하며, 프론트엔드 개발의 매력과
            사용자 경험 개선의 중요성을 깊이 이해하게 되었습니다. 이러한 경험을
            통해 프론트엔드 개발에 대한 열정이 더욱 커졌고, 사용자 중심의
            혁신적인 웹 애플리케이션을 개발하고 싶습니다.
          </div>
          <br />
          <div className="overViewContent">
            <p>Q. 본인의 장 · 단점</p>제 장점은 새로운 기술에 대한 호기심이
            많다는겁니다. 저는 항상 최신 웹 기술과 트렌드에 대해 배우고 탐구하는
            것을 즐깁니다. 이러한 호기심 덕분에 다양한 프레임워크와 라이브러리를
            익히며, 문제를 창의적으로 해결하는 능력을 키워왔습니다. 반면, 제
            단점은 조급함입니다. 프로젝트를 진행할 때 결과를 빠르게 보고
            싶어하는 경향이 있어, 때때로 충분한 검토 없이 진행하게 되는 경우가
            있습니다. 이를 개선하기 위해 최근에는 작업의 우선순위를 정하고, 각
            단계에서 충분한 시간을 할애하도록 노력하고 있습니다. 이러한 자기
            개선의 과정을 통해 보다 완성도 높은 결과물을 만들어내고자 합니다.
          </div>
          <br />
          <div className="overViewContent">
            <p>Q. 가치관</p>
            프론트엔드 개발자로서 제 가치관은 피드백과 개선입니다. 모든
            프로젝트가 처음부터 완벽할 수는 없다고 생각합니다. 그러나 좋은
            개발자는 사용자와 팀원으로부터 받은 개선 방안을 적극적으로 수용하여
            프로젝트를 발전시킬 수 있습니다. 피드백을 통한 반복적인 개선 과정을
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
            <div>
              <img src={Html} alt="Html" />
            </div>
            <div>
              <img src={Css} alt="Css" />
            </div>
            <div>
              <img src={Js} alt="Js" />
            </div>
            <div>
              <img src={ImgReact} alt="React" />
            </div>
          </div>
          <div>
            <p>Backend</p>
            <hr />
            <div>
              <img src={Mysql} alt="Mysql" />
            </div>
          </div>
          <div>
            <p>Mobile App</p>
            <hr />
            <div>
              <img src={Android} alt="Android" />
            </div>
          </div>
          <div>
            <p>Deployment</p>
            <hr />
            <div>
              <img src={Aws} alt="Aws" />
            </div>
          </div>
          <div>
            <p>Version Control</p>
            <hr />
            <div>
              <img src={Github} alt="Github" />
            </div>
          </div>
          <div>
            <p>Communication</p> <hr />
            <div>
              <img src={Discord} alt="Discord" />
            </div>
          </div>
        </div>
      </section>
      <section id="project">
        <h2>Project</h2>
        <p>프로젝트 내용을 넣어볼까요...</p>
      </section>

      {showScrollButton && (
        <>
          <button className="scroll-to-top" onClick={scrollToTop}>
            ↑
          </button>
          <button className="send-to-email" onClick={sendToEmail}>
            <img src={Email} alt="Email" width="100%" height="100%" b />
          </button>
        </>
      )}

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
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
        </div>
      )}
    </main>
  );
};

export default Body;
