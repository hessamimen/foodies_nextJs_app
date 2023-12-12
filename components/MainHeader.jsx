import Link from "next/link";

import logoImg from "@/assets/logo.png"; //wehn importing image like this it returns an object that we should use the src key in src props

function MainHeader() {
  console.log(logoImg.src);
  return (
    <header>
      <Link href="/">
        <img src={logoImg.src} alt="A plate with food on it" />
        Next Level Food
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/meals">Brouwse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
