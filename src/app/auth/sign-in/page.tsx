'use client'
import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import SignInForm from '@/components/sign-up/sign-in-form';

const SignInPage: NextPage = () => {
  const handleSignInSubmit = (data: { email: string; password: string }) => {
    console.log('Sign-in data submitted:', data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r  from-blue-500 to-purple-600">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Sign In</h1>
        <SignInForm onSubmit={handleSignInSubmit} />
        <p className="mt-4 text-center text-gray-600">
          Don't have an account? <Link href="/auth/sign-up">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
