import React from 'react';
import { css } from '@emotion/core';

interface XingProps {
  color?: string;
}

export const IconXing: React.FC<XingProps> = (props) => (
  <svg
    width="21"
    height="22"
    viewBox="0 0 21 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    css={css`
      transition: 0.3s;
      fill: ${props.color ? props.color : '#202840'};
      &:hover {
        fill: ${props.color ? props.color : '#ffffff'};
      }
    `}
    {...props}
  >
    <path d="M20.5 0H15.3704L7.75 13.3746L12.6601 22H17.7897L12.8796 13.3746L20.5 0Z" />
    <path d="M5.7055 4.25H0.875766L3.67027 9.07541L0 15H4.82973L8.5 9.07541L5.7055 4.25Z" />
  </svg>
);
