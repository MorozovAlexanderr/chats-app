import {
  FieldValues,
  SubmitHandler,
  UseFormProps,
  UseFormReturn,
  useForm,
} from 'react-hook-form';

type FormProps<TFormValues extends FieldValues> = {
  options?: UseFormProps<TFormValues>;
  onSubmit: SubmitHandler<TFormValues>;
  className?: string;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
};

const Form = <TFormValues extends Record<string, unknown>>({
  options,
  onSubmit,
  children,
  ...props
}: FormProps<TFormValues>) => {
  const methods = useForm(options);
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} {...props}>
      {children(methods)}
    </form>
  );
};

export default Form;
