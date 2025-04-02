import Link from 'next/link';
import css from './page.module.css';
import MealsGrid from '@/app/components/meals/meals-grid';

export default function MealsPage() {
  return <>
    <header className={css.header}>
      <h1>Delicious meals, created <span className={css.highlight}>by you</span></h1>
      <p>
        Choose your favourite recipie and cook it yourself. It is easy and fun!
      </p>
      <p className={css.cta}>
        <Link href="/meals/share">Share your favourite recipie</Link>
      </p>
    </header>
    <main className={css.main}>
      <MealsGrid meals={[]}/>
    </main>
  </>
}