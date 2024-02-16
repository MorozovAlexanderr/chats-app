import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { getErrorMessage } from '@/utils/errors';
import { Form, InputField } from '@/components/Form';
import Button from '@/components/Elements/Button';
import { useSignUp } from '@/features/auth/';

type SignUpValues = {
  name: string;
  email: string;
  password: string;
};

const validationSchema = yup.object({
  name: yup.string().min(3).required('Required field'),
  email: yup.string().email().required('Required field'),
  password: yup.string().required('Required filed'),
});

const SignUpForm = () => {
  const { mutate: signUpMutation, isPending, error } = useSignUp();

  const handleSubmit = (values: SignUpValues) => {
    signUpMutation(values);
  };

  return (
    <Form<SignUpValues>
      onSubmit={handleSubmit}
      options={{ resolver: yupResolver(validationSchema) }}
      className="space-y-4"
    >
      {({ register, formState }) => (
        <>
          <InputField
            label="Name"
            error={formState.errors.name}
            registration={register('name')}
          />
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
            Already have an account?{' '}
            <Link to="/login" className="text-secondary hover:text-primary">
              Sign In
            </Link>
          </p>
          <Button type="submit" className="w-full" isLoading={isPending}>
            Sign Up
          </Button>
        </>
      )}
    </Form>
  );
};

export default SignUpForm;
