import React from 'react';
import Link from 'next/link';

const navItems = [
  {link: '/', icon: '🏠'},
  {link: 'about', icon: '📖'},
  {link: 'projects', icon: '🛠'},
  {link: 'blog', icon: '✍🏼'},
]

export default function Header() {
  return (
    <header>
        <div className="logo i-hate-css">
            <p>PORTFOLIO</p>
        </div>
          <nav>
              <ul id="nav-links">
                  {navItems.map((item) => {
                    return (
                      <li>
                        <Link href={item.link}><a><button className="btn">{item.icon}</button></a></Link>
                      </li>  
                    )
                  })}
              </ul>
          </nav>
        <Link href="contact"><a><button className="btn cta">📲</button></a></Link>
    </header>
  )
}