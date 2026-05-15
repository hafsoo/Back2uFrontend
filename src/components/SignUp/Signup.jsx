
import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileInputChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${server}/user/create-user`, { name, email, password, avatar })
      .then((res) => {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setPassword("");
        setAvatar(null);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      })
      .finally(() => setLoading(false));
  };

  const strengthLevel = (pw) => {
    if (!pw) return 0;
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    return score;
  };

  const strength = strengthLevel(password);
  const strengthLabels = ["", "Weak", "Fair", "Good", "Strong"];
  const strengthColors = ["", "bg-red-500", "bg-yellow-500", "bg-blue-400", "bg-emerald-400"];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-10"  style={{
    backgroundImage: `url("/images/uni.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}>
    {/* Background Overlay - Isay halka rakha hai taake building nazar aaye */}
      <div className="absolute inset-0 bg-black/30"></div>

     

      <div className="relative z-10 w-full max-w-md mx-4">
       

        {/* Card */}
        {/* bg-white/[0.01] aur backdrop-blur-sm se bilkul pehli image jaisa transparency aayega */}
        <div className="relative bg-white/[0.01] backdrop-blur-[5px] border-[1.5px] border-white/20 rounded-[40px] p-8 shadow-2xl">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent rounded-t-3xl" />

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
              <span className="text-[9px] text-white tracking-[0.3em] uppercase mt-0.5">
                Lost &amp; Found System
              </span>
            </div>

            {/* Vertical divider */}
            <div className="h-10 w-px bg-white/30 mx-1 shrink-0" />

            {/* Page label */}
            <div>
              <p className="text-white font-semibold text-sm leading-tight">Create new Account</p>
              <p className="text-gray-700 text-[11px] leading-tight mt-0.5">Help reunite lost items</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Avatar Upload */}
            <div className="flex items-center gap-4">
              <div className="relative shrink-0">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/5 border-2 border-dashed border-white/20 flex items-center justify-center">
                  {avatar ? (
                    <img src={avatar} alt="avatar" className="w-full h-full object-cover" />
                  ) : (
                    <RxAvatar className="w-7 h-7 text-zinc-500" />
                  )}
                </div>
                {avatar && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-[#0a0a0f]" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-white uppercase tracking-wider mb-1.5">Profile Photo</p>
                <label
                  htmlFor="file-input"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-medium text-zinc-300 hover:bg-white/10 hover:border-white/20 cursor-pointer transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {avatar ? "Change photo" : "Upload photo"}
                  <input
                    type="file"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileInputChange}
                    className="sr-only"
                  />
                </label>
                <p className="text-gray-400 text-[10px] mt-1">JPG, PNG · optional</p>
              </div>
            </div>

            {/* Full Name */}
            <div className="group">
              <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-zinc-500 group-focus-within:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  autoComplete="name"
                  className="w-full bg-transparent border border-white/30 text-white placeholder-gray-400 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-cyan-400/60 transition-all duration-200"
                />
              </div>
            </div>

            {/* Email */}
            <div className="group">
              <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-zinc-500 group-focus-within:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                   className="w-full bg-transparent border border-white/30 text-white placeholder-gray-400 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-cyan-400/60 transition-all duration-200"
                  //className="w-full bg-white/5 border border-white/10 text-white placeholder-zinc-600 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-white/8 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200"
                />
              </div>
            </div>

            {/* Password */}
            <div className="group">
              <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-zinc-500 group-focus-within:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type={visible ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min. 8 characters"
                  autoComplete="new-password"
                   className="w-full bg-transparent border border-white/30 text-white placeholder-gray-400 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-cyan-400/60 transition-all duration-200"
                  //className="w-full bg-white/5 border border-white/10 text-white placeholder-zinc-600 rounded-xl pl-11 pr-12 py-3 text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-white/8 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-white hover:text-indigo-400 transition-colors"
                  onClick={() => setVisible(!visible)}
                >
                  {visible ? <AiOutlineEye size={18} /> : <AiOutlineEyeInvisible size={18} />}
                </button>
              </div>

              {/* Password strength bar */}
              {password && (
                <div className="mt-2.5">
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                          strength >= level ? strengthColors[strength] : "bg-white/10"
                        }`}
                      />
                    ))}
                  </div>
                  <p className={`text-[10px] font-medium ${
                    strength === 1 ? "text-red-400" :
                    strength === 2 ? "text-yellow-400" :
                    strength === 3 ? "text-blue-400" : "text-emerald-400"
                  }`}>
                    {strengthLabels[strength]} password
                  </p>
                </div>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="relative w-full py-3 px-6 rounded-xl font-bold text-sm text-white overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 mt-2"
              style={{
                background: "linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)",
                boxShadow: "0 0 30px rgba(79,70,229,0.4)",
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
                    Creating account...
                  </>
                ) : (
                  <>
                    Register Now
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
            <p className="text-white text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-indigo-400 font-semibold hover:text-cyan-400 transition-colors">
                Sign in →
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center text-white text-xs mt-6">
          © 2024 Back2U · University Lost & Found
        </p>
      </div>
    </div>
  );
};

export default Signup;



/*
import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

const Singup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);

 

  const handleFileInputChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(`${server}/user/create-user`, { name, email, password, avatar })
      .then((res) => {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setPassword("");
        setAvatar(null);

      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div
     className="min-h-screen bg-cover bg-center flex flex-col justify-center py-12 px-3 sm:px-6 lg:px-8 relative"
      style={{
        backgroundImage: `url("/images/uni.png")`, // <-- your university image here
      }}
    >

      <div className="absolute inset-0 bg-black/30"></div>

      

      <div 
      className="relative z-10 mt-8 sm:mx-auto sm:w-full sm:max-w-md "
      >
        <div className="bg-white bg-opacity-95 py-8 px-4 shadow-xl sm:rounded-lg sm:px-10 rounded-2xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative z-10 sm:mx-auto sm:w-full sm:max-w-md ">
        <h2 
        className="mt-6 text-center text-xl font-extrabold text-black drop-shadow-md"
        >
         Create Your Back2U Account
        </h2>
         
      </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="text"
                  autoComplete="name"
                  placeholder="John Doe"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="JohnDoe@gmail.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}

                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                  placeholder="**********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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

            <div>
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              >Profile Picture</label>
              <div className="mt-2 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                      src={avatar}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <RxAvatar className="h-8 w-8" />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <span>Upload a file</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileInputChange}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Register Now
              </button>
            </div>
            <div className={`${styles.noramlFlex} w-full`}>
              <h4>Already have an account?</h4>
              <Link to="/login" className="text-blue-600 pl-2">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Singup;
*/