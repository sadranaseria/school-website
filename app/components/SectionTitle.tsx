import React from 'react'

const SectionTitle = ({ title } : { title : string }) => {
  return (
    <h2 className='text-center text-primary text-4xl'>{title}</h2>
  )
}

export default SectionTitle