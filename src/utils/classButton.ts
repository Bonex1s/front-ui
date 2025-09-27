type ButtonValue = string; 

const buttonClass = (button: ButtonValue, activeButton: ButtonValue): string =>
  `px-6 py-2 text-lg font-semibold transition ${
    activeButton === button ? 'border-b-2 border-gray-500 text-balck' : ''
  }`;
export default buttonClass;