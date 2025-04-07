import classes from './page.module.css';
import ImagePicker from '@/app/components/meals/image-picker';
import { shareMeal } from '@/app/components/meals/server-actions';

export default function ShareMealPage() {
  // async function shareMeal(formData) {
  //   'use server';
  //   const meal = {
  //     title         : formData.get('title'),
  //     slug          : formData.get('slug'),      
  //     image         : formData.get('food'),      
  //     summary       : formData.get('summary'),      
  //     instructions  : formData.get('instructions'),      
  //     creator       : formData.get('creator'),
  //     creator_email : formData.get('creator_email'),
  //   };
  //   console.log('form data = ', meal);
  //   return 'okkkk';
  // }

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
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
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}