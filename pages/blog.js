import MetaHead from '../components/MetaHead';
import Hero from '../components/Hero';
import BlogPost from '../components/BlogPost';

const blogPosts = [
    {
        name: "Portfolio project",
        excerpt: "Est succulents blue bottle authentic ea swag bushwick man braid",
        link: "#"
    },
    {
        name: "Budget app",
        excerpt: "Est succulents blue bottle authentic ea swag bushwick man braid",
        link: "#"
    },
    {
        name: "News scraper",
        excerpt: "Est succulents blue bottle authentic ea swag bushwick man braid",
        link: "#"
    }
];

export default function BlogPage() {
    return (
        <>
            <MetaHead 
                page="Blog"
                description="Blog page to read and watch about the different things that Simon is up to."
            />
            <Hero 
                description="Blog"
            />
            <section className='blog-parent'>
                {blogPosts.map((post) => {
                    return (
                        <BlogPost 
                            name={post.name}
                            excerpt={post.excerpt}
                            link={post.link}
                        />
                    )
                })}
            </section>
        </>
    );
}