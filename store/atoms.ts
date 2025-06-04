import { atom } from 'jotai';
import { Project, GalleryItem , Category , Album} from '@/types';

// Projects data
export const projectsAtom = atom<Project[]>([
  { id: 'dexter', name: 'Dexter', icon: '/Project-icons/Lenny.svg' },
  { id: 'long-drive', name: 'Long drive', icon: '/Project-icons/Long%20drive-1.svg' },
  { id: 'lenny-birthday', name: 'Lenny birthday', icon: '/Project-icons/Lenny.svg' }
]);

// Gallery items data
export const galleryItemsAtom = atom<GalleryItem[]>([
  {
    id: 'dexter',
    title: 'Dexter',
    image: '/Project-icons/Lenny%20birthday%202.svg',
    photoCount: 124,
    albumCount: 3
  },
  {
    id: 'long-drive',
    title: 'Long drive',
    image: '/Project-icons/Long%20Drive2%20.svg',
    photoCount: 229,
    albumCount: 6
  },
  {
    id: 'lenny-birthday',
    title: 'Lenny birthday',
    image: '/Project-icons/Lenny%20birthday%202.svg',
    photoCount: 180,
    albumCount: 4
  }
]);

export const categoriesAtom = atom<Category[]>([
    { 
      id: 'pets',
      name: 'Pets',
      icon: '/Project-icons/pet.svg',
      itemCount: 353,
      parentCategory: undefined
    },
    { 
      id: 'photo-type',
      name: 'Photo type',
      icon: '/Project-icons/photo type.svg',
      itemCount: 353,
      parentCategory: undefined
    }
  ]);

  export const albumsAtom = atom<Album[]>([
    {
      id: 'dog-park',
      name: 'Dog park',
      coverImage: '/Project-icons/photo1.svg',
      photoCount: 353,
      createdAt: new Date()
    },
    {
      id: 'vacation',
      name: 'Vacation',
      coverImage: '/Project-icons/photo3.svg',
      photoCount: 127,
      createdAt: new Date()
    }
  ]);

// Active filter
export const activeFilterAtom = atom<string>('all');
