# Smart Bookmark App

A simple bookmark manager built using Next.js, Supabase, and Tailwind CSS.

## Live Demo
https://smart-bookmark-app.vercel.app

## GitHub Repository
https://github.com/DLokiv18/smart-bookmark-app

## Features

- Sign up and log in using Google OAuth (no email/password)
- Add bookmarks with title and URL
- Each user's bookmarks are private
- Real-time updates without page refresh
- Delete bookmarks
- Deployed on Vercel with a public URL

## Tech Stack

- Next.js (App Router)
- Supabase (Authentication, Database, Realtime)
- Tailwind CSS
- Vercel (Deployment)

## Challenges Faced and Solutions

**Google OAuth in production**  
Login worked locally but failed after deployment.  
Solution: Added the Vercel domain in Supabase Authentication URL Configuration.

**Environment variables on Vercel**  
The app failed because Supabase keys were not available.  
Solution: Added the required environment variables in the Vercel dashboard.

**Ensuring user data privacy**  
Needed to prevent users from accessing others' bookmarks.  
Solution: Implemented Row Level Security (RLS) using user_id.

**Real-time updates**  
Bookmarks needed to appear instantly without refreshing.  
Solution: Enabled Supabase Realtime subscriptions.

## Time Taken

Completed within the 72-hour time limit.

## Notes

This project demonstrates full-stack development using modern tools and cloud services, including authentication, database management, real-time functionality, and cloud deployment.
