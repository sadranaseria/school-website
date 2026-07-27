'use client';

import { Major } from '@/lib/generated/prisma/client';
import dynamic from 'next/dynamic'
import React from 'react'

const MajorForm = dynamic(() => import('../../../_components/MajorForm') , {
  ssr : false
})

const EditForm = ({ major } : { major : Major }) => {
  return (
    <MajorForm major={major} />
  )
}

export default EditForm