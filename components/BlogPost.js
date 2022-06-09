export default function BlogPost({name, date, link}) {
    return (
        <div className='blog-post'>
            <h1>{name}</h1>
            <p>{date}</p>
            <a href={link}><button className='cta'>Read it now</button></a>
        </div>
    )
}