import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = '', width = 200, height = 80 }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background for "MCM" */}
      <defs>
        <linearGradient id="mcmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FDB813', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FDC642', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Main "MCM" Text */}
      <text
        x="50%"
        y="55%"
        dominantBaseline="middle"
        textAnchor="middle"
        style={{
          fontFamily: 'Playfair Display',
          fontSize: '48px',
          fontWeight: 700,
          fill: 'url(#mcmGradient)',
          letterSpacing: '2px',
        }}
      >
        MCM
      </text>

      {/* "adrian" Text */}
      <text
        x="50%"
        y="78%"
        dominantBaseline="middle"
        textAnchor="middle"
        style={{
          fontFamily: 'Inter',
          fontSize: '18px',
          fontWeight: 300,
          fill: 'currentColor',
          letterSpacing: '4px',
          textTransform: 'uppercase',
        }}
      >
        adrian
      </text>
    </svg>
  );
}