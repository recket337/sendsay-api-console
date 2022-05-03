import styled from "styled-components";
import React from 'react';

const SpinnerWrapper = styled.div`
  @keyframes ldio-r48ohq5yqpe {
      0% { opacity: 1 }
      100% { opacity: 0 }
  }
  .ldio-r48ohq5yqpe div {
      left: 46.5px;
      top: 0.5px;
      position: absolute;
      animation: ldio-r48ohq5yqpe linear 1.7857142857142856s infinite;
      background: #0055fb;
      width: 7px;
      height: 29px;
      border-radius: 2.61px / 2.61px;
      transform-origin: 3.5px 49.5px;
  }.ldio-r48ohq5yqpe div:nth-child(1) {
       transform: rotate(0deg);
       animation-delay: -1.5624999999999998s;
       background: #0055fb;
   }.ldio-r48ohq5yqpe div:nth-child(2) {
        transform: rotate(45deg);
        animation-delay: -1.3392857142857142s;
        background: #0055fb;
    }.ldio-r48ohq5yqpe div:nth-child(3) {
         transform: rotate(90deg);
         animation-delay: -1.1160714285714284s;
         background: #0055fb;
     }.ldio-r48ohq5yqpe div:nth-child(4) {
          transform: rotate(135deg);
          animation-delay: -0.8928571428571428s;
          background: #0055fb;
      }.ldio-r48ohq5yqpe div:nth-child(5) {
           transform: rotate(180deg);
           animation-delay: -0.6696428571428571s;
           background: #0055fb;
       }.ldio-r48ohq5yqpe div:nth-child(6) {
            transform: rotate(225deg);
            animation-delay: -0.4464285714285714s;
            background: #0055fb;
        }.ldio-r48ohq5yqpe div:nth-child(7) {
             transform: rotate(270deg);
             animation-delay: -0.2232142857142857s;
             background: #0055fb;
         }.ldio-r48ohq5yqpe div:nth-child(8) {
              transform: rotate(315deg);
              animation-delay: 0s;
              background: #0055fb;
          }
  .loadingio-spinner-spinner-k3swi8ntita {
      width: 27px;
      height: 27px;
      display: inline-block;
      overflow: hidden;
      background: none;
  }
  .ldio-r48ohq5yqpe {
      width: 100%;
      height: 100%;
      position: relative;
      transform: translateZ(0) scale(0.27);
      backface-visibility: hidden;
      transform-origin: 0 0; /* see note above */
  }
  .ldio-r48ohq5yqpe div { box-sizing: content-box; };
`;

export const Spinner = () => (
  <SpinnerWrapper>
    <div className="loadingio-spinner-spinner-k3swi8ntita">
      <div className="ldio-r48ohq5yqpe">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  </SpinnerWrapper>
);