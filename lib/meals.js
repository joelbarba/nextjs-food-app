import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';
import { S3 } from '@aws-sdk/client-s3';

// const s3 = new S3({ region: 'us-east-1' });
const s3 = new S3({ region: 'eu-north-1' });
const db = sql('meals.db');

export async function getMeals() {
  await new Promise(resolve => setTimeout(resolve, 200));
  // throw new Error('Loading failed');

  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(id) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(id);
}

// async function saveFileToFS(meal) {
//   const extension  = meal.image.name.split('.').pop();
//   const fileName = `${meal.slug}.${extension}`;
//   const stream = fs.createWriteStream(`public/images/${fileName}`);
//   const bufferedImage = await meal.image.arrayBuffer();
//   stream.write(Buffer.from(bufferedImage), (error) => { 
//     if (error) { throw new Error('saving image fail'); }
//   });
// }

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  // await saveFileToFS(meal);
  
  const extension  = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;
  const bufferedImage = await meal.image.arrayBuffer();

  s3.putObject({
    Bucket: 'jb-default-bucket',
    Key: 'images/' + fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });
  

  meal.image = fileName;
  console.log('Saving meal to DB', meal);

  return db.prepare(`INSERT INTO meals 
            (title,  summary,  instructions,  creator,  creator_email,  image,  slug)
    VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
         `).run(meal);
}