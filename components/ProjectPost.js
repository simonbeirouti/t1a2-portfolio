import Image from "next/image"

export default function ProjectPost({name, description, image, technologies, link}) {
    return (
        <>
            <div className="project">
                <Image height={300} width={400} src={image} alt={description} />
                <div className="project-text">
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <br/>
                    <p className="tech-used">{technologies}</p>
                </div>
                <a href={link}>
                    <button className="cta">Go to project</button>
                </a>
            </div>
        </>
    )
}