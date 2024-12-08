export const calculateScaledValue = (value: number, unit: string = 'px'): string => {
  const scaleFactor = 0.686;
  return `${value * scaleFactor}${unit}`;
};

export const getScaledDimension = (dimension: number): number => {
  const scaleFactor = 0.686;
  return Math.round(dimension * scaleFactor);
};

export const getScaledSpacing = (spacing: number): string => {
  return calculateScaledValue(spacing * 4); // Assuming 4px base unit
};

export const getScaledFontSize = (size: number): string => {
  return calculateScaledValue(size);
};

export const createScaledStyles = (styles: Record<string, string | number>): Record<string, string | number> => {
  const scaledStyles: Record<string, string | number> = {};
  
  Object.entries(styles).forEach(([key, value]) => {
    if (typeof value === 'number') {
      if (key.includes('width') || key.includes('height') || key.includes('margin') || key.includes('padding')) {
        scaledStyles[key] = calculateScaledValue(value);
      } else {
        scaledStyles[key] = value;
      }
    } else {
      scaledStyles[key] = value;
    }
  });

  return scaledStyles;
};