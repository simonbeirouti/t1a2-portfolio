import MetaHead from "../../components/MetaHead";
import Hero from "../../components/Hero";
import Image from "next/image";

export default function NewsScrapperPostPage() {
    return (
        <>
            <MetaHead
                page="News scrapper"
                description="A blog post about creating a news scrapper for Ukrainian news"
            />
            <Hero 
                description="News scrapper"
            />
            <div>
                <Image src="/assets/hacker.jpg" alt="image about scrapping" width={200} height={100} />
                <p>content</p>
            </div>
        </>
    )
}