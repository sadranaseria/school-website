import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

interface UploadFile {
  id: string;
  file: File;
  uploading: boolean;
  progress: number;
  key?: string;
  isDeleting: boolean;
  error: boolean;
  objectUrl?: string;
}

interface FileState {
    files : UploadFile[];
    setFiles : (acceptedFiles : File[]) => void;
    uploadFiles : (file : File) => void;
}

const useFile = create<FileState>((set) => ({
  files: [],

  setFiles: (acceptedFiles) =>
    set((state) => ({
      files: [
        ...state.files,
        ...acceptedFiles.map((file) => ({
          id: uuidv4(),
          file,
          uploading: false,
          progress: 0,
          isDeleting: false,
          error: false,
          objectUrl: URL.createObjectURL(file),
        })),
      ],
    })),
    uploadFiles : (file) => set(state => ({
      files : [
        ...state.files.map(f => f.file === file ? { ...f , uploading : true } : f)
      ]
    }))
}));

export default useFile;