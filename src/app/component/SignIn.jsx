'use client';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { auth, provider } from '../firebaseConfig';

export default function SignIn() {
  const[ userObj, setUserObj] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Sign up with email and password 
  async function handleSignUpWithEmail(e) {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created:', userCredential.user);
      setUserObj(userCredential.user)
    } catch (error) {
      console.error('error signing up', error)
    }
}

// Sign in with Google
const handleGoogleSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    setUserObj(user);
    console.log('user signed in:', user.displayName );
  } catch (error) {
    console.error('Error signing in:', error);
  }
}
    
  return (
    <>
    <form onSubmit={handleSignUpWithEmail}>
        <label>
            Email
            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder='Email' />
        </label>
        <label>
            Password 
            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder='Password' />
        </label>
        <button type="submit">Sign Up</button>
    </form>

    {!userObj && ( <button onClick={handleGoogleSignIn}>Sign in with Google</button>)}
    </>
  )
}