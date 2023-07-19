import React from 'react';

const svgClose = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
    <path stroke="#FBFBFB" d="m1 1 16 16M1 17 17 1" />
  </svg>
);

const ModalEditTransaction = () => {
  return (
    <div>
      <button type="button" className="iconBtn">
        {svgClose}
      </button>
    </div>
  );
};

export default ModalEditTransaction;
