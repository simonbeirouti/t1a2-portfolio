import MetaHead from "../../components/MetaHead";
import Hero from "../../components/Hero";
import CTA from "../../components/CTA";
import Socials from "../../components/Socials";

export default function PortfolioProjectPostPage() {
    return (
        <>
            <MetaHead
                page="Website portfolio"
                description="A blog post about creating a website using HTML, CSS and NextJS"
            />
            <Hero 
                description="Website portfolio"
            />
            <div className="post-page sxl-ml sxl-mr xxl-mt">
                <div className="blog-hero-img" id="b5"></div>
                <p className="md-fw blog-content lg-mt lg-mb lg-ml lg-mr xl-pr xl-pl">
                    Vaporware subway tile keytar pork belly snackwave tacos craft beer. 
                    Meggings lo-fi bicycle rights enamel pin 3 wolf moon cray. Intelligentsia 
                    keffiyeh vinyl leggings brunch. Photo booth scenester craft beer pitchfork. 
                    Hella small batch letterpress fam echo park fashion axe meditation copper 
                    mug helvetica unicorn cray everyday carry 3 wolf moon put a bird on it succulents.</p>
                <p className="md-fw blog-content lg-mt lg-mb lg-ml lg-mr xl-pr xl-pl">
                    Pok pok butcher try-hard, raw denim +1 kitsch adaptogen DIY air plant green juice 
                    listicle. Vegan praxis actually everyday carry taiyaki 8-bit. Small batch listicle 
                    praxis actually, migas DIY freegan iPhone raclette man braid irony knausgaard whatever. 
                    Umami lumbersexual cold-pressed pour-over kale chips semiotics fam vexillologist. 
                    Street art photo booth hashtag, succulents messenger bag polaroid listicle migas.</p>
                <CTA />
                <p className="md-fw blog-content lg-mt lg-mb lg-ml lg-mr xl-pr xl-pl">
                    XOXO meditation af air plant crucifix. Jianbing farm-to-table tumeric, banjo knausgaard 
                    pour-over fixie photo booth humblebrag +1. Distillery prism dreamcatcher jean shorts 
                    disrupt slow-carb tumblr flexitarian selvage sustainable offal +1 ennui schlitz. 
                    Mixtape copper mug pork belly snackwave pop-up, typewriter sustainable authentic 
                    ugh raclette artisan. Tote bag trust fund retro, kitsch waistcoat helvetica tattooed 
                    poutine keytar. Snackwave before they sold out freegan bitters tonx semiotics.</p>
                <p className="md-fw blog-content lg-mt lg-mb lg-ml lg-mr xl-pr xl-pl">
                    Irony migas ugh, plaid VHS cold-pressed selfies polaroid chia taxidermy. Woke 
                    cloud bread vegan cornhole gastropub marfa keffiyeh adaptogen 8-bit blog fixie 
                    master cleanse activated charcoal hella drinking vinegar. Pinterest schlitz migas 
                    craft beer gastropub hell of, semiotics swag organic glossier edison bulb celiac 
                    tonx kinfolk cloud bread. Chartreuse asymmetrical blue bottle fam yr, gochujang 
                    man braid kogi. Gentrify asymmetrical before they sold out tilde cliche, sartorial 
                    street art yes plz. Chicharrones microdosing you probably haven't heard of them swag shabby chic.</p>
            </div>
            <Socials w="75" h="75" />
        </>
    )
}