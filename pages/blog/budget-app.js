import MetaHead from "../../components/MetaHead";
import Hero from "../../components/Hero";
import Image from "next/image";

export default function BudgetAppPostPage() {
    return (
        <>
            <MetaHead
                page="Budget tracker"
                description="A blog post about creating a budget tracker app on Flutter"
            />
            <Hero 
                description="Budget tracker"
            />
            <div>
                <Image src="/assets/hacker.jpg" alt="image with Flutter" width={200} height={100} />
                <p>content</p>
            </div>
        </>
    )
}