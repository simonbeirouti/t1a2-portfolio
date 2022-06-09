import React from 'react';
import Link from 'next/link';

const navItems = [
  {no: 1, link: '/about', icon: '📖'},
  {no: 2, link: '/projects', icon: '🛠'},
  {no: 3, link: '/blog', icon: '✍🏼'},
];

export default function Header() {
  return (
    <header>
        <Link href="/"><a><button className="btn home">🏠</button></a></Link>
        <nav>
            <ul id="nav-links">
                {navItems.map((item) => {
                  return (
                    <li key={item.no}>
                      <Link href={item.link}>
                        <a>
                          <button className="btn">{item.icon}</button>
                        </a>
                      </Link>
                    </li>  
                  )
                })}
            </ul>
        </nav>
        <Link href="/contact"><a><button className="btn cta">📲</button></a></Link>
    </header>
  )
}