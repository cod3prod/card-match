import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-8 animate-bounce flex justify-center">
      <Link href="https://www.github.com/cod3prod">
        <p className="text-center text-xl sm:text-2xl text-bold text-opacity-50 text-secondary hover:text-2xl sm:hover:text-3xl hover:text-opacity-100 hover:text-primary transition-all">
          Created by cod3prod
        </p>
      </Link>
    </footer>
  );
}
