import FaqSection from '@/components/faq-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import React from 'react'

const Page = () => {
  return (
    <div className='bg-blue-50'>
      <SiteHeader />
      <FaqSection />
      <SiteFooter />
    </div>
  )
}

export default Page
