import React from 'react';

const OtpInput: React.FC<{ value: string; onChange: (value: string) => void; index: number; onBackspace: (index: number) => void; }> = ({ value, onChange, index, onBackspace }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (/^[0-9]$/.test(newValue) || newValue === '') {
      onChange(newValue);
      if (newValue !== '') {
        const nextElement = document.getElementById(`otp-${index + 1}`);
        if (nextElement) {
          nextElement.focus();
        }
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !value) {
      onBackspace(index);
    }
  };

  return (
    <input
      id={`otp-${index}`}
      type="text"
      maxLength={1}
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      className="w-12 text-center border rounded"
    />
  );
};

export default OtpInput;
