export const getResponsiveClasses = (baseClasses: string) => {
  const scaledClasses = baseClasses
    .split(' ')
    .map(className => {
      // Scale font sizes
      if (className.startsWith('text-')) {
        switch (className) {
          case 'text-xs': return 'xs:text-xs-scaled';
          case 'text-sm': return 'xs:text-sm-scaled';
          case 'text-base': return 'xs:text-base-scaled';
          case 'text-lg': return 'xs:text-lg-scaled';
          case 'text-xl': return 'xs:text-xl-scaled';
        }
      }

      // Scale padding
      if (className.startsWith('p-')) {
        const size = className.split('-')[1];
        if (!isNaN(Number(size))) {
          return `xs:p-scaled-${size}`;
        }
      }

      // Scale margins
      if (className.startsWith('m-')) {
        const size = className.split('-')[1];
        if (!isNaN(Number(size))) {
          return `xs:m-scaled-${size}`;
        }
      }

      // Scale widths and heights
      if (className.startsWith('w-') || className.startsWith('h-')) {
        const size = className.split('-')[1];
        if (!isNaN(Number(size))) {
          return `xs:${className.split('-')[0]}-scaled-${size}`;
        }
      }

      return className;
    })
    .join(' ');

  return `${baseClasses} ${scaledClasses}`;
};