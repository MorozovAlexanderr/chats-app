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
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
};

const Form = <TFormValues extends Record<string, unknown>>({
  options,
  onSubmit,
  children,
}: FormProps<TFormValues>) => {
  const methods = useForm(options);
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
      {children(methods)}
    </form>
  );
};

export default Form;
