'use client';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../firebaseConfig';

export default function SignIn() {
  const[ userObj, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function handleSignUpWithEmail(e) {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created:', userCredential.user);
      setUser(userCredential.user)
    } catch (error) {
      console.error('error signing up', error)
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
    </>
  )
}
