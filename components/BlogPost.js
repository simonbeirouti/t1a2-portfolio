export default function BlogPost({name, excerpt, link}) {
    return (
        <div className='blog-post'>
            <h1>{name}</h1>
            <p>{excerpt}</p>
            <a href={link}><button className='cta'>Read it now</button></a>
        </div>
    )
}