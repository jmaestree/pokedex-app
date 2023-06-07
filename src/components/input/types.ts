import { DetailedHTMLProps, InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react';

export enum InputStatus {
  Default = 'default',
  Success = 'success',
  Error = 'error',
}

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string | ReactNode;
  helperText?: string;
  status?: keyof typeof InputStatus;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
}
