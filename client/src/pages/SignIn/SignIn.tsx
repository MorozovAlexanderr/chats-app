import { AuthLayout, SignInForm } from '@/features/auth';

const SignIn = () => {
  return (
    <AuthLayout>
      <p className="text-4xl text-center mb-6 font-semibold text-secondary">Welcome back</p>
      <SignInForm />
    </AuthLayout>
  );
};

export default SignIn;
