"use client";
import {

  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, provider } from "./firebaseConfig";

export default function SignIn() {
  const [userObj, setUserObj] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  
  // Side effects
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserObj(user);
      } else {
        setUserObj(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Sign up with email and password
  async function handleSignInWithEmail(e) {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed in:", userCredential.user);
      setUserObj(userCredential.user);
    } catch (error) {
      console.error("error signing up", error);
      setError("incorrect email or password. Please try again");
    }
  }

  // Sign in with Google
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUserObj(user);
      console.log("user signed in:", user.displayName);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  

  return (
    <>
      {error && <div>{error}</div>}
      
      <form
        onSubmit={handleSignInWithEmail}
        style={{
          maxWidth: '300px',
          margin: '0 auto',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          backgroundColor: '#f9f9f9',
        }}
      >
        <label htmlFor="email">
          Email
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            style={{
              width: '100%',
              padding: '8px',
              marginBottom: '15px',
              border: '1px solid #ccc',
            }}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            style={{
              width: '100%',
              padding: '8px',
              marginBottom: '15px',
              border: '1px solid #ccc',
            }}
          />
        </label>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Sign in
        </button>
      </form>

      {!userObj && (
        <button
          onClick={handleGoogleSignIn}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#dd4b39',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Sign in with Google
        </button>
      )}
   </>
  ); 
}
