import React from 'react';

interface ColorSelectorProps {
  colors: { colorName: string; colorHex: string }[];
  selectedColor: string;
  onSelect: (colorName: string) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({
  colors,
  selectedColor,
  onSelect,
}) => {
  return (
    <div className='flex gap-3'>
      {colors.map(color => (
        <button
          key={color.colorName}
          onClick={() => onSelect(color.colorName)}
          className={`w-8 h-8 rounded-full border-2 transition-all
            ${selectedColor === color.colorName
          ? 'border-gray-500 scale-110'
          : 'border-gray-300'}
          `}
          style={{ backgroundColor: color.colorHex }}
        />
      ))}
    </div>
  );
};

export default ColorSelector;