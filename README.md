This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Steps

1. run npx create-nextapp@latest
2. npm install firebase to add firebase dependencies
   3.Create firebaseConfig.js and paste in the config from firebase

## ScreenShots

![alt text](image-1.png)
![alt text](image.png)
![alt text](image-2.png)

## Approaches

- **Sign In Form**: Implemented a sign-in form where users can sign in using email and password. Used `signInWithEmailAndPassword` method for this.
- **Google Sign-In**: Utilized Google OAuth for sign-in with Google. Implemented using `GoogleAuthProvider` and `signInWithPopup` method.
- **Error Handling**: Implemented error handling for incorrect email or password.
- **User Authentication State Persistence**: Used `useEffect` and `onAuthStateChanged` to persist user authentication state across page reloads and navigations.
- **User Log Out**: Implemented log out functionality using the `signOut` method from Firebase.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
