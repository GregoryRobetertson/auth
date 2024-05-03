"use client";
import {onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../firebaseConfig";

export default function Page() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/");
      } else {
        setUser(user);
      }
    });
    return () => unsubscribe();
  }, []);

  async function handleLogOutClick() {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("An Error occured during sign out:", error);
    }
  }

  return (
    <>
      {user ? (
        
        <div>This is sensitive data for the user.</div>
      ) : (
        <p>This page is protected</p>
      )}
      {user && (
        <button
        onClick={handleLogOutClick}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#dd4b39",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Sign out
      </button>
      )}
        
        
    </>
  );
}
