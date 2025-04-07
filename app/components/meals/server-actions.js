'use server';
import { saveMeal } from "@/lib/meals";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function isValid(txt) { return !txt || txt.trim() === ''; }

// export async function shareMeal(formData) {
export async function shareMeal(prevState, formData) {
  const meal = {
    title         : formData.get('title'),
    slug          : formData.get('slug'),      
    image         : formData.get('food'),      
    summary       : formData.get('summary'),      
    instructions  : formData.get('instructions'),      
    creator       : formData.get('creator'),
    creator_email : formData.get('creator_email'),
  };
  console.log('form data = ', meal);

  if (isValid(meal.title)
    || isValid(meal.summary)
    || isValid(meal.instructions)
    || isValid(meal.creator)
    || isValid(meal.creator_email)
    || !meal.creator_email.includes('@')
    || !meal.image || meal.image.size === 0
  ) {
    // throw new Error('invalid input');
    return {
      message: 'Invalid input'      
    };
  }

  // await new Promise(resolve => setTimeout(resolve, 2000));
  revalidatePath('/meals');
  await saveMeal(meal);
  redirect(`/meals`);
}

export async function addToCart(prevState, queryData) {
  const itemID = queryData.get('itemID');
  if (itemID === "1") {
    return "Added to cart";
  } else {
    // Add a fake delay to make waiting noticeable.
    await new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
    return "Couldn't add to cart: the item is sold out.";
  }
}