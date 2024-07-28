import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import OtpInput from './otp-input';
import { OTPFormData, otpSchema } from '@/schemas/auth.schemas';



const OTPForm: React.FC<{ onSubmit: (data: OTPFormData) => void }> = ({ onSubmit }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<OTPFormData>({
    resolver: zodResolver(otpSchema),
  });
  
  const [otpValues, setOtpValues] = useState(Array(6).fill(''));

  const handleOtpChange = (value: string, index: number) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
  };

  const handleOtpBackspace = (index: number) => {
    const prevElement = document.getElementById(`otp-${index - 1}`);
    if (prevElement) {
      prevElement.focus();
    }
  };

  const handleFormSubmit = () => {
    const otp = otpValues.join('');
    onSubmit({ otp });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Enter OTP</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="flex space-x-2 justify-center">
          {otpValues.map((value, index) => (
            <OtpInput
              key={index}
              index={index}
              value={value}
              onChange={(val) => handleOtpChange(val, index)}
              onBackspace={handleOtpBackspace}
            />
          ))}
        </div>
        {errors.otp && <p className="text-red-400 mt-2 text-sm">{errors.otp.message}</p>}
        <Button type="submit" className="mt-4">Verify OTP</Button>
      </form>
    </div>
  );
};

export default OTPForm;
