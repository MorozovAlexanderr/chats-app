import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@/components/Elements/Button';
import { Form, InputField } from '@/components/Form';
import { getErrorMessage } from '@/utils/errors';
import { useSignIn } from '@/features/auth';

const validationSchema = yup.object({
  email: yup.string().email().required('Required'),
  password: yup.string().required('Required'),
});

type SignInValues = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const { mutate: signInMutation, isPending, error } = useSignIn();

  const handleSubmit = (values: SignInValues) => {
    signInMutation(values);
  };

  return (
    <Form<SignInValues>
      onSubmit={handleSubmit}
      options={{ resolver: yupResolver(validationSchema) }}
      className="space-y-4"
    >
      {({ register, formState }) => (
        <>
          <InputField
            label="Email"
            error={formState.errors.email}
            registration={register('email')}
          />
          <InputField
            label="Password"
            type="password"
            error={formState.errors.password}
            registration={register('password')}
          />
          {error && <p className="text-red-500">{getErrorMessage(error)}</p>}
          <p className="text-center text-sm">
            Don't have an account?{' '}
            <Link to="/register" className="text-secondary hover:text-primary">
              Sign Up
            </Link>
          </p>
          <Button type="submit" className="w-full" isLoading={isPending}>
            Sign In
          </Button>
        </>
      )}
    </Form>
  );
};

export default SignInForm;
