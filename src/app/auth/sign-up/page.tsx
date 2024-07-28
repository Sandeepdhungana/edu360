"use client"
import React, { useState } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { OTPFormData, SignupFormData } from '@/schemas/auth.schemas';
import OTPForm from '@/components/forms/OTPForm/otp-form';
import SignupForm from '@/components/sign-up/sign-up-form';

const SignupPage: NextPage = () => {
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [signupData, setSignupData] = useState<SignupFormData | null>(null);

  const handleSignupSubmit = (data: SignupFormData) => {
    setSignupData(data);
    setShowOTPForm(true);
  };

  const handleOTPSubmit = (data: OTPFormData) => {
    console.log('OTP submitted:', data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        {showOTPForm ? (
          <OTPForm onSubmit={handleOTPSubmit} />
        ) : (
          <>
            <h1 className="text-3xl font-bold text-center mb-6">Create an Account</h1>
            <SignupForm onSubmit={handleSignupSubmit} />
            <p className="mt-4 text-center text-gray-600">
              Already have an account? <Link href="/auth/sign-in">Sign In</Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SignupPage;
