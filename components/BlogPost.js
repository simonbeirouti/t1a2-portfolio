export default function BlogPost({no, name, date, link}) {
    return (
        <div key={no} className='blog-post dashed'>
            <h1 className="xl-f xl-fw">{name}</h1>
            <p className="lg-f sm-fw">{date}</p>
            <a href={link}>
                <button id='cta' className="dashed transition">Read it now</button>
            </a>
        </div>
    )
}