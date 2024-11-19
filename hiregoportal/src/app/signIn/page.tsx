'use client';
import SignIn from '@/components/SignIn/SignIn';
import React, { FC } from 'react'
export interface pageProps {
    text?: string
}

const page: FC<pageProps> = ( props ) => {

  return (
    <>
     <SignIn/>
    </>
  )
}
export default page;