import MetaHead from '../components/MetaHead';
import Hero from '../components/Hero';

export default function AboutPage() {
    return (
        <>
            <MetaHead 
                page="About"
                description="Learn some information about Simon and what drives him everyday"
            />
            <Hero 
                description="A little about me.."
            />
            <section>
                <div className='about-information'>
                    <p>My early exposure to logistics and different forms of product movement, data 
                        input and output has motivated me to pursue a career in data analytics and 
                        software engineering. I value the benefit of technology in increasing productivity 
                        and efficiency in the workplace and facilitating convenience and informative 
                        living. I have recognised how this can benefit internal processes and decision making.</p>
                    <p>I continue developing exceptional customer service, communication and multi-tasking 
                        skills in my roles by taking on challenges and pushing my boundaries. I have also 
                        built upon my abilities to perform under pressure, persevere and stay resilient, 
                        commit to excellence by constantly improving, goal-setting, leadership and teamwork, 
                        and time management.</p>
                </div>
                <h1>Professional experiences</h1>
                <div className='box'>
                    <div className='sub-box'>
                        <h2>Trade View Investments</h2>
                        <h3>Customer Support</h3>
                        <p>September 2021 - February 2022</p>
                        <ul>
                            <li>Conversed with beginner and skilled investors to develop individual learning strategies</li>    
                            <li>Troubleshoot algorithms and general platform issues faced across multiple platforms</li>
                            <li>Deploy and monitor algorithms across different platforms and markets</li>
                            <li>Create product proposals to increase the useability of the platform and product offering</li>
                            <li>Converse with the sales and development teams to coordinate effective customer responses</li>
                            <li>Monthly performance review and strategy sessions to align my skills directly into the role</li>
                        </ul>
                    </div>
                    <div className='sub-box'>
                        <h2>Crypto.com</h2>
                        <h3>Australian/New Zealand Community Manager</h3>
                        <p>July 2020 - October 2020</p>
                        <ul>
                            <li>Delivered online community engagement to a mixture of personalities</li>
                            <li>Educated and troubleshoot issues with Crypto.com products</li>
                            <li>Community moderating through deletion, muting & banning</li>
                            <li>Dispute resolution with unhappy members through understanding and accepting the situation</li>
                            <li>Weekly reporting and weekly team calls to debrief, collect feedback and improve together</li>
                        </ul>
                    </div>
                    <div className='sub-box'>
                        <h2>Parsl</h2>
                        <h3>Community Manager and Lead Support Specialist</h3>
                        <p>January 2018 - July 2019</p>
                        <ul>
                            <li>Collected and analysed data from internal records and public blockchain records</li>
                            <li>Utilised Scrum across different stakeholders to align progress and data to ensure project progress is on time and within budget</li>
                            <li>Utilised different software on the Windows operating system to ensure data migration is done meticulously and results are shared for project updates within the organisation</li>
                            <li>Provided educational seminars to teach other co-workers how to use chosen software to ensure everyone is on board and understanding of the project’s processes</li>
                        </ul>
                    </div>
                    <div className='sub-box'>
                        <h2>SAMSUNG</h2>
                        <h3>Brand Ambassador</h3>
                        <p>October 2017 - October 2018</p>
                        <ul>
                            <li>Brand Ambassador for the Note 8 and S9 launches in a dedicated popup and Telstra Chadstone</li>
                            <li>Delivered exceptional customer experience through detailed product knowledge and retaining knowledge through the FAST (Forget, Active, State & Teach) approach.</li>
                            <li>Part of the Train the Trainer campaign aimed to re-train Telstra, Optus, and JB Hi-Fi staff.</li>
                            <li>Educated new Samsung users on the suite of devices and up-skilling experienced users.</li>
                            <li>Utilised applications to capture check-ins/check-outs through photos, GPS location, and inputting data of daily sales and customer feedback</li>
                        </ul>
                    </div>
                    <div className='sub-box'>
                        <h2>Bunnings Warehouse</h2>
                        <h3>Dandenong and Hawthorn Customer Service and Logistics Assistant</h3>
                        <p>August 2012 - September 2015</p>
                        <ul>
                            <li>Helped oversee inventory distribution at the Dandenong and Hawthorn stores</li>
                            <li>Unload trucks and managed the inventory by liaising with department team members</li>
                            <li>Ensured the quality of goods was acceptable for sale and cross-referencing the invoices to the deliveries</li>
                            <li>Coordinated with team members the receiving of “in demand” stock through the Bunnings distribution centres</li>
                            <li>Provided friendly and helpful customer service and assisted customers with their queries regarding their home DIY projects</li>                        
                        </ul>
                    </div>
                </div>
                <div className='cv' id="cv">
                    <a href="/files/cv.pdf"><button className='cta'>Download CV</button></a>
                </div>
            </section>
        </>
    );
}