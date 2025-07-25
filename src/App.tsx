import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Onboarding from './components/Onboarding';
import Confirmation from './components/Confirmation';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}
