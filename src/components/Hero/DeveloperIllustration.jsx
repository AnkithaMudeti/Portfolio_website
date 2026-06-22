import { memo } from 'react';

function DeveloperIllustration() {
  return (
    <svg
      className="hero-illustration__svg"
      viewBox="0 0 400 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heroSkinGradient" x1="200" y1="80" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBBF77" />
          <stop offset="1" stopColor="#E8945A" />
        </linearGradient>
        <linearGradient id="heroHairGradient" x1="200" y1="40" x2="200" y2="130" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E293B" />
          <stop offset="1" stopColor="#334155" />
        </linearGradient>
        <linearGradient id="heroShirtGradient" x1="200" y1="200" x2="200" y2="360" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="heroLaptopGradient" x1="120" y1="280" x2="280" y2="360" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E293B" />
          <stop offset="1" stopColor="#0F172A" />
        </linearGradient>
        <radialGradient id="heroGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 180) rotate(90) scale(160)">
          <stop stopColor="#38BDF8" stopOpacity="0.35" />
          <stop offset="0.5" stopColor="#8B5CF6" stopOpacity="0.15" />
          <stop offset="1" stopColor="#14B8A6" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="190" r="150" fill="url(#heroGlow)" />

      <ellipse cx="200" cy="380" rx="90" ry="12" fill="rgba(255,255,255,0.06)" />

      <path
        d="M145 340 C145 280 165 240 200 240 C235 240 255 280 255 340 L255 360 L145 360 Z"
        fill="url(#heroShirtGradient)"
      />

      <path
        d="M155 250 C155 220 175 200 200 200 C225 200 245 220 245 250 L245 265 L155 265 Z"
        fill="url(#heroSkinGradient)"
      />

      <ellipse cx="200" cy="130" rx="52" ry="58" fill="url(#heroSkinGradient)" />

      <path
        d="M148 115 C150 55 175 35 200 35 C225 35 250 55 252 115 C248 95 230 80 200 80 C170 80 152 95 148 115 Z"
        fill="url(#heroHairGradient)"
      />

      <path
        d="M148 115 C145 130 148 145 155 155 C160 140 165 130 170 125 C165 110 155 105 148 115 Z"
        fill="#1E293B"
      />
      <path
        d="M252 115 C255 130 252 145 245 155 C240 140 235 130 230 125 C235 110 245 105 252 115 Z"
        fill="#1E293B"
      />

      <ellipse cx="185" cy="128" rx="4" ry="5" fill="#1E293B" />
      <ellipse cx="215" cy="128" rx="4" ry="5" fill="#1E293B" />
      <path d="M192 145 Q200 152 208 145" stroke="#C97A4B" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      <rect x="115" y="295" width="170" height="95" rx="8" fill="url(#heroLaptopGradient)" />
      <rect x="125" y="305" width="150" height="70" rx="4" fill="#0B1120" />
      <rect x="135" y="315" width="60" height="4" rx="2" fill="#38BDF8" opacity="0.8" />
      <rect x="135" y="325" width="90" height="3" rx="1.5" fill="#8B5CF6" opacity="0.6" />
      <rect x="135" y="333" width="70" height="3" rx="1.5" fill="#14B8A6" opacity="0.6" />
      <rect x="135" y="341" width="100" height="3" rx="1.5" fill="#94A3B8" opacity="0.4" />
      <rect x="135" y="355" width="40" height="8" rx="2" fill="#38BDF8" opacity="0.5" />

      <circle cx="310" cy="120" r="28" fill="rgba(56,189,248,0.12)" stroke="rgba(56,189,248,0.3)" strokeWidth="1.5" />
      <text x="310" y="126" textAnchor="middle" fill="#38BDF8" fontSize="18" fontWeight="600" fontFamily="Inter, sans-serif">
        {'</>'}
      </text>

      <circle cx="95" cy="200" r="22" fill="rgba(139,92,246,0.12)" stroke="rgba(139,92,246,0.3)" strokeWidth="1.5" />
      <text x="95" y="206" textAnchor="middle" fill="#8B5CF6" fontSize="14" fontWeight="600" fontFamily="Inter, sans-serif">
        JS
      </text>
    </svg>
  );
}

export default memo(DeveloperIllustration);
