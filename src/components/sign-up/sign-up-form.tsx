import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignupFormData, signupSchema } from '@/schemas/auth.schemas';
import FormGenerator from '../forms/form-generator';
import { Button } from '../ui/button';

const SignupForm: React.FC<{ onSubmit: (data: SignupFormData) => void }> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGenerator
        inputType="input"
        type="text"
        name="name"
        placeholder="Enter your name"
        label="Name"
        register={register}
        errors={errors}
      />
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
      <FormGenerator
        inputType="input"
        type="password"
        name="confirmPassword"
        placeholder="Confirm your password"
        label="Confirm Password"
        register={register}
        errors={errors}
      />
      <Button type="submit" className="mt-4">Signup</Button>
    </form>
  );
};

export default SignupForm;
