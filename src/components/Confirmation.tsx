import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Confirmation() {
  const [search] = useSearchParams();
  const email = search.get('email') ?? '';
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 ">
      <div className="w-full max-w-md bg-white p-8 text-center space-y-6">
        <img src="/logo.png" alt="Logo" className="h-12 w-12 mx-auto" />
        <h2 className="text-xl font-semibold">Please check your email</h2>
        <p className="text-gray-600">
          We’ve sent an email link to <strong>{email}</strong> with instructions
          on how to start.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
        >
          Back
        </button>
      </div>
    </div>
  );
}
