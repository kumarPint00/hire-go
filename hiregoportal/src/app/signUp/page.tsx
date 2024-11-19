'use client';
import SignUp from '@/components/SignUp/SignUp';
import React, { FC } from 'react'
export interface pageProps {
    text?: string
}

const page: FC<pageProps> = ( props ) => {

  return (
    <>
     <SignUp/>
    </>
  )
}
export default page;