import React from 'react'

const Button = ({ styles }) => {
  const handleClick = () => {
    window.location.href = '/#contact';
  };

  return (
    <button type="button" onClick={handleClick} className={`py-4 px-6 bg-gold-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}>
      Get Started
    </button>
  )
}

export default Button