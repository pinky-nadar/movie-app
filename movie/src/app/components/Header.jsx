import Link from 'next/link';
import MenuItem from './MenuItem';
import { AiFillHome } from "react-icons/ai";
import ThemeSwitch from './ThemeSwitch';

export default function Header() {
  return (
    <div className='flex justify-between items-center max-w-7xl mx-auto p-3'>
        <div className='flex gap-4'>
            <MenuItem title="home" address="/" Icon={ <AiFillHome/> }/>
            <MenuItem title="about" address="/about" Icon={ <AiFillHome/> }/>
        </div>
        <div className='flex gap-1 items-center'>
          <ThemeSwitch/>
          <Link href={'/'} className='flex gap-1 items-center'>
            <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDb</span>
            <span className='text-xl hidden sm:inline'>Clone</span>
          </Link>
        </div>
        
    </div>
  );
}
