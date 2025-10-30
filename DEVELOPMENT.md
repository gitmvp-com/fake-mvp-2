# Development Guide

## Architecture Overview

Fake MVP 2 follows a modular, scalable architecture:

```
App Flow:
┌─────────────────────────────────┐
│         Root Layout             │
│  (Providers & Navigation)       │
└────────┬────────────────────────┘
         │
    ┌────┴────┐
    │          │
   ┌▼──┐   ┌──▼┐
   │App│   │API│
   └───┘   └───┘
    │          │
    └────┬─────┘
         │
    ┌────▼───────┐
    │  Contexts  │
    │ & Hooks    │
    └────┬───────┘
         │
    ┌────▼────────────────┐
    │   Components &      │
    │   Utilities         │
    └─────────────────────┘
```

## Key Technologies

### Framework & Language
- **Next.js 15.1.3**: React meta-framework with App Router
- **React 19**: Latest React with hooks and concurrent rendering
- **TypeScript 5**: Static type checking and better IDE support

### Styling
- **Tailwind CSS 3.4.1**: Utility-first CSS framework
- **Dark Mode**: Built-in with media preference detection
- **Custom Colors**: Defined in `tailwind.config.ts`

### Animations & UI
- **Framer Motion 12.4.3**: Production-ready animation library
- **Lucide React 0.475.0**: Beautiful icon library
- **Headless UI 2.2.0**: Unstyled accessible components

### State Management
- **React Context API**: For auth and theme state
- **Local Storage**: For persistent user data (fake auth)
- **Client-side only**: No server state needed

## Code Style Guide

### Component Structure

```typescript
'use client'; // Always at the top for client components

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SomeIcon } from 'lucide-react';
import Button from '@/components/Button';

interface ComponentProps {
  // Props interface
}

const MyComponent = ({ prop1, prop2 }: ComponentProps) => {
  // Hooks first
  const [state, setState] = useState('');
  
  // Logic
  const handleAction = () => {
    // Action logic
  };
  
  // Render
  return (
    <motion.div>
      {/* JSX */}
    </motion.div>
  );
};

export default MyComponent;
```

### Naming Conventions

- **Components**: PascalCase (e.g., `Button.tsx`)
- **Utilities**: camelCase (e.g., `cn.ts`)
- **Contexts**: PascalCase with `Context` suffix (e.g., `AuthContext.tsx`)
- **Types**: PascalCase (e.g., `User` type)
- **Constants**: UPPER_SNAKE_CASE (e.g., `APP_NAME`)
- **CSS Classes**: kebab-case (Tailwind handles this)

### File Organization

```
Component folder structure:

components/
├── index.ts              # Export all components
├── Button.tsx            # Component files
├── Card.tsx
├── Hero.tsx
└── ...

App folder structure:

app/
├── layout.tsx            # Root layout with providers
├── page.tsx              # Home page
├── globals.css           # Global styles
├── auth/
│   ├── login/
│   │   └── page.tsx
│   └── register/
│       └── page.tsx
├── dashboard/
│   └── page.tsx
└── profile/
    └── page.tsx
```

## Features Implementation

### Authentication Flow

```typescript
// 1. Login triggers
const handleSubmit = async (e) => {
  const { login } = useAuth();
  await login(email, password);
  // User stored in localStorage
  // Redirect to dashboard
};

// 2. Session persists
useEffect(() => {
  const user = localStorage.getItem('fakeAuthUser');
  if (user) setUser(JSON.parse(user));
});

// 3. Logout clears
const logout = () => {
  localStorage.removeItem('fakeAuthUser');
};
```

### Dark Mode Implementation

```typescript
// 1. Detect system preference
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

// 2. Apply to document
document.documentElement.classList.add('dark');

// 3. Store preference
localStorage.setItem('theme', 'dark');

// 4. Tailwind uses data-mode or class
// In our case: document.documentElement.classList
```

### Animation Patterns

```typescript
// Container animations with stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Item animations
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Usage
<motion.div variants={containerVariants} initial="hidden" animate="visible">
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

## Adding New Features

### Adding a New Page

1. **Create page file:**
   ```bash
   mkdir app/feature-name
   touch app/feature-name/page.tsx
   ```

2. **Add to navigation (TopBar.tsx):**
   ```typescript
   <Link href="/feature-name">Feature</Link>
   ```

3. **Use auth guard if needed:**
   ```typescript
   const { isAuthenticated } = useAuth();
   useEffect(() => {
     if (!isAuthenticated) router.push('/auth/login');
   }, [isAuthenticated]);
   ```

### Adding a New Component

1. **Create component:**
   ```bash
   touch components/MyComponent.tsx
   ```

2. **Export from index:**
   ```typescript
   export { default as MyComponent } from './MyComponent';
   ```

3. **Use in pages:**
   ```typescript
   import { MyComponent } from '@/components';
   ```

### Adding a New Context

1. **Create context:**
   ```typescript
   // contexts/MyContext.tsx
   const MyContext = createContext();
   
   export function MyProvider({ children }) {
     const [state, setState] = useState();
     return (
       <MyContext.Provider value={{ state, setState }}>
         {children}
       </MyContext.Provider>
     );
   }
   ```

2. **Wrap in layout:**
   ```typescript
   <MyProvider>
     {/* App content */}
   </MyProvider>
   ```

## Performance Optimization

### Image Optimization
- Use Next.js `Image` component for automatic optimization
- Set `priority` for above-the-fold images
- Use appropriate sizes and formats

### Code Splitting
- Next.js automatically splits code per route
- Use `dynamic()` for large components
- Lazy load heavy dependencies

### State Management
- Keep state as close as possible to where it's used
- Use Context only for global state (auth, theme)
- Consider memoization for expensive computations

## Testing

### Component Testing

```typescript
// Example with @testing-library/react
test('button renders with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

### Integration Testing

```typescript
test('login flow works', async () => {
  render(<LoginPage />);
  await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com');
  await userEvent.type(screen.getByLabelText(/password/i), 'password');
  await userEvent.click(screen.getByRole('button', { name: /sign in/i }));
  expect(screen.getByText(/welcome/i)).toBeInTheDocument();
});
```

## Debugging

### Browser DevTools
1. **React DevTools**: Inspect component tree and props
2. **Redux DevTools** (if added): Time-travel debugging
3. **Network tab**: Monitor API calls
4. **Console**: Check for errors and logs

### Debug Mode
```typescript
// Add debug logs
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', data);
}
```

### React Strict Mode
- Enabled in development
- Highlights potential issues
- Runs effects twice intentionally

## Common Issues & Solutions

### Hydration Mismatch
- **Cause**: Server and client render differently
- **Solution**: Use `suppressHydrationWarning` or `useEffect` for client-only content

### Theme Not Persisting
- **Cause**: localStorage access before mount
- **Solution**: Check theme is set after `mounted` state

### Auth Context Undefined
- **Cause**: Using hook outside provider
- **Solution**: Ensure AuthProvider wraps component tree

### Images Not Loading
- **Cause**: Wrong path or asset not public
- **Solution**: Place images in `public/` folder

## Deployment Checklist

- [ ] Environment variables set
- [ ] No console errors in build
- [ ] Responsive design tested on mobile
- [ ] Dark mode working
- [ ] Authentication flow tested
- [ ] Performance optimized (Lighthouse score 90+)
- [ ] SEO metadata added
- [ ] Error boundaries in place
- [ ] Analytics configured
- [ ] Security headers set (in next.config.ts)

## Resources

- [Next.js App Router](https://nextjs.org/docs/app)
- [React Hooks](https://react.dev/reference/react/hooks)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook)

---

For more questions, check the main README or create an issue on GitHub.
