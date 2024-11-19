'use client';
import LandingPage from '@/components/LandingPage/LandingPage';
import React, { FC } from 'react'
export interface pageProps {
    text?: string
}

const page: FC<pageProps> = ( props ) => {

  return (
    <>
     <LandingPage/>
    </>
  )
}
export default page;