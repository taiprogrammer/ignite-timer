import { ButtonContainer, ButtonVariant } from "./Button.styles";

interface ButtonProps {
  color?: ButtonVariant;
  title?: ButtonVariant;
}

export function Button({ color = "primary", title = "primary" }: ButtonProps) {
  return <ButtonContainer variant={color}>{title}</ButtonContainer>;
}
