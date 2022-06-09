import MetaHead from "../components/MetaHead";
import Hero from "../components/Hero";
import ProjectPost from "../components/ProjectPost";

const projectPosts = [
    {
        no: 1,
        name: "Portfolio creation",
        description: "Building a website from the ground up using HTML and CSS.",
        technologies: "NextJS, HTML, CSS, React",
        image: "/assets/code.jpg",
        link: "https://github.com/simonbeirouti/t1a2-portfolio"
    },
    {
        no: 2,
        name: "Application development",
        description: "Creating a working prototype of ideas that operate on phones.",
        technologies: "Dart, Flutter, Firebase",
        image: "/assets/ux.jpg",
        link: "https://github.com/simonbeirouti/flutter_budget_tracker"
    },
    {
        no: 3,
        name: "Become h4ck3R",
        description: "Play around with Node to scrap news data on the war in Ukraine",
        technologies: "NodeJS, Javascript, Coffee",
        image: "/assets/hacker.jpg",
        link: "https://github.com/simonbeirouti/news-scrapper"
    }
];

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
            {projectPosts.map((post) => {
                return (
                    <ProjectPost 
                        key={post.no}
                        name={post.name}
                        description={post.description}
                        technologies={post.technologies}
                        image={post.image}
                        link={post.link}
                    />
                )
            })}
        </div>
    </>
    )
}