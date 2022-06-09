import MetaHead from "../../components/MetaHead";
import Hero from "../../components/Hero";
import Image from "next/image";

export default function FlutterPostPage() {
    return (
        <>
            <MetaHead
                page="Flutter portfolio"
                description="A blog post about creating an app on Flutter to display my portfolio"
            />
            <Hero 
                description="Flutter portfolio"
            />
            <div>
                <Image src="/assets/hacker.jpg" alt="image with Flutter" width={200} height={100} />
                <p>content</p>
            </div>
        </>
    )
}