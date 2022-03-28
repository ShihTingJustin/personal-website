/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import { IoIosArrowUp } from 'react-icons/io';
import Card from '../src/components/card/Card.tsx';
import Modal from '../src/components/modal/Modal.tsx';
import Image from 'next/image';
import ReactIcon from '../public/icon/react.svg';
import MediumIcon from '../public/icon/medium-icon.svg';
import AcIcon from '../public/icon/ac.png';
import AutoIcon from '../public/icon/auto-icon.png';

const mockData = [
  {
    icon: <ReactIcon style={{ fill: '#149eca' }} width="60" height="60" />,
    iconBgColor: 'black-1',
    background: (
      <ReactIcon className="card--bg" style={{ fill: '#59D4F8' }} width="60" height="60" />
    ),
    title: '資訊科技',
  },
  {
    icon: '/icon/auto-icon.png',
    iconBgColor: 'white',
    background: <ReactIcon className="card--bg" style={{ fill: '#fff' }} width="60" height="60" />,
    title: '汽車',
  },
  {
    icon: '/icon/stock.svg',
    iconBgColor: 'black-2',
    background: (
      <ReactIcon className="card--bg" style={{ fill: '#32bf57' }} width="60" height="60" />
    ),
    title: '投資',
  },
  {
    icon: '/icon/ac.png',
    iconBgColor: 'orange',
    background: <ReactIcon className="card--bg" style={{ fill: '#f60' }} width="60" height="60" />,
    title: '教育',
  },
  {
    icon: '/icon/medium-icon.svg',
    iconBgColor: 'black-2',
    background: (
      <ReactIcon className="card--bg" style={{ fill: '#59D4F8' }} width="60" height="60" />
    ),
    title: '分享',
  },
  {
    icon: '/icon/movie.svg',
    iconBgColor: 'white',
    background: <ReactIcon className="card--bg" style={{ fill: '#fff' }} width="60" height="60" />,
    title: '電影',
  },
  {
    icon: '/icon/link.svg',
    iconBgColor: 'blue',
    background: (
      <ReactIcon className="card--bg" style={{ fill: '#228cc4' }} width="60" height="60" />
    ),
    title: '更多資訊',
  },
];

const mockContentData = [{}];

export default function Home() {
  const [stateModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    new Typewriter('#cover-text', {
      strings: [
        'Developer',
        'Product Manager',
        'Petrol-head',
        'Investor',
        'Teaching Assistant',
        'Learner',
      ],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
    });
  }, []);

  return (
    <div id="container">
      <div id="cover" className="block">
        <div id="cover-text"></div>
        <div id="scroll-indicator-wrapper">
          <IoIosArrowUp />
        </div>
      </div>
      <div id="intro-wrapper" className="block">
        <div className="title-wrapper" data-aos="fade-up">
          <div className="photo"></div>
          <div>
            <div className="title">賈斯丁黃</div>
            <div className="subtitle">不安分的靈魂</div>
          </div>
        </div>
        <div className="content" data-aos="fade-up">
          一個非典型技術宅，鑽研技術也享受打造產品和琢磨細節的過程，被敏捷開發燒到後決定前往軟體領域一探究竟。
          <br />
          目前在電商產業擔任前端工程師，也在程式教育機構兼職助教。
        </div>
        <div className="content" data-aos="fade-up">
          汽車愛好者，對德國工藝特別著迷，尤其是賓士全方位的產品配置和保時捷獨樹一格的德式激情。
          <br />
          喜歡分析市場和規格，曾在台灣唯一整車研發企業擔任產品經理。
        </div>
        <div className="content" data-aos="fade-up">
          想知道我喜歡做些什麼就繼續往下滑吧～
        </div>
      </div>
      <div id="card-wrapper" className="block">
        {mockData.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            iconBgColor={item.iconBgColor}
            background={item.background}
            title={item.title}
            onClick={() => setModalOpen(true)}
          />
        ))}
        <Modal isOpen={stateModalOpen} setModalOpen={setModalOpen}>
          資訊科技大幅改變人類的生活型態，我們每天都需要用到各種軟體服務，我認為有技術能力親手打造產品是一件很酷的事情。
          <br />
          前端工程師站在人文與科技的交叉口，結合理性與感性，為產品打造使用者介面並創造好的使用者體驗，是我喜歡的工作模式。
          <br />
          目前專注於前端領域，擅長運用 React 生態系工具打造網頁應用程式。
          <br />
          對於技術抱持開放的態度，會利用 side project 接觸後端及 DevOps 相關技術。
        </Modal>
      </div>

      {/* <section id="intro" className="wrapper block">
        <div id="intro-image"></div>
        <div id="intro-content">
          <div className="title-wrapper" data-aos="fade-up">
            <div className="title">賈斯丁黃</div>
            <div className="subtitle">不安分的靈魂</div>
          </div>
          <div className="content" data-aos="fade-up">
            一個非典型技術宅，鑽研技術也享受打造產品和琢磨細節的過程，被敏捷開發燒到後決定前往軟體領域一探究竟。
            <br />
            目前在電商產業擔任前端工程師，也在程式教育機構兼職助教。
          </div>
          <div className="content" data-aos="fade-up">
            汽車愛好者，對德國工藝特別著迷，尤其是賓士全方位的產品配置和保時捷獨樹一格的德式激情。
            <br />
            喜歡分析市場和規格，曾在台灣唯一整車研發企業擔任產品經理。
          </div>
          <div className="content" data-aos="fade-up">
            想知道我喜歡做些什麼就繼續往下滑吧～
          </div>
        </div>
      </section>
      <section id="developer" className="downtime-wrapper block">
        <div className="downtime-title" data-aos="fade-up">
          資訊科技
        </div>
        <div className="content" data-aos="fade-up">
          資訊科技大幅改變人類的生活型態，我們每天都需要用到各種軟體服務，我認為有技術能力親手打造產品是一件很酷的事情。
          <br />
          前端工程師站在人文與科技的交叉口，結合理性與感性，為產品打造使用者介面並創造好的使用者體驗，是我喜歡的工作模式。
          <br />
          目前專注於前端領域，擅長運用 React 生態系工具打造網頁應用程式。
          對於技術抱持開放的態度，會利用 side project 接觸後端及 DevOps 相關技術。
        </div>
      </section>
      <section id="petrolHead" className="downtime-wrapper block">
        <div className="downtime-title" data-aos="fade-up">
          汽車
        </div>
        <div className="content" data-aos="fade-up">
          汽車是人類智慧的結晶，力與美的結合，也是個人特色的展現。
          假日爬得起來的話會在清晨去106縣道兜風，幸運的話可以獲得美美的追焦照。
          <br />
          生在資訊爆炸的時代讓玩車更容易，卻也感嘆內燃機的時代已經進入倒數計時。
        </div>
      </section>
      <section id="investment" className="downtime-wrapper block">
        <div className="downtime-title" data-aos="fade-up">
          投資
        </div>
        <div className="content" data-aos="fade-up">
          指數化投資的實踐者，經歷美股兩週四次熔斷和後續V型反轉的洗禮後，領悟了一套適合自己的投資哲學。常看綠角財經筆記和
          IEObserve國際經濟觀察。 另外也對於加密貨幣的崛起及其與法幣之間的關係會如何變化很感興趣。
        </div>
      </section>
      <section id="ta" className="downtime-wrapper block">
        <div className="downtime-title" data-aos="fade-up">
          教育
        </div>
        <div className="content" data-aos="fade-up">
          在程式教育機構擔任助教，除了批改作業，也時常從學生提出的問題中學習，或是看到自己也可以更進步的地方，教學相長。
        </div>
      </section>
      <section id="sharing" className="downtime-wrapper block">
        <div className="downtime-title" data-aos="fade-up">
          分享
        </div>
        <div className="content" data-aos="fade-up">
          平常都在網路上看別人寫的文章，獲益匪淺，所以決定自己也在 Medium
          撰寫文章作為回饋，主題包含程式、轉職、面試、技術筆記。(換工作太忙所以有一陣子沒發文了QQ)
        </div>
      </section>
      <section id="movie" className="downtime-wrapper block">
        <div className="downtime-title" data-aos="fade-up">
          電影
        </div>
        <div className="content" data-aos="fade-up">
          愛看科幻電影滿足想像力，像是駭客任務、星際大戰、黑暗騎士、全面啟動、普羅米修斯、天能等等;也喜歡昆丁塔倫提諾獨特的暴力美學和敘事手法，像是惡棍特工、決殺令、八惡人、從前有個好萊塢。
        </div>
      </section>
      <section id="sea" className="downtime-wrapper block">
        <div className="downtime-title" data-aos="fade-up">
          看海
        </div>
        <div className="content" data-aos="fade-up">
          遠離塵囂靜靜坐在岸邊，看著一望無際的海洋、聽著海浪拍打沙灘的聲音，心靈就療癒了。
        </div>
      </section>
      <section id="contact" className="wrapper block">
        <div className="title">Further Information</div>
        <div className="content">
          <div id="linkedIn" className="card" data-aos="zoom-in">
            <a
              target="_tab"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/justinhuang777"
            ></a>
          </div>
          <div id="github" className="card" data-aos="zoom-in">
            <a target="_tab" rel="noopener noreferrer" href="https://github.com/ShihTingJustin"></a>
          </div>
          <div id="medium" className="card" data-aos="zoom-in">
            <a
              target="_tab"
              rel="noopener noreferrer"
              href="https://medium.com/life-after-hello-world"
            ></a>
          </div>
          <div id="instagram" className="card" data-aos="zoom-in">
            <a
              target="_tab"
              rel="noopener noreferrer"
              href="https://www.instagram.com/mb722656355s/"
            ></a>
          </div>
        </div>
      </section> */}
    </div>
  );
}
