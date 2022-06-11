import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="xxl-mt">
            <p>Simon Beirouti |<Link href="mailto:hello@simonbeirouti.com"><a>hello@simonbeirouti.com</a></Link></p>
        </footer>
    )
}