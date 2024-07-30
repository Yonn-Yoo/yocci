import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '../components/svg/icon/GoogleIcon';
import { useAuthContext } from '../contexts/auth-context';
import { emailRegex } from '../regex';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const { user, handleLogin } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/');
  }, [user, navigate]);

  return (
    <div className="mx-auto flex w-full max-w-xs flex-col items-center pt-12">
      <h1 className="text-3xl font-light uppercase">my gucci account</h1>
      <div className="mt-10 w-full space-y-6">
        <div
          onClick={handleLogin}
          className="flex w-full justify-center space-x-2 border-2 border-black py-2 hover:bg-gray-100 cursor-pointer"
        >
          <GoogleIcon />
          <p className="font-bold uppercase tracking-wide">
            continue with google
          </p>
        </div>
      </div>
      <span className="my-6">OR</span>
      <div className="space-y-8">
        <p className="text-center text-xl uppercase">
          continue with your email address
        </p>
        <p className="text-center">
          Sign in with your GUCCI account or create a profile if you are new.
        </p>
        <form action="submit" className="space-y-8">
          <div className="relative z-0 w-full">
            <input
              className="peer block w-full appearance-none bg-transparent px-2 pb-3 pt-3.5 text-base border border-black text-gray-900 focus:border-gray-800 focus:outline-black disabled:bg-gray-300"
              placeholder=" "
              required
              id="email"
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label
              htmlFor="email"
              className="absolute left-1 bg-white px-2 top-3.5 z-10 origin-[0] -translate-y-4 scale-[60%] transform text-base text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-gray-600"
            >
              EMAIL*
            </label>
          </div>
          <button
            className="px-8 py-4 font-bold uppercase disabled:cursor-not-allowed disabled:bg-gray-300 tracking-wide bg-black text-white transition-opacity hover:opacity-80 disabled:hover:opacity-100 w-full text-sm"
            disabled={!emailRegex.test(email)}
          >
            continue
          </button>
        </form>
      </div>
    </div>
  );
}
