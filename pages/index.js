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
      strings: ["Developer", "Learner", "TA", "Petrol-head", "Product Manager"],
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
        <div id="intro-image"></div>
        <div id="intro-content">
          <div className="content" data-aos="fade-up">
            <h2>賈斯丁·黃</h2>
            <h3>不安分的靈魂</h3>
            <p>
              一個非典型技術宅，喜歡打造產品，琢磨細節設定。被敏捷開發燒到後決定前往軟體領域一探究竟，目前在電商產業擔任前端工程師。
            </p>
            <p>
              指數化投資的實踐者，經歷美股兩週內四次熔斷和後續V型反轉的洗禮後，對投資哲學有了更深的領悟。
            </p>
            <p>
              汽車愛好者，認為汽車是人類智慧的結晶，也是力與美的結合。熱衷於鑽研市場和規格，對德國工藝特別著迷，尤其是賓士的全面和保時捷的浪漫。曾在台灣唯一整車研發企業擔任產品經理。
            </p>
          </div>
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
