import css from './meals-grid.module.css';

export default function MealsGrid({ meals }) {
  return <ul>
    {meals.map(meal => <li key={meal.id}>
      <MealItem {...meal}></MealItem>
    </li>)}
  </ul>
}