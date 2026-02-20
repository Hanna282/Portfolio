import ProjectCard from '../ProjectCard/ProjectCard'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-container">
        <ProjectCard
          title="Console Block Game"
          img="/images/block-game.png"
          links={[
            { label: 'View On GitHub', url: 'https://github.com/Hanna282/ConsoleBlockGame' }
          ]}
          intro="A console block game built with C#."
          description={
            <>
              <p>
                I built this project as a personal learning exercise to
                strengthen my object-oriented design, testing and overall coding skills.
              </p>
              <p>
                But also because I enjoy this type of game and
                wanted to create my own version of it.
              </p>
              <p>
                The code is structured around small, testable components
                with a focus on readable and maintainable design.
              </p>
            </>
          }
        >
        </ProjectCard>
        <ProjectCard
          title="Alpha portal"
          img="/images/alpha-portal.png"
          links={[
            { label: 'View Frontend', url: 'https://github.com/Hanna282/Frontend-Alpha-Portal' },
            { label: 'View Backend', url: 'https://github.com/Hanna282/Backend-Alpha-Portal' }
          ]}
          intro="Web app for managing projects, members and clients."
          description={
            <>
              <p>
                Built as a course project with a React frontend and an ASP.NET Core Web API backend (REST API design).
              </p>
              <p>
                Includes JWT authentication, role-based access, API key, Azure Blob storage and CRUD operations.
              </p>
              <p>
                Used Entity Framework Core with SQL Server and was deployd to Azure Web App.
              </p>
            </>
          }
        >
        </ProjectCard>
        <ProjectCard
          title="Car Simulator App"
          img="/images/car-simulator.png"
          links={[
            { label: 'View On Github', url: "https://github.com/Hanna282/CarSimulatorApp" }
          ]}
          intro="Azure DevOps project with automated testing and CI/CD pipelines."
          description={
            <>
              <p>
                Course project where I implemented unit and integration tests to uncover
                and fix bugs in an existing ASP.NET MVC application.
              </p>
              <p>
                Created pipelines using YAML and Bicep for automated build, test
                and deployment workflows.
              </p>
            </>
          }
        >
        </ProjectCard>
      </div>
    </section>
  )
}

export default Portfolio