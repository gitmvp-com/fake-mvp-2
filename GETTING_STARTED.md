# Getting Started with Fake MVP 2

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gitmvp-com/fake-mvp-2.git
   cd fake-mvp-2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Create .env.local:**
   ```bash
   cp .env.example .env.local
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Features

### 🔐 Fake Authentication
- Login with any email/password combination
- User data stored in browser localStorage
- No backend required
- Automatic user avatar generation using DiceBear API

### 🌓 Dark Mode
- System preference detection
- Manual theme switching
- Smooth transitions
- Persistent theme preference

### 🎨 Animations
- Framer Motion for smooth transitions
- Page entry animations
- Hover effects on interactive elements
- Staggered animations for lists

### 📱 Responsive Design
- Mobile-first approach
- Tailwind CSS utilities
- Adaptive layouts for all screen sizes

### 📊 Dashboard
- User welcome message
- Statistics cards
- Recent activity feed
- Profile management

## Project Structure

```
fake-mvp-2/
├── app/
│   ├── api/                    # API routes (if needed)
│   ├── auth/
│   │   ├── login/              # Login page
│   │   └── register/           # Registration page
│   ├── dashboard/              # Dashboard page
│   ├── profile/                # Profile page
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── components/
│   ├── Alert.tsx               # Alert component
│   ├── Badge.tsx               # Badge component
│   ├── Button.tsx              # Button component
│   ├── Card.tsx                # Card component
│   ├── ErrorBoundary.tsx       # Error boundary
│   ├── Hero.tsx                # Hero section
│   ├── Input.tsx               # Input component
│   ├── LoadingSpinner.tsx      # Loading spinner
│   ├── TopBar.tsx              # Navigation bar
│   └── index.ts                # Components export
├── contexts/
│   ├── AuthContext.tsx         # Authentication context
│   └── ThemeContext.tsx        # Theme context
├── hooks/
│   ├── useAuth.ts              # Auth hook
│   └── useTheme.ts             # Theme hook
├── types/
│   └── index.ts                # TypeScript types
├── utils/
│   ├── api.ts                  # API client
│   ├── cn.ts                   # Class name utility
│   └── constants.ts            # App constants
├── public/                      # Static files
├── .env.example                 # Environment template
├── next.config.ts              # Next.js config
├── tailwind.config.ts          # Tailwind config
├── tsconfig.json               # TypeScript config
└── package.json                # Dependencies
```

## Available Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Authentication Flow

### Login
1. User visits `/auth/login`
2. Enters email and any password
3. User data is stored in localStorage
4. Redirected to `/dashboard`

### Registration
1. User visits `/auth/register`
2. Enters email, password, and name
3. User data is stored in localStorage
4. Redirected to `/dashboard`

### Logout
1. User clicks logout button
2. User data is removed from localStorage
3. Redirected to home page

## Customization

### Change Colors
Edit `tailwind.config.ts` to modify the color scheme:

```typescript
colors: {
  primary: {
    DEFAULT: '#A78BFA', // Change this
    light: '#C4B5FD',
    dark: '#8B5CF6',
  },
  // ... more colors
}
```

### Add New Pages
1. Create a new directory in `app/`
2. Add a `page.tsx` file
3. Update navigation in `TopBar.tsx`

### Add New Components
1. Create component in `components/`
2. Export from `components/index.ts`
3. Import and use in pages

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile 90+)

## Performance Optimizations

- Next.js 15 for fast builds
- React 19 for latest features
- Image optimization via Next.js
- CSS-in-JS with Tailwind
- Component code splitting

## Troubleshooting

### Dark mode not working
- Clear browser cache
- Check that `ThemeProvider` wraps the app in `layout.tsx`
- Verify dark mode is set to 'media' in tailwind config

### Authentication not persisting
- Check if localStorage is enabled in browser
- Look for browser errors in console
- Ensure AuthProvider is in layout

### Styling issues
- Run `npm install` to ensure Tailwind is installed
- Rebuild with `npm run build`
- Clear `.next` folder and restart dev server

## Next Steps

1. **Customize branding:** Update app name, colors, and logo
2. **Add backend:** Connect to a real authentication service
3. **Add features:** Implement additional pages and components
4. **Deploy:** Push to GitHub and deploy on Vercel/Netlify
5. **Monitor:** Add analytics and error tracking

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## Support

For issues and questions, open an issue on GitHub.

---

Happy coding! 🚀
