import { prisma } from '@/prisma/client'
import SectionTitle from './components/SectionTitle'

const MajorSection = async () => {
    const majors = await prisma.major.findMany();

  return (
    <div>
        <SectionTitle title='رشته ها' />
        { majors.map(major => (
            <h2 key={major.id}>{major.title}</h2>
        ))}
    </div>
  )
}

export default MajorSection