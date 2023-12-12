import Link from "next/link";

function MealsPage() {
  return (
    <>
      <h1>Meals Pge</h1>
      <h2>Links:</h2>
      <p>
        <Link href="/meals/share">SHARE</Link>{" "}
      </p>

      <p>
        <Link href="/meals/meal-details">MealDetails</Link>{" "}
      </p>
    </>
  );
}

export default MealsPage;
