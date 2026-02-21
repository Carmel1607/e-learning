import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { motion } from 'motion/react';

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image & Branding */}
      <div className="hidden lg:flex w-1/2 bg-primary relative overflow-hidden">
        <img 
          src="https://picsum.photos/seed/elearning/1000/1000" 
          alt="Login background" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
        />
        <div className="relative z-10 p-16 flex flex-col justify-end h-full text-white">
          <h1 className="text-2xl font-bold italic mb-8">e-learning</h1>
          <h2 className="text-5xl font-bold leading-tight mb-6">Improve your skill with Coursea!</h2>
          <p className="text-lg opacity-80 max-w-md">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="mb-10">
            <h3 className="text-3xl font-bold text-slate-900 mb-2">Sign In</h3>
            <p className="text-slate-500">New user? <Link to="/register" className="text-primary font-semibold hover:underline">Create an account</Link></p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="email" 
                  placeholder="nedusch@gmail.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Enter your password"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <div className="text-right mt-2">
                <Link to="/forgot-password" size="sm" className="text-sm text-slate-500 hover:text-primary transition-colors">Forgot password?</Link>
              </div>
            </div>

            <button className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 hover:bg-primary-dark transition-all transform active:scale-[0.98]">
              Sign In
            </button>

            <div className="relative flex items-center py-4">
              <div className="flex-grow border-t border-slate-200"></div>
              <span className="flex-shrink mx-4 text-slate-400 text-sm">or</span>
              <div className="flex-grow border-t border-slate-200"></div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <button type="button" className="flex items-center justify-center gap-3 w-full border border-slate-200 py-3 rounded-xl hover:bg-slate-50 transition-all">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="google" className="w-5 h-5" />
                <span className="font-semibold text-slate-700">Sign In With Google</span>
              </button>
              <button type="button" className="flex items-center justify-center gap-3 w-full border border-slate-200 py-3 rounded-xl hover:bg-slate-50 transition-all">
                <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="facebook" className="w-5 h-5" />
                <span className="font-semibold text-slate-700">Sign In With Facebook</span>
              </button>
            </div>
          </form>

          <p className="text-center text-xs text-slate-400 mt-10 leading-relaxed">
            Protected by reCAPTCHA and subject to the Google <Link to="#" className="text-primary hover:underline">Privacy Policy</Link> and <Link to="#" className="text-primary hover:underline">Terms of Service</Link>.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
