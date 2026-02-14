"use client";

import { supabase } from "@/lib/supabase";

export default function AuthButton({ user }: any) {

  const signIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return user ? (
    /* 🔴 LOGOUT BUTTON */
    <button
      onClick={signOut}
      className="
        px-6 py-3 rounded-xl font-semibold text-white
        bg-gradient-to-r from-red-500 to-pink-500
        hover:from-red-600 hover:to-pink-600
        shadow-lg hover:shadow-2xl
        transition-all duration-300
        transform hover:-translate-y-1 hover:scale-105
        focus:outline-none focus:ring-4 focus:ring-red-300
      "
    >
      Logout
    </button>
  ) : (
    /* 🌈 GOOGLE LOGIN BUTTON */
    <button
      onClick={signIn}
      className="
        group flex items-center gap-3
        px-7 py-3 rounded-xl font-semibold
        text-white
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600
        shadow-lg hover:shadow-2xl
        transition-all duration-300
        transform hover:-translate-y-1 hover:scale-105
        focus:outline-none focus:ring-4 focus:ring-indigo-300
      "
    >
      {/* Google Icon */}
      <svg
        className="w-5 h-5 bg-white rounded-full p-1"
        viewBox="0 0 48 48"
      >
        <path fill="#EA4335" d="M24 9.5c3.3 0 6.3 1.1 8.6 3.3l6.4-6.4C35.4 2.5 30 0 24 0 14.7 0 6.7 5.3 2.7 13l7.8 6C12.5 13.1 17.8 9.5 24 9.5z"/>
        <path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-2.7-.3-3.9H24v7.4h12.5c-.2 1.6-1.4 4.1-4 5.7l6.2 4.8c3.6-3.3 5.7-8.2 5.7-14z"/>
        <path fill="#FBBC05" d="M10.5 28.9c-.5-1.6-.8-3.2-.8-4.9s.3-3.3.8-4.9l-7.8-6C1 16.6 0 20.2 0 24s1 7.4 2.7 10.9l7.8-6z"/>
        <path fill="#34A853" d="M24 48c6 0 11-2 14.6-5.4l-6.2-4.8c-1.7 1.1-4 1.9-8.4 1.9-6.2 0-11.5-4.1-13.5-9.8l-7.8 6C6.7 42.7 14.7 48 24 48z"/>
      </svg>

      Login with Google
    </button>
  );
}