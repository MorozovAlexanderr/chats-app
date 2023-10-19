import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@/components/Elements/Button';
import { Form, InputField } from '@/components/Form';
import { Link } from 'react-router-dom';

type LoginValues = {
  email: string;
  password: string;
};

const validationSchema = yup.object({
  email: yup.string().email().required('Required'),
  password: yup.string().required('Required'),
});

const SignInForm = () => {
  const handleSubmit = (values: unknown) => {
    console.log('submited', values);
  };

  return (
    <Form<LoginValues>
      onSubmit={handleSubmit}
      options={{ resolver: yupResolver(validationSchema) }}
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
          <p className="text-sm">
            Don't have an account?{' '}
            <Link to="/register" className="text-secondary hover:text-primary">
              Sign Up
            </Link>
          </p>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </>
      )}
    </Form>
  );
};

export default SignInForm;
