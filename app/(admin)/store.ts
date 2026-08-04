import { create } from 'zustand';

interface Image {
  image : File,
  isUploading : boolean;
  cid ?: string;
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
  setUploading: (image , isUploading , cid) => set(({ images }) => ({
    images : [
      ...images.map(img => img.image === image ? { ...img , isUploading , cid: cid } : img)
    ]
  })),
  deleteImageState : (imageId) => set(({ images }) => ({
    images : [
      ...images.filter(img => img.cid !== imageId)
    ]
  }))
}))

export default useImage;