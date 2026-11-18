import React, { useEffect, useState } from 'react';
import { getBrandLogoCandidates } from '../utils/brandLogos';

interface BrandLogoProps {
  name: string;
  domain: string;
  customLogoUrl?: string;
  size?: number;
  className?: string;
  onStatusChange?: (loaded: boolean) => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  name,
  domain,
  customLogoUrl,
  size = 128,
  className = 'w-14 h-14 rounded-xl',
  onStatusChange,
}) => {
  const candidates = getBrandLogoCandidates(domain, size, customLogoUrl);
  const [attemptIndex, setAttemptIndex] = useState(0);

  // Reset attempt index whenever domain or customLogoUrl changes
  useEffect(() => {
    setAttemptIndex(0);
  }, [domain, customLogoUrl]);

  const currentSrc = candidates[attemptIndex];
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() || '')
    .join('') || name.substring(0, 2).toUpperCase();

  const handleAdvanceFallback = () => {
    const nextIndex = attemptIndex + 1;
    if (nextIndex < candidates.length) {
      setAttemptIndex(nextIndex);
    } else {
      setAttemptIndex(candidates.length);
      onStatusChange?.(false);
    }
  };

  if (!currentSrc) {
    return (
      <div
        className={`${className} bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0`}
        aria-label={`${name} monogram`}
      >
        <span className="text-sm font-extrabold font-mono text-amber-400 tracking-wider">
          {initials}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`${className} bg-white/95 border border-zinc-700/80 p-2 flex items-center justify-center shrink-0 overflow-hidden shadow-inner`}
    >
      <img
        key={currentSrc}
        src={currentSrc}
        alt={`${name} logo`}
        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
        onLoad={(e) => {
          // Skip tiny 16x16 generic globe fallbacks from favicon services if another provider exists
          if (e.currentTarget.naturalWidth <= 16 && attemptIndex + 1 < candidates.length) {
            handleAdvanceFallback();
            return;
          }
          onStatusChange?.(true);
        }}
        onError={handleAdvanceFallback}
        referrerPolicy="no-referrer"
        loading="lazy"
      />
    </div>
  );
};