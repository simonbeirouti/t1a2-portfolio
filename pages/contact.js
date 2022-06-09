import Hero from "../components/Hero";
import MetaHead from "../components/MetaHead";

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
            <form action="#" method="POST">
                <input className="form-fields" placeholder="First name" type="text" id="first-name" name="first-name" />
                <input type="hidden" name="form-name" value="contact" />
                <input className="form-fields" placeholder="Last name" type="text" id="last-name" name="last-name" />
                <input className="form-fields" placeholder="Email address" type="text" id="email-adress" name="email-adress" />
                <textarea className="textarea" placeholder="Comments? Suggestions?" type="textarea" id="comments-suggestions" name="comments-suggestions" />
                <button className="cta" type="submit">Submit</button>
            </form>
        </>
    );
}