import MetaHead from '../components/MetaHead';
import Hero from '../components/Hero';
import BlogPost from '../components/BlogPost';

const blogPosts = [
    {no: 1, name: "Portfolio project", date: "11th June 2022", link: "/blog/portfolio-project"},
    {no: 2, name: "Budget app", date: "19th April 2022", link: "/blog/budget-app"},
    {no: 3, name: "News scraper", date: "3rd March 2022", link: "/blog/news-scrapper"},
    {no: 4, name: "Flutter portfolio", date: "1st Janurary 2022", link: "/blog/flutter-portfolio"},
    {no: 5, name: "Hello World", date: "24th December 2022", link: "/blog/hello-world"}
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
            <section className='blog-parent xxl-mt xxl-mb xxl-ml xxl-mr'>
                {blogPosts.map((post) => {
                    return (
                        <BlogPost 
                            key={post.no}
                            name={post.name}
                            date={post.date}
                            link={post.link}
                        />
                    )
                })}
            </section>
        </>
    );
}