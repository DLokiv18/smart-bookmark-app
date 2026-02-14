"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import AuthButton from "../Components/AuthButton";
import BookmarkForm from "../Components/BookmarkForm";
import BookmarkList from "../Components/BookmarkList";

export default function Home() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => setUser(session?.user ?? null)
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">

      {/* 🌟 BIG HERO HEADLINE */}
      <div className="text-center mb-12 max-w-3xl">

        <h1 className="text-5xl md:text-6xl font-extrabold
          bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500
          bg-clip-text text-transparent mb-4">
          Save Everything. Find Anything.
        </h1>

        <p className="text-lg md:text-xl text-gray-700">
          Your smart personal space to organize, manage, and access
          all your favorite links in one place.
        </p>

      </div>

      {/* 💎 GLASS CARD */}
      <div className="w-full max-w-2xl p-10 rounded-3xl
        bg-white/80 backdrop-blur-xl
        border border-white/40
        shadow-[0_20px_60px_rgba(0,0,0,0.15)]">

        {/* 🧠 App Title */}
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Smart Bookmark App
        </h2>

        {/* 🔐 Auth */}
        <div className="flex justify-center mb-8">
          <AuthButton user={user} />
        </div>

        {/* 📌 Bookmark Section */}
        {user && (
          <div className="space-y-6">
            <BookmarkForm user={user} />
            <BookmarkList user={user} />
          </div>
        )}
      </div>
    </main>
  );
}