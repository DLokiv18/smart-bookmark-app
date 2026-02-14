"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function BookmarkForm({ user }: any) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const addBookmark = async () => {
    if (!title || !url) return;

    await supabase.from("bookmarks").insert({
      title,
      url,
      user_id: user.id,
    });

    setTitle("");
    setUrl("");
  };

  return (
    <div className="space-y-5">

      {/* 📌 TITLE INPUT */}
      <input
        placeholder="Bookmark Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="
          w-full px-4 py-3 rounded-xl
          bg-white/90 backdrop-blur
          border border-gray-300
          shadow-sm
          focus:outline-none
          focus:ring-2 focus:ring-indigo-400
          focus:border-transparent
          transition
        "
      />

      {/* 🔗 URL INPUT */}
      <input
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="
          w-full px-4 py-3 rounded-xl
          bg-white/90 backdrop-blur
          border border-gray-300
          shadow-sm
          focus:outline-none
          focus:ring-2 focus:ring-pink-400
          focus:border-transparent
          transition
        "
      />

      {/* ➕ ADD BUTTON */}
      <button
        onClick={addBookmark}
        className="
          w-full py-3 rounded-xl font-semibold text-white
          bg-gradient-to-r from-emerald-400 to-green-500
          hover:from-emerald-500 hover:to-green-600
          shadow-lg hover:shadow-2xl
          transition-all duration-300
          transform hover:-translate-y-0.5 hover:scale-[1.02]
          focus:outline-none focus:ring-4 focus:ring-green-300
        "
      >
        ➕ Add Bookmark
      </button>
    </div>
  );
}