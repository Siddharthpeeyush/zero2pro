# Zero2Pro — Netlify-ready static site

Deploy folder: `~/workspace/zero2pro-site/` (this folder — publish directory = site root).

## How to deploy on Netlify (2 minutes, no build)
1. Netlify → Add new site → Deploy manually (drag & drop) — drop this whole folder, OR connect a Git repo containing this folder and set:
   - Build command: (leave empty — no build step)
   - Publish directory: `.` (the folder itself, or `zero2pro-site` if the repo root contains it)
2. Done. The site is plain HTML + CSS + JS (`index.html`, `styles.css`, `app.js`).
3. `_redirects` contains `/* /index.html 200` so hash routes (`#/home`, `#/path`, `#/lesson/L08`) work on refresh.

## What works with no server
- Onboarding: name + language picker — Hinglish (default) / English Only / Hindi. Switching changes all UI text, lessons, quiz, mentor replies. Saved in `localStorage` (`zero2pro_v1`).
- Home Dashboard: progress %, Continue Learning, streak, XP, daily mission, next test.
- Learning Path: 6 levels (0 True Zero, 1 Thinking, 2 First Code Python, 3 Websites, 4 Advanced DSA + projects, 5 Job Ready), 18 lessons, 3 per level. A lesson unlocks only after the previous lesson scores 80%+ on its 5-question test. All levels free — no paywall (pricing removed 10 Nov 2026; price to be added later only where the user says).
- Lesson Player: Learn / Practice / Test / Build. Practice runs code in the browser — JavaScript via a sandboxed Function with captured `console.log`, HTML via iframe preview, Python via a small transpiler (print, variables, if/elif/else, for-range, while, def, lists) with indent handling.
- AI Mentor: rule-based Hinglish/English/Hindi hints, never the full answer, points back to the weak topic on a failed test.
- Top 5 extras: Doubt Solver, Mock Interview + Resume Builder, Revision Flashcards, Daily Mission + Streak, Parent WhatsApp Report (copy + wa.me share, generated from real progress).

## What is demo / mock (honest limits)
- Pricing: none for now — all content free. Monetisation via ads (to be added when the user says where).
- AI Mentor: rule-based keyword hints, not a live LLM call.
- XP "leaderboard": a tier ladder (Beginner → Learner → Builder → Pro) from your own XP, not other real students.
- Progress lives in the browser's localStorage only — no account, no cloud sync yet. Clearing browser data resets progress.
- Python runner is a subset transpiler (print, variables, if/elif/else, for-range, while, def, lists) — not full CPython.
