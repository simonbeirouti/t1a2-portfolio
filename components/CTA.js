export default function CTA() {
    return (
        <section className="xl-m xl-p dashed" id="cta-form">
            <div>
                <div>
                    <h1 className="xl-f xl-fw">Join the mailing list!</h1>
                    <p className="md-f md-fw">I won&apos;t spam! I&apos;ll just send you updates and cool things.</p>
                </div>
            </div>
            <div>
                <form className="xl-mt xl-mb" action="#" method="POST">
                    <input className="form-fields sm-pl dashed" placeholder="Email address" type="text" id="email-adress" name="email-adress" />
                    <button id="cta" className="dashed transition" type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
}