import React from 'react';
import './button.scss';

type ButtonProps = {
  text: string;
  onClick: () => void;
  secondaryStyle?: boolean;
};

export const Button = ({ text, onClick, secondaryStyle }: ButtonProps) => (
  <button onClick={onClick} className={`button${secondaryStyle ? '--secondary' : ''}`}>
    {text}
  </button>
);
