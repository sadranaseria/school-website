import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const MajorsPage = () => {
  return (
    <div>
        MajorsPage
        <Button>
            <Link href='/admin/majors/new'>رشته جدید</Link>
        </Button>
    </div>
  )
}

export default MajorsPage