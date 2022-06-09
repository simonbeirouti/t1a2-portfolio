import MetaHead from "../components/MetaHead";
import Hero from "../components/Hero";
import ProjectPost from "../components/ProjectPost";

export default function ProjectPage() {
    return (
    <>
        <MetaHead 
            page="Projects"
            description="The different things that I have built and building currently"
        />
        <Hero 
            description="Projects"
        />
        <div className="project-parent">
            <div className="project">
                <ProjectPost 
                    name="Portfolio creation"
                    description="Building a website from the ground up using HTML and CSS."
                    technologies="NextJS, HTML, CSS, React"
                    image="/assets/code.jpg"
                />
            </div>
            <div className="project">
                <ProjectPost 
                    name="Application development"
                    description="Creating a working prototype of ideas that operate on phones."
                    technologies="Dart, Flutter, Firebase"
                    image="/assets/ux.jpg"
                />
            </div>
            <div className="project">
                <ProjectPost 
                    name="Become h4ck3R"
                    description="Write python scipts to order pizza and coffee from local biznesses."
                    technologies="BASH, Python, Coffee"
                    image="/assets/hacker.jpg"
                />
            </div>
        </div>
    </>
    )
}