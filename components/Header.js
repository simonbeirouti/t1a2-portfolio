import React from 'react';
import Link from 'next/link';

const navItems = [
  {no: 1, link: '/about', icon: '❓'},
  {no: 2, link: '/projects', icon: '👷🏼'},
  {no: 3, link: '/blog', icon: '✍🏼'},
];

export default function Header() {
  return (
    <header className="sm-pt sm-pb sm-pl sm-pr">
        <div>
          <Link href="/">
            <a>
              <button id="home" className="dashed transition xs-mt xs-mb">サイモン</button>
            </a>
          </Link>
        </div>
        <nav className='sm-pt sm-pb sm-pl sm-pr'>
            <ul id="nav-links">
                {navItems.map((item) => {
                  return (
                    <li className='sm-pl sm-pr' key={item.no}>
                      <Link href={item.link}>
                        <a className="transition">
                          <button id="std" className="dashed transition lg-f xs-mt xs-mb">{item.icon}</button>
                        </a>
                      </Link>
                    </li>  
                  )
                })}
            </ul>
        </nav>
        <div>
          <Link href="/contact">
            <a>
              <button id="cta" className="dashed transition xs-mt xs-mb">📲</button>
            </a>
          </Link>
        </div>
    </header>
  )
}