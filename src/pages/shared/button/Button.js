import React from 'react';

const Button = ({children}) => {
    return (
        <button className="bg-gradient-to-r from-accent to-neutral btn text-white">
            {children}
          </button>
    );
};

export default Button;