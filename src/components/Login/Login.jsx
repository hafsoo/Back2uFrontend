import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { server } from "../../server.js";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios
        .post(
          `${server}/user/login-user`,
          { email, password },
          { withCredentials: true }
        )
        .then((res) => {
          toast.success("Login Successful");
          navigate("/");
          window.location.reload(true);
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0f]">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600 rounded-full opacity-10 blur-[120px] animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-500 rounded-full opacity-10 blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500 rounded-full opacity-5 blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-bounce"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${2 + i * 0.5}s`,
          }}
        />
      ))}

      <div className="relative z-10 w-full max-w-md mx-4">
        {/* Logo / Brand */}
        

        {/* Card */}
        <div className="relative bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-[0_32px_64px_rgba(0,0,0,0.4)]">
          {/* Inner glow top border */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent rounded-t-3xl" />
  {/* ── HEADER: logo | brand text | divider | page label ── */}
          <div className="flex items-center gap-3 mb-5">

            {/* Logo image box */}
            <div className="w-[52px] h-[52px] rounded-[12px] border border-cyan-400/40 flex items-center justify-center overflow-hidden shrink-0 bg-white/[0.04] hover:border-cyan-400/70 transition-all duration-300">
              <img
                src="/images/my.png"
                alt="Back2U Logo"
                className="w-full h-full object-contain scale-110"
              />
            </div>

            {/* Brand text */}
            <div className="flex flex-col leading-tight">
              <span className="text-[22px] font-extrabold tracking-wide text-white leading-none">
                BACK
                <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
                  2U
                </span>
              </span>
              <span className="text-[9px] text-gray-400 tracking-[0.3em] uppercase mt-0.5">
                Lost &amp; Found System
              </span>
            </div>

            {/* Vertical divider */}
            <div className="h-10 w-px bg-white/10 mx-1 shrink-0" />

            {/* Page label */}
            <div>
                     <p className="text-white font-semibold text-sm leading-tight">Welcome Back</p>
          <p className="text-zinc-500 text-[11px] leading-tight mt-0.5">Sign in to continue your search</p>
            </div>
          </div>

          

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="group">
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
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
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-zinc-600 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-blue-500/60 focus:bg-white/8 focus:ring-1 focus:ring-blue-500/30 transition-all duration-200"
                />
              </div>
            </div>

            {/* Password */}
            <div className="group">
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-zinc-500 group-focus-within:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type={visible ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-zinc-600 rounded-xl pl-11 pr-12 py-3 text-sm focus:outline-none focus:border-blue-500/60 focus:bg-white/8 focus:ring-1 focus:ring-blue-500/30 transition-all duration-200"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-500 hover:text-blue-400 transition-colors"
                  onClick={() => setVisible(!visible)}
                >
                  {visible ? <AiOutlineEye size={18} /> : <AiOutlineEyeInvisible size={18} />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-4 h-4 border border-white/20 rounded bg-white/5 peer-checked:bg-blue-500 peer-checked:border-blue-500 transition-all" />
                  <svg className="absolute top-0.5 left-0.5 w-3 h-3 text-white hidden peer-checked:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-xs text-zinc-400">Remember me</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="relative w-full py-3 px-6 rounded-xl font-bold text-sm text-white overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)",
                boxShadow: "0 0 30px rgba(37,99,235,0.4)",
              }}
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <span className="relative flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Signing in...
                  </>
                ) : (
                  <>
                    Login Now
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </span>
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t border-white/[0.06] text-center">
            <p className="text-zinc-500 text-sm">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-blue-400 font-semibold hover:text-cyan-400 transition-colors"
              >
                Create one free →
              </Link>
            </p>
          </div>
        </div>

        {/* Bottom text */}
        <p className="text-center text-zinc-700 text-xs mt-6">
          © 2024 Back2U · University Lost & Found
        </p>
      </div>
    </div>
  );
};

export default Login;


/*
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles.js";
import { Link, useNavigate } from "react-router-dom";
import { server } from "../../server.js";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(
          `${server}/user/login-user`,
          { email, password },
          { withCredentials: true }
        )
        .then((res) => {
          toast.success("Login Successful");
          navigate("/");
          window.location.reload(true);
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center py-12 px-3 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
      style={{
       backgroundImage: `url("/images/uni.png")`,
      }}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white bg-opacity-90 p-8 rounded-2xl shadow-lg">
        <h2 className="text-center text-2xl font-extrabold text-gray-900">
          Welcome to Back2U
        </h2>

        <div className="mt-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>

            <div className={`${styles.normalFlex} justify-between`}>
              <div className={`${styles.normalFlex}`}>
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember Me
                </label>
              </div>
           
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Login Now
              </button>
            </div>

            <div className={`${styles.normalFlex} w-full`}>
              <h4>Not have any account?</h4>
              <Link to="/signup" className="text-blue-600 pl-2">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
*/