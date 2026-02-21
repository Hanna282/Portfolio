import './About.css'

const About = () => {
    return (
        <section className="about" id="about">
            <h1 className="about-heading">Hi! I'm Hanna Mickels</h1>
            <article className="about-me">
                <div className="about-me-info">
                    <p>
                        I'm a dedicated and solution-oriented .NET developer with a structured and curious mindset.
                    </p>
                    <p>
                        I focus on buildning a strong foundation in software development
                        and creating efficient, maintainable and user-friendly solutions.
                    </p>
                    <p>
                        I value collaboration and clear communication,
                        and I'm always eager to learn and grow as a developer.
                    </p>
                    <a
                    className="primary-button button-download"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://drive.google.com/file/d/1nkRcT-3reziALJfotrC4SVE1QlhKM00s"
                    >
                        Download my CV
                    </a>
                </div>
                <div className="about-me-portrait">
                    <img className="about-me-image" src="images/portrait.jpg" alt="Portrait of Hanna" loading="lazy" />
                </div>
            </article>
        </section>
    )
}

export default About