// import { GoogleButton } from '@astro-auth/ui';
import { signIn } from '@astro-auth/client';

const Login = () => {
  return (
    <div>
      code
      <div>
        <button
          onClick={() => {
            signIn({
              // callbackURL: '/products',
              provider: 'google',
            });
          }}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
