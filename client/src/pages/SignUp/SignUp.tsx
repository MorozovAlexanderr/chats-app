import { AuthLayout, SignUpForm } from '@/features/auth';

const SignUp = () => {
  return (
    <AuthLayout>
      <p className="mb-6 text-5xl font-semibold text-secondary">New account</p>
      <SignUpForm />
    </AuthLayout>
  );
};

export default SignUp;
