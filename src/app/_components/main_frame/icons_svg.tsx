"use client"

import * as React from "react"; 
import { useState } from "react";

// Define a generalized interface for all icon components
interface IconProps {
    width?: number;
    height?: number;
    fillColour?: string;
    strokeColour?: string;
}
  
export const SystemModeIcon: React.FC<IconProps> = ({ width = 2, fillColour="#1e1b4b", strokeColour = "#6b7280" }) => {
  const [hoverOn, setHovered] = React.useState(false);
  return (
    <svg 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      fill="none" 
      stroke="currentColor" 
      strokeWidth={width} 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
    <rect x="4" y="4" width="16" height="12" rx="2" stroke={strokeColour} fill={hoverOn ? fillColour : "none"}></rect>
    <rect x="6" y="18" width="12" height="2" rx="1" stroke={strokeColour}></rect>
  </svg>
)
}

export const DarkModeIcon: React.FC<IconProps> = ({ width = 1, strokeColour = "white" }) => {
  const [hoverOn, setHovered] = React.useState(false);

  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <defs>
        <radialGradient 
          id="fadeGradient" cx="140%" cy="10%" r="160%" fx="0" fy="0%"
          >
          <stop
            offset="20%"
            style={{ stopColor: "black", stopOpacity: 1, }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "white", stopOpacity: 1, }}
          />
        </radialGradient>
      </defs>
      <circle cx="14" cy="14" r="9"  fill={hoverOn ? "#D9F99D" : strokeColour} />
      <circle cx="16" cy="12" r="8" fill="url(#fadeGradient)" />

      <g strokeWidth={width} strokeLinecap="round" stroke={hoverOn ? "#D9F99D" : strokeColour}>
          {/* star 1 */}
          <line x1="3" y1="1" x2="3" y2="5" />
          <line x1="1" y1="3" x2="5" y2="3" />
          {/* star 2 */}
          <line x1="14" y1="14" x2="14" y2="10" />
          <line x1="12" y1="12" x2="16" y2="12" />
          {/* star 3 */}
          <line x1="20" y1="4" x2="20" y2="8" />
          <line x1="18" y1="6" x2="22" y2="6" />
        </g>
    </svg>
  )
}

export const LightModeIcon: React.FC<IconProps> = ({ width = 2, strokeColour = "#FFBE03" }) => {

  return (
    <svg 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
      fill="none" 
      
      strokeWidth={width} 
      strokeLinecap="round" 
      strokeLinejoin="round">

      <path d="M12 2v3M18.66 5.344l-1.656 1.656M22.005 12.004h-3M18.66 18.664l-1.656-1.656M12 22.01V19M5.34 18.664l1.67-1.67M2.995 12.004h3M5 5l1.67 1.67"  stroke={strokeColour}></path>
      <circle cx="12" cy="12" r="3" stroke={strokeColour} />
      <circle cx="12" cy="12" r="2.5" stroke="#FFCB03" />
      <circle cx="12" cy="12" r="2" stroke="#FFD303" />
      <circle cx="12" cy="12" r="1.5" stroke="#FFDB03" />
      <circle cx="12" cy="12" r="1" stroke="#FFE403" />
      <circle cx="12" cy="12" r="0.5" fill="#FFF003" />
    </svg>
  )
}

export default {
  SystemModeIcon,
  DarkModeIcon,
  LightModeIcon,
};