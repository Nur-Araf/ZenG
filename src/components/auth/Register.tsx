import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { gsap } from "gsap";
import { Link, useNavigate } from "react-router-dom";
import AuthBenefits from "./AuthBenefit";
import { useAuthStore } from "../../store/authStore";
import { api } from "../../store/interceptor";
import { toast } from "react-toastify";
interface FormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface PasswordStrength {
  score: number;
  label: string;
}

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();
  const password = watch("password", "");
  const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>({
    score: 0,
    label: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const { setAuthenticated, setRefreshToken } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      ".form-container",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  // Particle animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      const particleContainer = containerRef.current;
      if (!particleContainer) return;

      for (let i = 0; i < 60; i++) {
        const particle = document.createElement("div");
        particle.className =
          "absolute w-1.5 h-1.5 bg-blue-400 rounded-full opacity-40";
        particleContainer.appendChild(particle);

        gsap.set(particle, {
          x: Math.random() * particleContainer.offsetWidth,
          y: Math.random() * particleContainer.offsetHeight,
          scale: Math.random() * 0.6 + 0.4,
        });

        gsap.to(particle, {
          x: "+=random(-100, 100)",
          y: "+=random(-100, 100)",
          opacity: Math.random() * 0.4 + 0.2,
          scale: Math.random() * 0.7 + 0.3,
          duration: Math.random() * 5 + 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, 100);

    return () => {
      clearTimeout(timeout);
      gsap.killTweensOf("*");
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  useEffect(() => {
    const calculatePasswordStrength = (pwd: string): PasswordStrength => {
      let score = 0;
      if (pwd.length >= 8) score += 1;
      if (/[A-Z]/.test(pwd)) score += 1;
      if (/[a-z]/.test(pwd)) score += 1;
      if (/[0-9]/.test(pwd)) score += 1;
      if (/[^A-Za-z0-9]/.test(pwd)) score += 1;

      let label = "";
      switch (score) {
        case 0:
        case 1:
          label = "Very Weak";
          break;
        case 2:
          label = "Weak";
          break;
        case 3:
          label = "Fair";
          break;
        case 4:
          label = "Good";
          break;
        case 5:
          label = "Strong";
          break;
        default:
          label = "";
      }

      return { score, label };
    };

    if (password) {
      setPasswordStrength(calculatePasswordStrength(password));
    } else {
      setPasswordStrength({ score: 0, label: "" });
    }
  }, [password]);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      console.log("Sending registration data:", data); // Log request data
      const response = await api.post("/register", {
        name: data.name,
        email: data.email,
        password: data.password,
      });
      console.log("Registration response:", response.data);
      setAuthenticated(true);
      setRefreshToken(response.data.refresh_token);
      localStorage.setItem("refreshToken", response.data.refresh_token);
      console.log("Registration successful:", response.data.refresh_token);
      toast.success("Registration successful!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google login initiated");
    // Google OAuth logic
  };

  return (
    <div className="py-20 md:py-24 bg-gradient-to-t from-gray-200 to-white flex items-center justify-center overflow-hidden p-4 min-h-[100dvh]">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8">
        {/* AuthBenefits Component */}
        <div className="hidden lg:block w-full lg:w-1/2">
          <AuthBenefits />
        </div>

        {/* Signup Card */}
        <div className="form-container relative max-w-md w-full mx-auto p-8 rounded-2xl bg-[#0A0F2C] shadow-2xl lg:w-1/2 lg:mx-0">
          <div
            ref={containerRef}
            className="absolute inset-0 z-0 pointer-events-none"
          />
          <div className="z-0 absolute -left-[20%] top-[10%] h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] translate-x-1/4 rounded-full opacity-30 blur-[150px] bg-[#6C63FF]" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-center mb-6 text-white">
              <span
                className="bg-clip-text text-transparent font-extrabold"
                style={{
                  backgroundImage: "linear-gradient(90deg, #1DA1F2, #6C63FF)",
                }}
              >
                ZenG
              </span>{" "}
              Signup
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white">
                  Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent bg-white/10 text-white placeholder-white/50"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-300">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/, message: "Invalid email" },
                  })}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent bg-white/10 text-white placeholder-white/50"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-300">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent bg-white/10 text-white placeholder-white/50"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white cursor-pointer"
                  >
                    {showPassword ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-300">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent bg-white/10 text-white placeholder-white/50"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white cursor-pointer"
                  >
                    {showConfirmPassword ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-300">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              {password && (
                <div className="mt-2">
                  <div className="text-sm text-white">
                    Password Strength: {passwordStrength.label}
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full transition-all duration-300"
                      style={{
                        width: `${passwordStrength.score * 20}%`,
                        backgroundColor:
                          passwordStrength.score <= 1
                            ? "#ff4d4f"
                            : passwordStrength.score === 2
                            ? "#ffa940"
                            : passwordStrength.score === 3
                            ? "#69b1ff"
                            : "#36cfc9",
                      }}
                    />
                  </div>
                </div>
              )}
              <button
                type="submit"
                className="w-full py-2 rounded-lg text-white hover:opacity-90 transition bg-[#1DA1F2] cursor-pointer px-4 sm:px-6 sm:py-3 text-base sm:text-lg font-medium hover:bg-[#0A66C2] duration-300 flex items-center justify-center"
                style={{ backgroundColor: "#1DA1F2" }}
              >
                Sign Up
              </button>
            </form>
            <div className="flex items-center gap-4 my-6">
              <hr className="flex-1 border-white/30" />
              <span className="text-white/70">or</span>
              <hr className="flex-1 border-white/30" />
            </div>
            <button
              onClick={handleGoogleLogin}
              className="flex items-center gap-2 px-4 py-2 mx-auto bg-white/10 border border-white/30 rounded-full text-white hover:scale-105 hover:shadow-lg transition-transform duration-200 cursor-pointer"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1.02.68-2.33 1.08-3.71 1.08-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C4.01 20.52 7.62 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.62 1 4.01 3.48 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Sign up with Google
            </button>
            <p className="mt-4 text-center text-sm text-white">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium hover:underline"
                style={{ color: "#1DA1F2" }}
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
