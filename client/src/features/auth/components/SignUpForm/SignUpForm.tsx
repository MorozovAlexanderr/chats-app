import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, InputField } from '@/components/Form';
import Button from '@/components/Elements/Button';

type RegisterValues = {
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
  const handleSubmit = (values: unknown) => {
    console.log('submited', values);
  };

  return (
    <Form<RegisterValues>
      onSubmit={handleSubmit}
      options={{ resolver: yupResolver(validationSchema) }}
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
          <p className="text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-secondary hover:text-primary">
              Sign In
            </Link>
          </p>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </>
      )}
    </Form>
  );
};

export default SignUpForm;
