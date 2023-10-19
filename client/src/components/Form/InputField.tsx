import classNames from 'classnames';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type InputFieldProps = {
  type?: 'text' | 'email' | 'password';
  label: string;
  className?: string;
  error?: FieldError | undefined;
  registration: Partial<UseFormRegisterReturn>;
};

const InputField = ({
  type,
  label,
  className,
  error,
  registration,
}: InputFieldProps) => {
  console.log(error?.message);
  return (
    <div>
      <label>
        {label}
        <div className="mt-1">
          <input
            type={type}
            className={classNames(
              'placeholder-gray-00 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none',
              className
            )}
            {...registration}
          />
        </div>
      </label>
      {error?.message && (
        <div
          role="alert"
          aria-label={error.message}
          className="mt-1 text-sm font-medium text-red-500"
        >
          {error.message}
        </div>
      )}
    </div>
  );
};

export default InputField;
