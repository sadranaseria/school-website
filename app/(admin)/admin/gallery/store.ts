import { create } from 'zustand';

interface Image {
  image : File,
  isUploading : boolean;
  cid ?: string;
  url ?: string;
}

interface ImageFromDb {
  cid : string;
  url : string;
}

interface ImageState {
  images : Image[];
  setImages : (images : ImageFromDb[]) => void;
  uploadImages : (acceptedImages : File[]) => void;
  setUploading : (image : File , isUploading : boolean , cid ?: string) => void;
  deleteImageState : (imageId : string) => void;
}

const useImage = create<ImageState>(set => ({
  images : [],
  uploadImages : (acceptedImages) => set(({ images }) => ({
    images : [
      ...images,
      ...acceptedImages.map(image => ({ image , isUploading : false }))
    ]
  })),
  setImages : (imagesDb) => set(() => ({
    images : imagesDb.map(imgDb => ({
      image : new File([] , ''),
      cid : imgDb.cid,
      url : imgDb.url,
      isUploading : false
    }))
  })),
  setUploading: (image , isUploading , cid) => set(({ images }) => ({
    images : [
      ...images.map(img => img.image === image ? { ...img , isUploading , cid } : img)
    ]
  })),
  deleteImageState : (imageId) => set(({ images }) => ({
    images : [
      ...images.filter(img => img.cid !== imageId)
    ]
  }))
}))

export default useImage;