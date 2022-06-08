import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
        <div className="logo i-hate-css">
            <p>PORTFOLIO</p>
        </div>
        <div>
            <nav>
                <ul id="nav-links">
                    <li>
                      <Link href="/"><a><button className="btn">🏠</button></a></Link>
                    </li>
                    <li>
                      <Link href="about"><a><button className="btn">📖</button></a></Link>
                    </li>
                    <li>
                      <Link href="projects"><a><button className="btn">🛠</button></a></Link>
                    </li>
                    <li>
                      <Link href="blog"><a><button className="btn">✍🏼</button></a></Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="i-hate-css">
          <Link href="contact"><a><button className="btn cta">📲</button></a></Link>
        </div>
    </header>
  )
}