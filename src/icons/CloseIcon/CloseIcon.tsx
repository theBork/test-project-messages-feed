import React from "react";
import { IconProps } from "../types";
import { getIconSize } from "../utils";

const CloseIcon: React.FC<IconProps> = (props) => {
  const { baseColor, size: sizeProp } = props;
  const size = getIconSize(sizeProp);

  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill={baseColor} d="M8.73002 7.99922L13.1839 3.54603C13.3836 3.34643 13.3836 3.01605 13.1839 2.81645C12.9843 2.61685 12.6539 2.61685 12.4542 2.81645L8.00032 7.26964L3.54641 2.81645C3.34678 2.61685 3.01635 2.61685 2.81672 2.81645C2.61708 3.01605 2.61708 3.34643 2.81672 3.54603L7.27063 7.99922L2.81672 12.4524C2.61708 12.652 2.61708 12.9824 2.81672 13.182C2.91998 13.2852 3.05077 13.3334 3.18157 13.3334C3.31236 13.3334 3.44315 13.2852 3.54641 13.182L8.00032 8.7288L12.4542 13.182C12.5575 13.2852 12.6883 13.3334 12.8191 13.3334C12.9499 13.3334 13.0807 13.2852 13.1839 13.182C13.3836 12.9824 13.3836 12.652 13.1839 12.4524L8.73002 7.99922Z" />
    </svg>

  );
};

export default CloseIcon;
