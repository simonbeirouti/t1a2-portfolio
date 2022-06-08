import Hero from "../components/Hero";
import ProjectPost from "../components/ProjectPost";

export default function ProjectPage() {
    return (
    <>
        <Hero 
            description="Here are my projects"
        />
        <main>
            <div className="project">
                <ProjectPost 
                    name="Portfolio creation"
                    description="Building a website from the ground up using HTML and CSS."
                    image="/assets/code.jpg"
                />
            </div>
            <div className="project">
                <ProjectPost 
                    name="Application development"
                    description="Creating a working prototype of ideas that operate on phones."
                    image="/assets/ux.jpg"
                />
            </div>
            <div className="project">
                <ProjectPost 
                    name="Become h4ck3R"
                    description="Write python scipts to order pizza and coffee from local biznesses."
                    image="/assets/hacker.jpg"
                />
            </div>
        </main>
    </>
    )
}