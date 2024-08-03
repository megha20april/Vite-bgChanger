import React from 'react';

function Button({ color, onClick}) {
  // Construct the className based on the bgColor
  const bgClass = `bg-${color.toLowerCase()}-500`;

  return (
    <button onClick={onClick} className={`rounded-3xl ${bgClass} shadow-3xl px-4 py-2 text-white`}>
      {color}
    </button>
  );
}

export default Button;