import MetaHead from "../../components/MetaHead";
import Hero from "../../components/Hero";
import Image from "next/image";

export default function BootstrapPostPage() {
    return (
        <>
            <MetaHead
                page="Learning bootstrap"
                description="A blog post about my learnings with Bootstrap"
            />
            <Hero 
                description="Learning bootstrap"
            />
            <div>
                <Image src="/assets/hacker.jpg" alt="image with bootstrap" width={200} height={100} />
                <p>content</p>
            </div>
        </>
    )
}