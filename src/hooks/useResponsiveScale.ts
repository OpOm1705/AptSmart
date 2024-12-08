import { useState, useEffect } from 'react';

export const useResponsiveScale = () => {
  const [scale, setScale] = useState(1);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      if (width <= 320) {
        setScale(0.686);
        setIsMobileView(true);
      } else {
        setScale(1);
        setIsMobileView(false);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const getScaledStyle = (baseStyle: React.CSSProperties): React.CSSProperties => {
    if (!isMobileView) return baseStyle;

    const scaledStyle = { ...baseStyle };
    if (scaledStyle.fontSize) {
      scaledStyle.fontSize = `${parseFloat(scaledStyle.fontSize.toString()) * scale}px`;
    }
    if (scaledStyle.padding) {
      scaledStyle.padding = `${parseFloat(scaledStyle.padding.toString()) * scale}px`;
    }
    if (scaledStyle.margin) {
      scaledStyle.margin = `${parseFloat(scaledStyle.margin.toString()) * scale}px`;
    }

    return scaledStyle;
  };

  return {
    scale,
    isMobileView,
    getScaledStyle
  };
};