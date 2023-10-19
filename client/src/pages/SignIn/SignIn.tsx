import { AuthLayout, SignInForm } from '@/features/auth';

const SignIn = () => {
  return (
    <AuthLayout>
      <p className="mb-6 text-5xl font-semibold text-secondary">Welcome back</p>
      <SignInForm />
    </AuthLayout>
  );
};

export default SignIn;
