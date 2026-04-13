import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { server } from "../server";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${server}/user/forgot-password`, { email });
      toast.success(res.data.message);
      setSent(true);
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden"
     style={{
    backgroundImage: `url("/images/uni.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}>
      
{/* Background Overlay - Isay halka rakha hai taake building nazar aaye */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 w-full max-w-md mx-4">

        <div className="relative backdrop-blur-[5px] bg-white/[0.01] border-[1.5px] border-white/20 rounded-[40px] p-8 shadow-2xl">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent rounded-t-3xl" />

          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-[52px] h-[52px] rounded-[12px] border border-cyan-400/40 flex items-center justify-center overflow-hidden shrink-0 bg-white/[0.04]">
              <img src="/images/my.png" alt="Back2U Logo" className="w-full h-full object-contain scale-110" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[22px] font-extrabold tracking-wide text-white leading-none">
                BACK<span className="text-cyan-400">2U</span>
              </span>
              <span className="text-[9px] text-gray-400 tracking-[0.3em] uppercase mt-0.5">Lost &amp; Found System</span>
            </div>
            <div className="h-10 w-px bg-white/10 mx-1 shrink-0" />
            <div>
              <p className="text-white font-semibold text-sm leading-tight">Forgot Password</p>
              <p className="text-gray-400 text-[11px] leading-tight mt-0.5">We'll send a reset link</p>
            </div>
          </div>

          {sent ? (
            // Success state
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-white font-semibold mb-1">Check your email!</p>
              <p className="text-white text-sm mb-6">Reset link sent to <span className="text-cyan-400">{email}</span></p>
              <Link to="/login" className="text-blue-400 text-sm font-semibold hover:text-cyan-400 transition-colors">
                ← Back to Login
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="group">
                <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-zinc-500 group-focus-within:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-transparent border border-white/30 text-white placeholder-gray-400 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-cyan-400/60 transition-all duration-200"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="relative w-full py-3 px-6 rounded-xl font-bold text-sm text-white overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ background: "linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)", boxShadow: "0 0 30px rgba(37,99,235,0.4)" }}
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <span className="relative flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : "Send Reset Link →"}
                </span>
              </button>

              <div className="text-center pt-1">
                <Link to="/login" className="text-white text-sm hover:text-cyan-500 transition-colors">
                  ← Back to Login
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;