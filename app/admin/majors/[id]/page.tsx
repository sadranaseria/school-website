import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { prisma } from '@/prisma/client';
import MarkDown from 'react-markdown';

const MajorDetalisPage = async ({ params } : { params : Promise<{ id : string }>}) => {
    const { id } = await params;
    const major = await prisma.major.findUnique({
        where : { id : parseInt(id) }
    })
  return (
    <div className="flex flex-col gap-4 w-full max-w-3xl h-100">
        <h1>{major?.title}</h1>
        <Card className='max-w-3xl min-h-100 prose p-4 wrap-anywhere'>
            <MarkDown>{major?.description}</MarkDown>
        </Card>
    </div>
  )
}

export default MajorDetalisPage