import React from 'react';

const Button = ({ text, className, id, href = "#" }) => {
  return (
    <a href={href} id={id} className={`${className ?? ""} cta-wrapper`}>
      <div className='cta-button group'>
        <div className='bg-circle'/>
          <p className='text'>{text}</p>
          <div className='arrow-wrapper'>
            <img src="/images/arrow-down.svg" alt="Arrow pointing down" />
          </div>
        </div>
    </a>
  );
};

export default Button;
