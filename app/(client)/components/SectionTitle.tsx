import Link from 'next/link'
import React from 'react'

const SectionTitle = ({ title } : { title : string }) => {
  return (
    <h2 className='block text-center text-primary text-4xl my-20'>{title}</h2>
  )
}

export default SectionTitle