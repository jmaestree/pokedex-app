import React, { LabelHTMLAttributes } from 'react';

const Label: React.FC<LabelHTMLAttributes<HTMLLabelElement>> = ({ children, htmlFor, ...props }) => {
  return (
    <label {...props} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

Label.displayName = 'Label';

export { Label };
