interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
}

const Logo = ({ variant = 'light', size = 'md', showIcon = true }: LogoProps) => {
  const textColor = variant === 'light' ? '#FFFFFF' : '#0D1B2A';
  const accentColor = '#C9923A';

  const sizes = {
    sm: { height: 28, fontSize: 16, gap: 8, iconScale: 0.7 },
    md: { height: 36, fontSize: 20, gap: 10, iconScale: 0.85 },
    lg: { height: 48, fontSize: 28, gap: 14, iconScale: 1.1 },
  };

  const s = sizes[size];

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: `${s.gap}px`,
      textDecoration: 'none',
      userSelect: 'none',
    }}>
      {showIcon && (
        <svg
          width={s.height}
          height={s.height}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Abstract jet silhouette — angular, minimal, premium */}
          <rect width="48" height="48" rx="6" fill={variant === 'light' ? 'rgba(255,255,255,0.08)' : 'rgba(13,27,42,0.06)'} />
          {/* Main jet body — sleek forward-pointing form */}
          <path
            d="M8 30L24 10L40 30L32 28L24 38L16 28L8 30Z"
            fill={accentColor}
            opacity="0.9"
          />
          {/* Inner highlight */}
          <path
            d="M24 16L32 28L24 34L16 28L24 16Z"
            fill={variant === 'light' ? 'rgba(255,255,255,0.2)' : 'rgba(13,27,42,0.15)'}
          />
          {/* Accent line */}
          <line
            x1="18" y1="26" x2="30" y2="26"
            stroke={variant === 'light' ? 'rgba(255,255,255,0.4)' : 'rgba(13,27,42,0.3)'}
            strokeWidth="1"
          />
        </svg>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: `${s.fontSize}px`,
          fontWeight: 700,
          color: textColor,
          letterSpacing: '0.04em',
          lineHeight: 1.1,
        }}>
          JETFLOW
        </span>
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: `${Math.round(s.fontSize * 0.45)}px`,
          fontWeight: 500,
          color: accentColor,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          lineHeight: 1.4,
        }}>
          MEDIA
        </span>
      </div>
    </div>
  );
};

export default Logo;
