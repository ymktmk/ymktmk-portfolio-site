import Link from 'next/link';

function Header() {
return <header className="bg-blue-300  h-10">
            <nav>
                  <Link href="/">
                        <a className="pr-10">My Blog</a>
                  </Link>
                  <Link href="/about">
                        <a>About</a>
                  </Link>
            </nav>
      </header>
}

export default Header;

