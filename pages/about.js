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
                description="Learn a bit more about me"
            />
        </>
    );
}