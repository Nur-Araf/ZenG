import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { gsap } from "gsap";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { api } from "../../store/interceptor";

interface FormInputs {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { setAuthenticated } = useAuthStore();
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

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      await api.post("/login", {
        username: data.email,
        password: data.password,
      });
      setAuthenticated(true);
      // place a alert
      console.log("Login successful");
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="py-20 md:py-24 bg-gradient-to-t from-gray-200 to-white flex items-center justify-center overflow-hidden p-4 min-h-[100dvh]">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8">
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
                ApplyZen
              </span>{" "}
              Login
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              <button
                type="submit"
                className="w-full py-2 rounded-lg text-white hover:opacity-90 transition bg-[#1DA1F2] cursor-pointer px-4 sm:px-6 sm:py-3 text-base sm:text-lg font-medium hover:bg-[#0A66C2] duration-300 flex items-center justify-center"
                style={{ backgroundColor: "#1DA1F2" }}
              >
                Log In
              </button>
            </form>
            <p className="mt-4 text-center text-sm text-white">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium hover:underline"
                style={{ color: "#1DA1F2" }}
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
