import Image from "next/image"

export default function ProjectPost({name, description, image}) {
    return (
        <>
            <Image height={300} width={400} src={image} alt={description} />
            <div className="project-text">
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </>
    )
}