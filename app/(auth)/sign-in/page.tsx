import AuthForm from '@/components/AuthForm'
import React from 'react'

const SignIn = () => {
  return (
    <section className=' bg-purple-300 flex-center size-full max-sm:px-6'>
      <AuthForm type="sign-in"/>
    </section>
  )
}

export default SignIn