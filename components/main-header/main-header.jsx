import Link from "next/link";
import Image from "next/image";
import classes from "./main-header.module.css";

import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./main-header-background";

function MainHeader() {
  return (
    <>
      <header className={classes.header}>
        <MainHeaderBackground />
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="A plate with food on it" priority />
          Next Level Food
        </Link>
        <nav className={classes.nav}>
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
    </>
  );
}

export default MainHeader;
