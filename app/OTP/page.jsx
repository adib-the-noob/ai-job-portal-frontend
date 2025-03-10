"use client";
import Link from "next/link";
function page() {
  return (
<div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
    <div className="bg-white rounded-xl shadow-lg w-full max-w-[700px] py-8 sm:py-16 md:py-24">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
            Create your Account
        </h1>
        <div className="relative mb-4 mt-6 flex justify-center items-center">
            {/* New wrapper div for perfect positioning */}
            <div className="relative w-full max-w-[300px] sm:max-w-[450px]">
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
                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                    />
                </svg>

                <input
                    type="text"
                    name="OTP"
                    id="OTP"
                    autoComplete="OTP"
                    required
                    className="block w-full rounded-xl bg-[#e6e6e6] pl-10 pr-4 py-3 text-gray-900 text-base transition-all duration-200 ease-in-out outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white hover:bg-gray-100 placeholder:text-gray-500 hover:shadow-md hover:shadow-indigo-500/30"
                    placeholder="Enter OTP"
                    style={{
                        boxShadow: "0 0 0 2px rgba(165, 170, 175, 0)",
                        WebkitTransition: "box-shadow 0.2s",
                        transition: "box-shadow 0.2s",
                    }}
                    onMouseOver={(e) =>
                        (e.target.style.boxShadow = "0 0 0 2px rgba(165, 170, 175, 0.5)")
                    }
                    onMouseOut={(e) =>
                        (e.target.style.boxShadow = "0 0 0 2px rgba(165, 170, 175, 0)")
                    }
                />
            </div>
        </div>
        <div className="flex justify-center items-center">
            <button
                type="submit"
                className="w-full max-w-[300px] sm:max-w-[450px] rounded-xl bg-indigo-600 px-4 py-3 text-base font-semibold text-white shadow-sm transition-all duration-200 ease-in-out hover:bg-gradient-to-r from-indigo-600 to-indigo-500 hover:shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:animate-pulse"
            >
                Verify OTP
            </button>
        </div>
        <div className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link
                href="/login"
                className="font-semibold text-indigo-700 hover:text-indigo-900 transition-all duration-200 ease-in-out hover:underline"
            >
                Log in
            </Link>
        </div>
    </div>
</div>
  );
}

export default page;
