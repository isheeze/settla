
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SettlaLogo } from './Logo';

interface AuthModalProps {
  isOpen: boolean;
  mode: 'login' | 'signup';
  onClose: () => void;
  setMode: (mode: 'login' | 'signup') => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, mode, onClose, setMode }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-indigo-950/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
          >
            {/* Left Column (Logo & Branding) */}
            <div className="hidden md:flex w-2/5 bg-indigo-900 text-white p-10 flex-col justify-between relative overflow-hidden">
              {/* Abstract decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-indigo-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-indigo-600 rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10">
                <SettlaLogo className="h-10 w-auto text-indigo-400 mb-10" />
                <h2 className="text-3xl font-black tracking-tighter leading-none mb-4">
                  {mode === 'login' ? 'Welcome back to Settla.' : 'The future of finance is here.'}
                </h2>
                <p className="text-indigo-200/60 font-medium text-base max-w-xs leading-relaxed">
                  Join millions of users moving money freely across 170+ territories.
                </p>
              </div>

              <div className="relative z-10">
                <p className="text-[10px] font-black uppercase tracking-widest text-indigo-400">© Settla Global 2025</p>
              </div>
            </div>

            {/* Right Column (Form) */}
            <div className="flex-1 p-8 md:p-10 relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-900 hover:bg-indigo-100 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="max-w-xs mx-auto">
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-black text-indigo-950 tracking-tight mb-2">
                    {mode === 'login' ? 'Login' : 'Create Account'}
                  </h3>
                  <p className="text-indigo-900/40 font-medium text-xs">
                    Enter your details to access your global account.
                  </p>
                </div>

                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  {mode === 'signup' && (
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-300">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full bg-slate-50 border border-indigo-50 rounded-xl pl-10 pr-4 py-3 text-sm text-indigo-950 outline-none focus:border-indigo-600 focus:bg-white transition-all font-medium"
                      />
                    </div>
                  )}

                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-300">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-slate-50 border border-indigo-50 rounded-xl pl-10 pr-4 py-3 text-sm text-indigo-950 outline-none focus:border-indigo-600 focus:bg-white transition-all font-medium"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-300">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full bg-slate-50 border border-indigo-50 rounded-xl pl-10 pr-4 py-3 text-sm text-indigo-950 outline-none focus:border-indigo-600 focus:bg-white transition-all font-medium"
                    />
                  </div>

                  <div className="flex items-center justify-between px-1 pt-1">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="w-3.5 h-3.5 rounded border-indigo-200 text-indigo-600 focus:ring-indigo-600" />
                      <span className="text-[10px] font-bold text-indigo-900/60 group-hover:text-indigo-600 transition-colors">Remember me</span>
                    </label>
                    <a href="#" className="text-[10px] font-bold text-indigo-600 hover:underline">Forgot password?</a>
                  </div>

                  <button className="w-full bg-indigo-600 text-white py-3.5 rounded-xl font-bold text-base shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-[0.98] mt-2">
                    {mode === 'login' ? 'Login' : 'Sign Up'}
                  </button>
                </form>

                <div className="relative my-10 text-center">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-indigo-50"></div>
                  </div>
                  <span className="relative bg-white px-4 text-[10px] font-black uppercase tracking-widest text-indigo-300">Or continue with</span>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {/* Google Button */}
                  <button className="flex items-center justify-center gap-4 w-full border border-indigo-50 bg-slate-50 py-3 rounded-2xl hover:bg-white hover:border-indigo-100 hover:shadow-md transition-all group">
                    <svg viewBox="0 0 48 48" className="w-5 h-5 flex-shrink-0">
                      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                    </svg>
                    <span className="text-sm font-bold text-indigo-950">Continue with Google</span>
                  </button>

                  {/* Apple Button */}
                  <button className="flex items-center justify-center gap-4 w-full border border-indigo-50 bg-slate-50 py-3 rounded-2xl hover:bg-white hover:border-indigo-100 hover:shadow-md transition-all group">
                    <svg viewBox="0 0 384 512" className="w-5 h-5 flex-shrink-0" fill="currentColor">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>
                    <span className="text-sm font-bold text-indigo-950">Continue with Apple</span>
                  </button>

                  {/* Facebook Button */}
                  <button className="flex items-center justify-center gap-4 w-full border border-indigo-50 bg-slate-50 py-3 rounded-2xl hover:bg-white hover:border-indigo-100 hover:shadow-md transition-all group">
                    <svg viewBox="0 0 512 512" className="w-5 h-5 flex-shrink-0">
                      <path fill="#1877F2" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.38 19.12-40.38 38.73V256h68.75l-11 71.69h-57.75V501C413.31 482.38 504 379.78 504 256z" />
                    </svg>
                    <span className="text-sm font-bold text-indigo-950">Continue with Facebook</span>
                  </button>
                </div>

                <div className="mt-10 text-center">
                  <p className="text-sm font-medium text-indigo-900/40">
                    {mode === 'login' ? "Don't have an account?" : "Already have an account?"}{' '}
                    <button
                      onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                      className="text-indigo-600 font-black hover:underline"
                    >
                      {mode === 'login' ? 'Sign Up' : 'Login'}
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
