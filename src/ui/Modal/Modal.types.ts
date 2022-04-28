import { ButtonFill } from "ui/Button";

export interface ModalActionButton {
  disabled?: boolean;
  fill?: ButtonFill;
  title: string;
  onClick: () => void;
}
