import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const loading = () => {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <Skeleton className="h-4 w-2/3 bg-gray-200" />
        <Skeleton className="h-4 w-1/2 bg-gray-200" />
      </CardHeader>
      <CardContent>
        <Skeleton className="aspect-video w-full bg-gray-200" />
      </CardContent>
    </Card>
  )
}

export default loading