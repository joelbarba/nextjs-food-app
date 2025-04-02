import Link from 'next/link';
import logoImg from '@/assets/logo.png';
import css from './menu.module.css';
import Image from 'next/image';
import NavLink from './nav-link';

export default function Menu() {

  return (<header className={css.header}>
    <Link className={css.logo} href='/'>
      {/* <img src={logoImg.src} alt="The logo"></img> */}
      <Image src={logoImg} alt="The logo" priority/>
      Home
    </Link>
    <nav className={css.nav}>
      <ul>
        <NavLink href="/community">Community</NavLink>
        <NavLink href="/meals">Meals</NavLink>
        <NavLink href="/about">About</NavLink>
        {/* <li><Link href='/community' className={path === '/community' ? css.active : undefined}>Community</Link></li>
        <li><Link href='/meals' className={path.startsWith('/meals') ? css.active : undefined}>Meals</Link></li> */}
        {/* <li><Link href='/meals/share'>Share Meal</Link></li>
        <li><Link href='/meals/1234'>Meals 1234</Link></li> */}
      </ul>
    </nav>
  </header>)
}