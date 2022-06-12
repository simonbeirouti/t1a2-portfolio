import Image from "next/image"

export default function ProjectPost({name, description, image, technologies, link}) {
    return (
        <div className="project xxl-m">
            <Image height={300} width={400} src={image} alt={description} />
            <div className="project-text sm-mt sm-mb xxl-ml xxl-mr">
                <h1 className="lg-f lg-fw">{name}</h1>
                <p className="md-f md-fw">{description}</p>
                <p className="tech-used md-f md-fw lg-mt lg-mb">{technologies}</p>
            </div>
            <a href={link}>
                <button id="cta" className="dashed transition">Go to project</button>
            </a>
        </div>
    )
}