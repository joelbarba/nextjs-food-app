import Link from 'next/link';
import Image from 'next/image';

import css from './meal-item.module.css';

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={css.meal}>
      <header>
        <div className={css.image}>
          {/* <Image src={image} alt={title} fill /> */}
          {/* <Image src={`https://jb-default-bucket.s3.amazonaws.com/${image}`} alt={title} fill/> */}
          {/* <span>image={`https://jb-default-bucket.s3.amazonaws.com/images/${image}`}</span> */}
          <Image src={`https://jb-default-bucket.s3.amazonaws.com/images/${image}`} alt={title} fill/>
        </div>
        <div className={css.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={css.content}>
        <p className={css.summary}>{summary}</p>
        <div className={css.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}