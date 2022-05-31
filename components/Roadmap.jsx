import Head from "next/head";
import Script from "next/script";
import React from "react";

export default function Roadmap() {
  return (
    <>
      <Head></Head>
      <Script src="/js/Roadmap.js" type="text/javascript"></Script>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"
        type="text/javascript"
      ></Script>
      {/* <Script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></Script> */}

      <div className="timeline-container" id="timeline-1">
        <div className="timeline-header">
          <h2 className="timeline-header__title">Roadmap</h2>
          {/* <h3 className="timeline-header__subtitle">FATHER OF THE TURKS</h3> */}
        </div>
        <div className="timeline">
          <div
            className="timeline-item"
            data-text="MIGRATION TO
LOF V2"
          >
            <div className="timeline__content">
              <img className="timeline__img" src="/assets/roadmap/img-1.png" />
              {/* <h2 className="timeline__content-title">1881</h2> */}
              <p className="timeline__content-desc">
                A new tokenomics! Designed for investors and content creators.
                Lower tax for buys, higher tax for sells. Several new features
                will be implemented to protect loyal investors and ensure LOF
                price growth over time.
              </p>
            </div>
          </div>
          <div
            className="timeline-item"
            data-text="ROADMAP
RELEASE"
          >
            <div className="timeline__content">
              <img className="timeline__img" src="/assets/roadmap/img-2.png" />
              {/* <h2 className="timeline__content-title">1893</h2> */}
              <p className="timeline__content-desc">
                Unveiling of a new redesigned and updated roadmap in perfect
                harmony with the team's vision.
              </p>
            </div>
          </div>
          <div
            className="timeline-item"
            data-text="MIGRATION TO
LOF V2"
          >
            <div className="timeline__content">
              <img className="timeline__img" src="/assets/roadmap/img-1.png" />
              {/* <h2 className="timeline__content-title">1905</h2> */}
              <p className="timeline__content-desc">
                A new tokenomics! Designed for investors and content creators.
                Lower tax for buys, higher tax for sells. Several new features
                will be implemented to protect loyal investors and ensure LOF
                price growth over time.
              </p>
            </div>
          </div>
          <div
            className="timeline-item"
            data-text="ROADMAP
RELEASE"
          >
            <div className="timeline__content">
              <img className="timeline__img" src="/assets/roadmap/img-2.png" />
              {/* <h2 className="timeline__content-title">1908</h2> */}
              <p className="timeline__content-desc">
                Unveiling of a new redesigned and updated roadmap in perfect
                harmony with the team's vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
