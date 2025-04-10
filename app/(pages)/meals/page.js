import Link from 'next/link';
import { Suspense } from 'react';
import css from './page.module.css';
import MealsGrid from '@/app/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import MealsLoading from './loading-out';
import Image from 'next/image';

async function Meals() {
  const data = await getMeals();
  console.log(new Date(), 'loading meals');
  return <MealsGrid meals={data}/>
}

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
      <Suspense fallback={<MealsLoading/>}>
        {/* <Image src="https://jb-default-bucket.s3.amazonaws.com/images/burger.jpg" alt="image" fill/> */}
        <Meals/>
      </Suspense>
    </main>
  </>
}


