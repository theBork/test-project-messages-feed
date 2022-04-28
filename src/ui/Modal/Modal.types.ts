import { ButtonFill } from "ui/Button";

export interface ModalActionButton {
  title: string;
  onClick: () => void;
  fill?: ButtonFill;
}
