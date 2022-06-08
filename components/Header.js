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
                      <Link href="about"><a><button className="btn">ABOUT</button></a></Link>
                    </li>
                    <li>
                      <Link href="projects"><a><button className="btn">PROJECT</button></a></Link>
                    </li>
                    <li>
                      <Link href="blog"><a><button className="btn">BLOG</button></a></Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="i-hate-css">
            <a><button className="btn cta">CONTACT</button></a>
        </div>
    </header>
  )
}