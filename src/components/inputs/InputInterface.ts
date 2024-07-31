import { InputHTMLAttributes } from "react";

export interface InputElementProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  disabled?: boolean;
}
