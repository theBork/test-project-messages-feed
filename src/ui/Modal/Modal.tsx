import React, { MouseEvent, PropsWithChildren } from "react";
import Overlay from "components/Overlay";
import Button from "ui/Button";
import useTheme from "hooks/useTheme";
import CloseIcon from "../../icons/CloseIcon";
import { ModalActionButton } from "./Modal.types";
import * as Styled from "./Modal.styled";

interface ModalProps {
  actionButtons?: ModalActionButton[];
  onClose: (e?: MouseEvent<HTMLDivElement>) => void;
  title?: string;
}

const Modal: React.FC<PropsWithChildren<ModalProps>> = (props) => {
  const { actionButtons, children, onClose, title } = props;
  const { colors: { simpleBlack } } = useTheme();

  return (
    <Overlay onClick={onClose}>
      <Styled.Wrapper>
        <Styled.CloseButtonWrapper>
          <CloseIcon size="m" baseColor={simpleBlack} />
        </Styled.CloseButtonWrapper>
        {title && <Styled.Title>{title}</Styled.Title>}
        {children}
        {actionButtons && actionButtons.length > 0 && (
          <Styled.ActionButtonsContainer>
            {actionButtons.map(button => (
              <Button key={button.title} size="m" fill={button.fill} onClick={button.onClick}>{button.title}</Button>
            ))}
          </Styled.ActionButtonsContainer>
        )}
      </Styled.Wrapper>
    </Overlay>
  );
};

export default Modal;
