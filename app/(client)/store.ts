import { create } from 'zustand';

interface ActiveLink {
    linkId : string;
    setLinkId : (id : string) => void; 
}

const useActiveLink = create<ActiveLink>(set => ({
    linkId : '',
    setLinkId : (id) => set({ linkId : id })
}))

export default useActiveLink;