import css from './page.module.css';
import Image from 'next/image';
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';

export default function Slug({ params }) {
  const meal = getMeal(params.slugId);
  // console.log('MEAL', params.slugId, meal);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br/>');

  return <>
    <header className={css.header}>
      <div className={css.image}>
        <Image src={meal.image} alt="the meal image" fill />
      </div>
      <div className={css.headerText}>
        <h1>{meal.title}</h1>
        <p className={css.creator}>
          by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
        </p>
        <p className={css.summary}>{meal.summary}</p>
      </div>
    </header>
    <main>
      <p className={css.instructions} dangerouslySetInnerHTML={{
        __html: meal.instructions
      }}></p>
    </main>

    {/* <p className="text">Slug: { params.slugId }</p> */}
  </>
}