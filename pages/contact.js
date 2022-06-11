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