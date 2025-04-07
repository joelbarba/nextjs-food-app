'use server';
import { saveMeal } from "@/lib/meals";
import { redirect } from "next/navigation";

export async function shareMeal(formData) {
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
  await saveMeal(meal);
  redirect(`/meals`);
}