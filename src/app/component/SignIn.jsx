'use client';
import React from 'react'

export default function SignIn() {
  return (
    <>
    <form>
        <label>
            Email
            <input type="email" name="email" id="email" placeholder='Email' />
        </label>
        <label>
            Password 
            <input type="password" name="password" id="password" placeholder='Password' />
        </label>
        <button type="submit">Login</button>
    </form>
    </>
  )
}
