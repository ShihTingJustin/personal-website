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
            <h2>賈斯丁</h2>
            <h3>不安分的靈魂</h3>
            <p></p>
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
