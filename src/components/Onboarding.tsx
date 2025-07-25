import { useForm, Controller } from 'react-hook-form';
import FormInput from './FormInput';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_ENDPOINT!;

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
};

export default function Onboarding() {
  const params = new URLSearchParams(window.location.search);
  const token = params.get('x-amzn-marketplace-token') ?? '';
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { email: '', firstName: '', lastName: '' },
  });

  const onSubmit = async (data: FormData) => {
    const { firstName, lastName, email } = data;

    const res = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        regToken: token,
        firstName,
        lastName,
        email,
      }),
    });

    // navigate(`/confirmation?email=${encodeURIComponent(email)}`);

    if (res.ok) {
      // pass the submitted email as a query param
      navigate(`/confirmation?email=${encodeURIComponent(email)}`);
    } else {
      // TODO: show an error toast or inline message
      console.error('Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white">
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="Logo" className="h-22 w-22" />
        </div>
        <h1 className="text-2xl font-semibold text-gray-900 text-center mb-8">
          Sign up to Fax Ingestion Service
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email address',
              },
            }}
            render={({ field }) => (
              <FormInput
                label="Email address"
                name={field.name}
                type="email"
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                error={errors.email?.message}
              />
            )}
          />

          <Controller
            name="firstName"
            control={control}
            rules={{ required: 'First name is required' }}
            render={({ field }) => (
              <FormInput
                label="First Name"
                name={field.name}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                error={errors.firstName?.message}
              />
            )}
          />

          <Controller
            name="lastName"
            control={control}
            rules={{ required: 'Last name is required' }}
            render={({ field }) => (
              <FormInput
                label="Last Name"
                name={field.name}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                error={errors.lastName?.message}
              />
            )}
          />

          <button
            type="submit"
            className="w-full py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition cursor-pointer"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
