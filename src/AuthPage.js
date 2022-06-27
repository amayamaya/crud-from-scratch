import { useState } from 'react';
import { signUp } from './services/fetch-utils';

export default function AuthPage({ setUser }) {
  const [error, setError] = useState('');
  const [sighnUpEmail, setSignUpEmail] = useState('');
  const [sighnUpPassword, setSignUpPassword] = useState('');

  return (
    <div>
      <h3>Secret is Sacred</h3>
      <h1>{error}</h1>
    </div>
  );
}
