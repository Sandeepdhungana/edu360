'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { z } from 'zod';
import FormGenerator from '../forms/form-generator';

const signInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

type SignInFormData = z.infer<typeof signInSchema>;

const SignInForm: React.FC<{ onSubmit: (data: SignInFormData) => void }> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGenerator
        inputType="input"
        type="email"
        name="email"
        placeholder="Enter your email"
        label="Email"
        register={register}
        errors={errors}
      />
      <FormGenerator
        inputType="input"
        type="password"
        name="password"
        placeholder="Enter your password"
        label="Password"
        register={register}
        errors={errors}
      />
      <Button type="submit" className="mt-4">Sign In</Button>
    </form>
  );
};

export default SignInForm;
