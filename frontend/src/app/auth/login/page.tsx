"use client";

import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#10213a] px-2 transition-colors">
      {/* Logo and main title at top-left, horizontal */}
      <div className="fixed top-4 left-4 flex flex-row items-center z-10">
        <Image
          src="/logo.png"
          alt="Gralvo Logo"
          width={40}
          height={40}
          className="rounded-lg mr-2"
          priority
        />
        <span className="text-lg font-bold text-[#18325a] dark:text-[#bbdefb] tracking-wide drop-shadow-sm select-none" style={{fontFamily: 'Space Grotesk, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, sans-serif'}}>GRALVO</span>
      </div>
      {/* shopping image above card */}
      <div className="flex justify-center w-full mt-20 mb-4">
          <Image
            src="/shopping.svg"
            alt="Shopping"
            width={220}
            height={110}
            className="object-contain drop-shadow-lg"
            priority={false}
          />
      </div>
      {/* Card container for the rest */}
      <div className="p-8 w-full max-w-md flex flex-col items-center mt-4">
        <h2 className="text-xl font-semibold text-center text-[#18325a] dark:text-[#bbdefb] mb-1">Welcome to Gralvo</h2>
        <p className="text-center text-[#2196f3] dark:text-[#90caf9] mb-6 text-sm">Bid, win and own what you love.</p>

        <button
          className="relative flex items-center w-full border border-[#90caf9] dark:border-[#1976d2] rounded-lg py-2 mb-3 bg-white dark:bg-[#10213a] hover:bg-[#bbdefb] dark:hover:bg-[#1976d2]/30 transition"
        >
          <span className="absolute left-4 flex items-center">
            <Image src="/icons/google.webp" alt="Google" width={22} height={22} />
          </span>
          <span className="w-full text-center font-medium text-[#1976d2] dark:text-[#bbdefb]">Continue with Google</span>
        </button>
        <button
          className="relative flex items-center w-full rounded-lg py-2 mb-6 bg-[#1976d2] hover:bg-[#1565c0] text-white font-medium transition shadow-md"
        >
          <span className="absolute left-4 flex items-center">
            <Image src="/icons/facebook.png" alt="Facebook" width={22} height={22} />
          </span>
          <span className="w-full text-center">Continue with Facebook</span>
        </button>

        <div className="flex items-center w-full mb-4">
          <div className="grow border-t border-[#bbdefb] dark:border-[#1976d2]"></div>
          <span className="mx-3 text-[#90caf9] dark:text-[#ffb74d] text-xs">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm0-13a1 1 0 011 1v4a1 1 0 01-2 0V8a1 1 0 011-1zm0 8a1.25 1.25 0 110 2.5A1.25 1.25 0 0112 15z" fill="#ffb74d"/></svg>
          </span>
          <div className="grow border-t border-[#bbdefb] dark:border-[#1976d2]"></div>
        </div>
        <p className="text-xs text-center text-[#90caf9] dark:text-[#ffb74d] mb-2">
          By continuing, you agree to our{' '}
          <a href="#" className="text-[#1976d2] hover:underline">Terms of Service</a> and{' '}
          <a href="#" className="text-[#1976d2] hover:underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}
