import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
export function saveMeal(meal) {
  //{lower: true} forces all characters to be lowercase
  meal.slug = slugify(meal.title, { lower: true });
  //remove any harmfull content from the instructions (as we used it as dangerouslySetInnerHTML )
  meal.instructions = xss(meal.instructions);
}
