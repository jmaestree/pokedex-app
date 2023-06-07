import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { Label } from '../label/label';
import { InputProps } from './types';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, helperText, status = 'Default', className, readOnly, labelProps, type, ...props }, ref) => {
    if (label && !id) {
      throw new Error('Input: `id` value must be specified when using `label`');
    }

    const labelClasses = clsx(labelProps?.className, 'flex');
    const inputClasses = clsx(className, 'flex w-full');

    return (
      <div className={clsx('flex flex-col', type === 'hidden' && 'hidden')}>
        {label && (
          <Label {...labelProps} className={labelClasses} htmlFor={id} data-form-label-status={status}>
            {label}
          </Label>
        )}
        <input
          {...props}
          type={type || 'text'}
          className={inputClasses}
          ref={ref}
          id={id}
          readOnly={readOnly}
          data-form-control-status={status}
        />
        {helperText && <p data-form-helper-status={status}>{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
