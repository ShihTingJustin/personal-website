/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect/dist/core";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import linkedinIcon from "../public/linkedin_icon.svg";

export default function Home() {
  useEffect(() => {
    new Typewriter("#cover-text", {
      strings: [
        "Developer",
        "Investor",
        "Petrol-head",
        "Product Manager",
        "Learner",
        "Teaching Assistant",
      ],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
    });
  }, []);

  return (
    <div id="container">
      <div id="cover">
        <div id="cover-text"></div>
      </div>
      <div id="intro" className="">
        <div id="intro-content">
          <div className="content" data-aos="fade-up">
            <h1>賈斯丁·黃</h1>
            <h3>不安分的靈魂</h3>
          </div>
        </div>
      </div>
      <div id="about" className="fixed">
        <div id="about-content">
            <p>
              一個非典型技術宅，既鑽研技術也享受打造產品和琢磨細節的過程。
              <br />
              被敏捷開發燒到後決定前往軟體領域一探究竟，目前在電商產業擔任前端工程師。
            </p>
            <p>
              汽車愛好者，對德國工藝特別著迷，尤其是賓士全方位的產品配置和保時捷獨樹一格的德式激情。
              <br />
              熱衷於分析市場和規格，曾在台灣唯一整車研發企業擔任產品經理。
            </p>
            <p>
              指數化投資的實踐者，經歷美股兩週四次熔斷和後續V型反轉的洗禮後，領悟了一套適合自己的投資哲學。
            </p>
            <p>
              喜歡看科幻電影滿足想像力，像是駭客任務、星際大戰、黑暗騎士、全面啟動、普羅米修斯、天能等等。
            </p>
          </div>
      </div>
      <div id="developer" className="fixed">
        <div className="content" data-aos="fade-up">
          <h3>Developer</h3>
          <p></p>
        </div>
      </div>

      <div id="petrolHead" className="fixed">
        <div className="content" data-aos="fade-up">
          <h3>汽車愛好者</h3>
          <p></p>
        </div>
      </div>

      <div id="quote" className="fixed">
        <div className="content" data-aos="fade-up">
          <h5>
            "Your time is limited, so don't waste it living someone else's
            life."
          </h5>
          <p>Steve Jobs</p>
        </div>
      </div>

      <div id="social-media" className="fixed">
        <div className="content" data-aos="fade-up">
          <div>
            <Image src={linkedinIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
