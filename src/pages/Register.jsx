import { Link } from 'react-router-dom';
import { AuthHero } from '../components/Auth/AuthHero';
import { Input } from '../components/UI/Input';

export default function Register() {
  return (
    <div className="flex min-h-screen bg-dark-bg text-white">
      {/* Visual Hero Side */}
      <AuthHero image="/images/signup-hero.jpg" />
      
      {/* Form Side */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-24 lg:px-32 py-12">
        <div className="max-w-md w-full mx-auto space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-purple rounded-full shadow-[0_0_20px_rgba(139,92,246,0.6)]" />
            <span className="font-bold text-xl tracking-tight">AI Stylist</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tight">Create your account</h2>
            <p className="text-sm text-gray-400">Start your style journey today.</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <Input label="Email address" placeholder="name@example.com" type="email" />
            <Input label="Password" placeholder="Enter your password" type="password" />
            <Input label="Confirm Password" placeholder="Confirm your password" type="password" />
            
            <div className="flex items-center gap-3 py-2">
              <input type="checkbox" className="w-5 h-5 accent-brand-purple rounded border-gray-700 bg-input-bg cursor-pointer" />
              <p className="text-xs text-gray-400 leading-tight">
                I consent to the <span className="text-brand-purple underline cursor-pointer">Terms of service</span> and <span className="text-brand-purple underline cursor-pointer">Private policy</span>.
              </p>
            </div>

            <button className="w-full bg-brand-purple hover:bg-purple-600 py-4 rounded-xl font-bold text-lg transition-all active:scale-[0.99]">
              Create Account
            </button>
            
            <p className="text-center text-gray-400 text-sm">
              Already a member? 
              <Link to="/login" className="text-brand-purple font-semibold hover:underline ml-1">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}