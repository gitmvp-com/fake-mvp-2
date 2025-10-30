# Fake MVP 2

A minimal viable product featuring fake authentication, dashboard, dark mode, animations, and responsive UI.

Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🔐 **Fake Authentication** - Simple local-based authentication (no backend required)
- 📊 **Dashboard** - User dashboard with profile management
- 🌓 **Dark Mode** - Full dark mode support
- 🎨 **Animations** - Smooth transitions with Framer Motion
- 📱 **Responsive Design** - Mobile-first responsive layout
- 🚀 **Modern Stack** - Next.js 15, React 19, TypeScript, Tailwind CSS

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/gitmvp-com/fake-mvp-2.git
cd fake-mvp-2
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Deploy

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── api/              # API routes
│   ├── auth/             # Authentication pages
│   ├── dashboard/        # Dashboard pages
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable components
├── contexts/             # React contexts (auth, theme)
├── hooks/                # Custom React hooks
├── utils/                # Utility functions
├── types/                # TypeScript types
└── public/               # Static assets
```

## Tech Stack

- **Framework**: Next.js 15.1.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 12.4.3
- **UI Components**: Headless UI, Lucide React
- **HTTP Client**: Axios

## Fake Authentication

The authentication system is completely local and doesn't require a backend:

- Login with any email/password combination
- User data stored in browser localStorage
- Persistent sessions
- Simple logout functionality

## Theme Switching

Dark mode is automatically applied based on system preferences and can be manually toggled.

## License

MIT

---

Built with ❤️ as an MVP
