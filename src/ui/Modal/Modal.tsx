import React, { MouseEvent, PropsWithChildren } from "react";
import Overlay from "components/Overlay";
import Title from "components/Title";
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

  const handleModalClick = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation();

  return (
    <Overlay onClick={onClose}>
      <Styled.Wrapper onClick={handleModalClick}>
        <Styled.CloseButtonWrapper onClick={onClose}>
          <CloseIcon size="m" baseColor={simpleBlack} />
        </Styled.CloseButtonWrapper>
        {title && <Title type="h1">{title}</Title>}
        {children}
        {actionButtons && actionButtons.length > 0 && (
          <Styled.ActionButtonsContainer>
            {actionButtons.map(button => (
              <Button
                key={button.title}
                size="m"
                disabled={button.disabled}
                fill={button.fill}
                onClick={button.onClick}
              >
                {button.title}
              </Button>
            ))}
          </Styled.ActionButtonsContainer>
        )}
      </Styled.Wrapper>
    </Overlay>
  );
};

export default Modal;
