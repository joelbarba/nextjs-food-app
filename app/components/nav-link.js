'use client';

import Link from 'next/link';
import css from './nav-link.module.css';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children }) {
  const path = usePathname();
  // console.log('path = ', path);

  return <Link href={href} className={
    path.startsWith(href)
    ? `${css.link} ${css.active}` 
    : `${css.link}`
  }>{children}</Link>
}