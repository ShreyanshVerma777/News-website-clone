import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav-wrapper">
      <div className="nav-container">
        <Link href="/" className="nav-brand">
          LiveNews
        </Link>

        <nav className="hidden md:flex gap-6 pr-4">
          <Link href="/" className="nav-link">Home</Link>

          <Link href="/category/india" className="nav-link">India</Link>

          <Link href="/category/sports" className="nav-link">Sports</Link>
          
          <Link href="/category/business" className="nav-link">Business</Link>
        </nav>
      </div>
    </header>
  );
}
