import React from 'react';

const Button = ({ text, className, id, link }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById("counter");

    if (target && id) {
      const offset = window.innerHeight * 0.15;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <a
      href={link ? "https://drive.google.com/file/d/1FaZthL34Qq1y78vEaVqpgFFjiYILf10I/view?usp=sharing" : undefined}
      onClick={link ? undefined : handleClick}
      id={id}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className='cta-button group'>
        <div className='bg-circle' />
        <p className='text'>{text}</p>
        <div className='arrow-wrapper'>
          <img src="/images/arrow-down.svg" alt="Arrow pointing down" />
        </div>
      </div>
    </a>
  );
};

export default Button;
