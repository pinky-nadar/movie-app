import Link from 'next/link';

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link href={address} className='hover:text-amber-600'>
        {/* <Icon className="" /> */}
        <p className='uppercase hidden text-sm sm:inline'>{title}</p>
    </Link>
  );
}
