import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect/dist/core";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    new Typewriter("#cover-text", {
      strings: [
        "Developer",
        "Programmer",
        "Learner",
        "Apprentice",
        "Product Manager",
        "Petrol-head",
      ],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
    });
  }, []);

  return (
    <div>
      <div id="cover">
        <div id="cover-text"></div>
      </div>
      <div className="fixed">
        <p>1</p>
        <div className="expand"></div>
      </div>

      <div className="fixed1">
        <p>1</p>
        <div className="expand"></div>
      </div>

      <div className="item" data-aos="fade-up">
        1
      </div>
      <div className="item" data-aos="fade-down">
        2
      </div>
      <div className="item" data-aos="fade-right">
        3
      </div>
      <div className="item" data-aos="fade-left">
        4
      </div>
      <div className="item" data-aos="fade-up">
        1
      </div>

      <div className="item" data-aos="zoom-in">
        5
      </div>
      <div className="item" data-aos="zoom-out">
        6
      </div>

      <div className="item" data-aos="slide-up">
        7
      </div>

      <div className="item" data-aos="flip-up">
        8
      </div>
      <div className="item" data-aos="flip-down">
        9
      </div>
      <div className="item" data-aos="flip-right">
        10
      </div>
      <div className="item" data-aos="flip-left">
        11
      </div>
    </div>
  );
}
