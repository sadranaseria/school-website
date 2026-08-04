import Dropzone from './_components/Dropzone'

const GalleryPage = () => {
  return (
    <div className='max-w-xl min-h-screen w-full flex flex-col items-center justify-center space-y-5'>
      <h1 className='text-3xl font-bold'>عکس های <span className='text-primary'>هنرستان</span></h1>
      <Dropzone />
    </div>
  )
}

export default GalleryPage;