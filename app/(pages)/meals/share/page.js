'use client';

import classes from './page.module.css';
import ImagePicker from '@/app/components/meals/image-picker';
import { shareMeal, addToCart } from '@/app/components/meals/server-actions';
import MealFormBtn from '@/app/components/meals/meal-form-btn';
import { useActionState } from 'react';
import { useFormState } from 'react-dom';

export default function ShareMealPage() {
  // const [state, formAction] = useActionState(addToCart, { message: null });  
  const [state, formAction] = useFormState(shareMeal, { message: null });

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="creator">Your name</label>
              <input type="text" id="creator" name="creator" required />
            </p>
            <p>
              <label htmlFor="creator_email">Your email</label>
              <input type="email" id="creator_email" name="creator_email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker name="food" label="Your Image"/>
          <p className={classes.actions}>
            {/* <button type="submit">Share Meal</button> */}
            <MealFormBtn/>
            { state.message && <p>Error: {state.message}</p> }
          </p>
        </form>
      </main>
    </>
  );
}