import { useState } from 'react';
import { signUp, signIn } from './services/fetch-utils';

export default function AuthPage({ setUser }) {
  const [error, setError] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  async function handleSignUpSubmit(e) {
    e.preventDefault();

    try {
      const user = await signUp(signUpEmail, signUpPassword);
      setUser(user);
    } catch (e) {
      setError(e.message);
    }
  }

  async function handleSignInSubmit(e) {
    e.preventDefault();

    try {
      const user = await signIn(signInEmail, signInPassword);
      setUser(user);
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <div>
      <h3>Secret is Sacred</h3>
      <h5>Making Space for Important Things</h5>
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

      <form onSubmit={handleSignInSubmit}>
        <p>Sign In!</p>
        <label>
          email
          <input
            onChange={(e) => setSignInEmail(e.target.value)}
            value={signInEmail}
            type="email"
          />
        </label>
        <label>
          password
          <input
            onChange={(e) => setSignInPassword(e.target.value)}
            value={signInPassword}
            type="password"
          />
        </label>
        <button>Sign In</button>
      </form>

    </div>
  );
}
