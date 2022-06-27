import { useState } from 'react';
import { signUp } from './services/fetch-utils';

export default function AuthPage({ setUser }) {
  const [error, setError] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  async function handleSignUpSubmit(e) {
    e.preventDefault();

    try {
      const user = await signUp(signUpEmail, signUpPassword);
      setUser(user);
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <div>
      <h3>Secret is Sacred</h3>
      <h1 className="error">{error}</h1>
      <form onSubmit={handleSignUpSubmit}>
        <p>Sign Up!</p>
        <label>
          email
          <input
            onChange={(e) => setSignUpEmail(e.target.value)}
            value={signUpEmail}
            type="email"
          />
        </label>
        <label>
          password
          <input
            onChange={(e) => setSignUpPassword(e.target.value)}
            value={signUpPassword}
            type="password"
          />
        </label>
        <button>Sign Up</button>
      </form>
    </div>
  );
}
