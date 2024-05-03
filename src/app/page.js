'use client';
import { onAuthStateChanged } from "firebase/auth";
import SignIn from "./SignIn";
import { useRouter } from 'next/navigation';
import { auth } from "./firebaseConfig";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
  const unsubscribe =onAuthStateChanged(auth, (user) => {
    if(user){
      router.push('/dashboard');
    } else{
      router.push('/');
    }
  })
  return () => unsubscribe();
  }, []);
  
  const router = useRouter();
  return (
    <main>
      <h1>Welcome to my site!</h1>
      <SignIn/>
    </main>
  );
}
