import Link from "next/link";
import Image from "next/image";

const socials = [
    { no: 1, link:  "https://github.com/simonbeirouti", image: "/assets/github.png", alt: "Image of the github icon that will go to the page when clicked" },
    { no: 2, link:  "mailto:hello@simonbeirouti.com", image: "/assets/email.png", alt: "Image of an email icon that will prompt you to send an email when clicked" },
    { no: 3, link:  "https://linkedin.com/in/simonbeirouti", image: "/assets/linkedin.png", alt: "Image of the linkedin icon that will go to the page when clicked" },
];

export default function Socials({w, h}) {
    return (
        <>
            <h1 className="xl-f xl-fw">Check out my links below!</h1>
            <ul>
                {socials.map(social => {    
                    return (
                        <Link key={social.no} href={social.link}>
                            <li className="md-p socials">
                                <Image width={w} height={h} src={social.image} alt={social.alt} />
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </>
    )
}