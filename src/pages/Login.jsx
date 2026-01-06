import { Link } from 'react-router-dom';
import { AuthHero } from '../components/Auth/AuthHero';
import { Input } from '../components/UI/Input';

export default function Login() {
  return (
    <div className="flex min-h-screen bg-dark-bg text-white">
      {/* Visual Hero Side */}
      <AuthHero image="/public/images/female-model-white-tshirt_979387-24.jpg" />
      
      {/* Form Side */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-24 lg:px-32 py-12">
        <div className="max-w-md w-full mx-auto space-y-10">
          {/* Logo with Glow */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-purple rounded-full shadow-[0_0_20px_rgba(139,92,246,0.6)]" />
            <span className="font-bold text-xl tracking-tight">AI Stylist</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tight">Welcome Back</h2>
            <p className="text-sm text-gray-400">
              Continue style journey. 
              <Link to="/register" className="text-brand-purple hover:text-purple-400 ml-1 transition-colors">
                Create an account
              </Link>
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <Input label="Email address" placeholder="name@example.com" type="email" />
            
            <div className="space-y-3">
              <Input label="Password" placeholder="Enter your password" type="password" />
              <button type="button" className="text-brand-purple text-sm font-medium hover:underline">
                Forgot Password ?
              </button>
            </div>
            
            <button className="w-full bg-brand-purple hover:bg-purple-600 py-4 rounded-xl font-bold text-lg transition-all shadow-lg active:scale-[0.99]">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}