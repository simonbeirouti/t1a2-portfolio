import Hero from "../components/Hero";
import MetaHead from "../components/MetaHead";
import Link from "next/link";
import Image from "next/image";

const socials = [
    { key: 1, link:  "https://github.com/simonbeirouti", image: "/assets/github.png", alt: "Image of the github icon that will go to the page when clicked" },
    { key: 2, link:  "mailto:hello@simonbeirouti.com", image: "/assets/email.png", alt: "Image of an email icon that will prompt you to send an email when clicked" },
    { key: 3, link:  "https://linkedin.com/in/simonbeirouti", image: "/assets/linkedin.png", alt: "Image of the linkedin icon that will go to the page when clicked" },
];

export default function ContactPage() {
    return (
        <>
            <MetaHead 
                page="Contact"
                description="How to contact Simon to talk about anything"
            />
            <Hero 
                description="Contact me"
            />
            <section className="xl-mt xl-mb">
                <ul>
                    {socials.map((social) => {
                        return (
                            <Link key={social.key} href={social.link}>
                                <li className="md-p socials">
                                    <Image width={100} height={100} src={social.image} alt={social.alt} />
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </section>
            {/* Apply spacing to overall component */}
            <form className="xxl-mt xxl-mb" action="#" method="POST">
                <input className="form-fields sm-pl sm-mb dashed" placeholder="First name" type="text" id="first-name" name="first-name" />
                <input type="hidden" name="form-name" value="contact" />
                <input className="form-fields sm-pl dashed" placeholder="Last name" type="text" id="last-name" name="last-name" />
                <input className="form-fields sm-pl dashed" placeholder="Email address" type="text" id="email-adress" name="email-adress" />
                <textarea className="textarea sm-pt sm-pl dashed" placeholder="Comments? Suggestions?" type="textarea" id="comments-suggestions" name="comments-suggestions" />
                <button id="cta" className="dashed transition" type="submit">Submit</button>
            </form>
        </>
    );
}