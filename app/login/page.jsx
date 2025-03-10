"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";


const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: "700",
});


export default function LoginForm() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-[1050px] py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8">
          <div className="flex justify-center items-center order-2 md:order-1">
            <Image
              src="/profile.png"
              width={230}
              height={230}
              alt="Profile illustration"
              className="w-44 md:w-56 lg:w-64 h-auto self-center"
              priority
            />
          </div>
          <div className="flex flex-col space-y-6 order-1 md:order-2 pl-4 md:pl-8">
            <h1
              className={`text-2xl md:text-3xl font-bold text-center ${poppinsFont.className}`}
            >
              Login
            </h1>
            <form className="space-y-6" action="#" method="POST">
              <div>
                <div className="relative mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-xl bg-[#e6e6e6] pl-10 pr-4 py-3 text-gray-900 text-base transition-all duration-200 ease-in-out outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white hover:bg-gray-100 placeholder:text-gray-500 hover:shadow-md hover:shadow-indigo-500/30"
                    placeholder="Email"
                    style={{
                      boxShadow: "0 0 0 2px rgba(165, 170, 175, 0)",
                      WebkitTransition: "box-shadow 0.2s",
                      transition: "box-shadow 0.2s",
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.boxShadow =
                        "0 0 0 2px rgba(165, 170, 175, 0.5)")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.boxShadow =
                        "0 0 0 2px rgba(165, 170, 175, 0)")
                    }
                  />
                </div>

                <div className="relative mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-xl bg-[#e6e6e6] pl-10 pr-4 py-3 text-gray-900 text-base transition-all duration-200 ease-in-out outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white hover:bg-gray-100 placeholder:text-gray-500 hover:shadow-md hover:shadow-indigo-500/30"
                    placeholder="Password"
                    style={{
                      boxShadow: "0 0 0 2px rgba(165, 170, 175, 0)",
                      WebkitTransition: "box-shadow 0.2s",
                      transition: "box-shadow 0.2s",
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.boxShadow =
                        "0 0 0 2px rgba(165, 170, 175, 0.5)")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.boxShadow =
                        "0 0 0 2px rgba(165, 170, 175, 0)")
                    }
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-base font-semibold text-white shadow-sm transition-all duration-200 ease-in-out hover:bg-gradient-to-r from-indigo-600 to-indigo-500 hover:shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:animate-pulse"
              >
                Login
              </button>

              <div className="text-sm text-center">
                <Link
                  href="#"
                  className="font-semibold text-indigo-700 hover:text-indigo-900 transition-all duration-200 ease-in-out hover:underline"
                >
                  Forgot username / password?
                </Link>
              </div>
            </form>
            <div className="text-sm text-center">
              <Link
                className="font-semibold text-indigo-700 hover:text-indigo-900 transition-all duration-200 ease-in-out hover:underline"
                href="/register"
              >
                Create your Account →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};