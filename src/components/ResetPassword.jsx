import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { server } from "../server";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("Passwords don't match!");
    }
    setLoading(true);
    try {
      const res = await axios.put(`${server}/user/reset-password/${token}`, { password });
      toast.success(res.data.message);
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Link expired or invalid");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0f]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600 rounded-full opacity-10 blur-[120px] animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-500 rounded-full opacity-10 blur-[120px] animate-pulse" />
      </div>

      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="relative bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-[0_32px_64px_rgba(0,0,0,0.4)]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent rounded-t-3xl" />

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
              <p className="text-white font-semibold text-sm leading-tight">Reset Password</p>
              <p className="text-zinc-500 text-[11px] leading-tight mt-0.5">Enter your new password</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* New Password */}
            <div className="group">
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">New Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type={visible ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min. 4 characters"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-zinc-600 rounded-xl pl-11 pr-12 py-3 text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all duration-200"
                />
                <button type="button" className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-500 hover:text-blue-400" onClick={() => setVisible(!visible)}>
                  {visible ? <AiOutlineEye size={18} /> : <AiOutlineEyeInvisible size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="group">
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type={visible ? "text" : "password"}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter password"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-zinc-600 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all duration-200"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="relative w-full py-3 px-6 rounded-xl font-bold text-sm text-white overflow-hidden group disabled:opacity-70"
              style={{ background: "linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)", boxShadow: "0 0 30px rgba(37,99,235,0.4)" }}
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <span className="relative flex items-center justify-center gap-2">
                {loading ? "Resetting..." : "Reset Password →"}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;