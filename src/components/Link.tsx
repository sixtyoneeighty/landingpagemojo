import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <a
      className="
        inline-flex items-center px-6 py-3
        text-base font-medium text-black
        bg-amber-200 hover:bg-amber-300
        rounded-full transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-200
        shadow-lg hover:shadow-xl
        no-underline
      "
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
