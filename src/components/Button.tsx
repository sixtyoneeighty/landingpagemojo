import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="
        inline-flex items-center px-6 py-3
        text-base font-medium text-black
        bg-amber-200 hover:bg-amber-300
        rounded-full transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-200
        shadow-lg hover:shadow-xl
      "
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;