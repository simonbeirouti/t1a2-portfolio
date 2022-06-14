import MetaHead from '../components/MetaHead';
import Hero from '../components/Hero';
import CTA from '../components/CTA';

export default function AboutPage() {
    return (
        <>
            <MetaHead 
                page="About"
                description="Learn some information about Simon and what drives him everyday"
            />
            <Hero 
                description="About Simon"
            />
            <section>
                <div className="about-information lg-p">
                    <p className="md-fw">My early exposure to logistics and different forms of product movement, data 
                        input and output has motivated me to pursue a career in data analytics and 
                        software engineering. I value the benefit of technology in increasing productivity 
                        and efficiency in the workplace and facilitating convenience and informative 
                        living. I have recognised how this can benefit internal processes and decision making.</p>
                    <p className="md-fw">I continue developing exceptional customer service, communication and multi-tasking 
                        skills in my roles by taking on challenges and pushing my boundaries. I have also 
                        built upon my abilities to perform under pressure, persevere and stay resilient, 
                        commit to excellence by constantly improving, goal-setting, leadership and teamwork, 
                        and time management.</p>
                </div>
                <h1 className="xl-f xl-fw xxl-mt">Professional experiences</h1>
                <div className="box xxl-mr xxl-ml">
                    <div className="sub-box lg-p xl-mt xl-mb dashed">
                        <div className="md-p">                            
                            <h2 className="lg-f sm-mb lg-fw left">Trade View Investments</h2>
                            <h3 className="md-fw right sm-pr">Customer Support</h3>
                            <p className="right sm-fw" id="date">September 2021 - February 2022</p>
                            <p className="right md-fw">Troubleshooted client algorithms and created educational tutorials in the form of text, video and audio content.</p>
                        </div>
                    </div>
                    <div className="sub-box lg-p xl-mt xl-mb dashed">
                        <div className="md-p">                            
                            <h2 className="lg-f sm-mb lg-fw left">Crypto.com</h2>
                            <h3 className="md-fw right sm-pr">Australian/New Zealand Community Manager</h3>
                            <p className="right sm-fw" id="date">July 2020 - October 2020</p>
                            <p className="right md-fw">Managed a growing crypto.com community and shared information about products services.</p>
                        </div>
                    </div>
                    
                    <div className="sub-box lg-p xl-mt xl-mb dashed">
                        <div className="md-p">                            
                            <h2 className="lg-f sm-mb lg-fw left">Parsl</h2>
                            <h3 className="md-fw right sm-pr">Community Manager and Lead Support Specialist</h3>
                            <p className="right sm-fw" id="date">January 2018 - July 2019</p>
                            <p className="right md-fw">Started the community from 50 members to over a 1k and implemented workflows across the company.</p>
                        </div>
                    </div>
                    
                    <div className="sub-box lg-p xl-mt xl-mb dashed">
                        <div className="md-p">                            
                            <h2 className="lg-f sm-mb lg-fw left">SAMSUNG</h2>
                            <h3 className="md-fw right sm-pr">Brand Ambassador</h3>
                            <p className="right sm-fw" id="date">October 2017 - October 2018</p>
                            <p className="right md-fw">Did general product walkthroughs for customers switching to Samsung and provided white glove service to those switching phones.</p>
                        </div>
                    </div>
                    
                    <div className="sub-box lg-p xl-mt xl-mb dashed">
                        <div className="md-p">                            
                            <h2 className="lg-f sm-mb lg-fw left">Bunnings Warehouse</h2>
                            <h3 className="md-fw right sm-pr">Customer Service and Logistics Assistant</h3>
                            <p className="right sm-fw" id="date">August 2012 - September 2015</p>
                            <p className="right md-fw">Interacted with customers and helped with the goods inwards, and outwards at two different stores.</p>
                        </div>
                    </div>
                </div>
                <div className="xxl-mt xxl-mb" id="cv">
                    <a href="/files/cv.pdf">
                        <button id="cta" className="dashed transition">Download CV</button>
                    </a>
                </div>
            </section>
            <CTA />
        </>
    );
}