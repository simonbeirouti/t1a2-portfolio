import MetaHead from "../../components/MetaHead";
import Hero from "../../components/Hero";
import Image from "next/image";

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
            <div>
                <Image src="/assets/hacker.jpg" alt="image with websites" width={200} height={100} />
                <p>content</p>
            </div>
        </>
    )
}