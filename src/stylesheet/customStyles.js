export const customStyles = {
  option: provided => {
    return {
      ...provided,
      background: 'transparent',
      border: 'none',
      outline: 'none',

      fontSize: '18px',
      fontWeight: '400',
      color: 'rgba(255, 255, 255, 0.8)',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: '#FF868D',
        fontWeight: '400',
      },
      textAlign: 'left',
    };
  },
  control: styles => ({
    ...styles,
    border: 'none',
    borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
    borderRadius: 0,
    boxShadow: 'none',
    backgroundColor: 'transparent',
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return {
      ...provided,
      opacity,
      transition,
      right: 5,
      color: '#FBFBFB',
      padding: '8px 20px',
    };
  },

  menu: (provided, state) => {
    return {
      ...provided,
      background:
        'linear-gradient(0deg,rgba(83, 61, 186, 1) 0%,rgba(80, 48, 154, 1) 36%,rgba(106, 70, 165, 1) 61%,rgba(133, 93, 175, 1) 100%)',
      borderRadius: '8px',
    };
  },
  menuList: base => ({
    ...base,
    '::-webkit-scrollbar': {
      display: 'none',
    },
  }),

  placeholder: () => {
    return {
      color: 'rgba(255, 255, 255, 0.5)',
      position: 'absolute',
      left: 10,
      padding: '8px 20px',
    };
  },
  indicatorSeparator: () => ({}),

  indicators: () => {
    return {
      cursor: 'pointer',
    };
  },

  dropdownIndicator: provided => {
    return {
      ...provided,
      color: 'rgba(255, 255, 255, 0.4)',
      '&:hover': {
        color: '#fbfbfb',
      },
    };
  },

  input: provided => {
    return {
      ...provided,
      margin: '0px',
      color: '#FBFBFB',
      padding: '8px 20px',

      minWidth: '100%',
    };
  },
};
