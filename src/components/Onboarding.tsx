import { useEffect, useState } from 'react';
import FormInput from './FormInput.tsx';

export default function Onboarding() {
  const [email, setEmail] = useState('');

  const [params, setParams] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const allParams: { [key: string]: string } = {};
    searchParams.forEach((value, key) => {
      allParams[key] = value;
    });
    setParams(allParams);
  }, []);

  return (
    <div>
      {/* Display all URL params */}
      <div className="mb-4 text-sm text-gray-700">
        <h2 className="font-semibold mb-1">URL Parameters:</h2>
        <ul className="list-disc pl-5">
          {Object.entries(params).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl ring-2 ring-indigo-600 lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-indigo-700 uppercase mb-2">
            Sign UP
          </h1>
          <p>Please enter your contact details</p>
          <FormInput
            label="Email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <button
            disabled={false}
            className="w-full mt-2 px-4 py-2 disabled:opacity-30 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Launch
          </button>
        </div>
      </div>
    </div>
  );
}
