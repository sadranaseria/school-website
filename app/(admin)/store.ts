import { create } from 'zustand';

interface Image {
  image : File,
  isUploading : boolean;
  id ?: string;
}

interface ImageState {
  images : Image[];
  setImages : (acceptedImages : File[]) => void;
  setUploading : (image : File , isUploading : boolean , id ?: string) => void;
  deleteImageState : (imageId : string) => void;
}

const useImage = create<ImageState>(set => ({
  images : [],
  setImages : (acceptedImages) => set(({ images }) => ({
    images : [
      ...images,
      ...acceptedImages.map(image => ({ image , isUploading : false}))
    ]
  })),
  setUploading: (image , isUploading , id) => set(({ images }) => ({
    images : [
      ...images.map(img => img.image === image ? { ...img , isUploading , id } : img)
    ]
  })),
  deleteImageState : (imageId) => set(({ images }) => ({
    images : [
      ...images.filter(img => img.id !== imageId)
    ]
  }))
}))

export default useImage;