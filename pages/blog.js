import MetaHead from '../components/MetaHead';
import Hero from '../components/Hero';

export default function BlogPage() {
    return (
        <>
            <MetaHead 
                page="Blog"
                description="Blog page to read and watch about the different things that Simon is up to."
            />
            <Hero 
                description="Content that I create"
            />
        </>
    );
}