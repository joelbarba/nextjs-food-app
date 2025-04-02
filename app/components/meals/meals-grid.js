import css from './meals-grid.module.css';
import MealItem from './meal-item';

export default function MealsGrid({ meals }) {
  return <ul className={css.meals}>
    {meals.map(meal => <li key={meal.id}>
      <MealItem {...meal}></MealItem>
    </li>)}
  </ul>
}