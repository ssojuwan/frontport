import React, { useState, useEffect } from "react";
import "../css/Body.css";
import "../css/Header.css"; // 헤더 CSS 가져오기
import Profile from "../image/profile.png";

const Body = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [headerTransparent, setHeaderTransparent] = useState(true);

  const handleScroll = () => {
    const introSection = document.getElementById("intro");
    const introHeight = introSection ? introSection.offsetHeight : 0;

    setShowScrollButton(window.scrollY > introHeight);
    setHeaderTransparent(window.scrollY < introHeight);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
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
          안녕하세요.
          <br />
          저는 꿈을 쫒는 프론트 엔드 개발자, 서주완입니다.
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
            <div className="value">wndhks990824@naver.com</div>
          </div>
          <div className="info-item">
            <div className="label">학력</div>
            <div className="value">
              연암공과대학교
              <br />
              스마트소프트웨어학과(심화)
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <p>여기에 프로젝트 정보를 추가하세요.</p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>여기에 연락처 정보를 추가하세요.</p>
      </section>

      {showScrollButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </main>
  );
};

export default Body;
