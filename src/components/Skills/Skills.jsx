import './Skills.css'

const Skills = () => {
  const techStack = [
    'C#',
    '.NET',
    'ASP.NET Core',
    'Entity Framework Core',

    'SQL (T-SQL)',
    'JavaScript',
    'HTML',
    'CSS',
    'React',

    'REST API',
    'gRPC',
    'JWT Authentication',

    'Testing (Unit/Integration)',
    'CI/CD pipelines',
    'Microservices architecture',
  ]

  const tools = [
    'Git',
    'GitHub',
    'GitHub Actions',
    'Azure DevOps',

    'Visual Studio',
    'Visual Studio Code',

    'SQL Server Management Studio',

    'Postman / Insomnia',
    'Swagger / OpenAPI',

    'Docker',
    'OpenShift',
    'RabbitMQ',
  ]

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-container">

        <div className="skills-tech-stack">
          <h3>Languages & Technologies</h3>
          <ul className="tech-stack-list">
            {techStack.map((skill, index) => (
              <li className="skills-item" key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Tools</h3>
          <ul className="skills-tools-list">
            {tools.map((tool, index) => (
              <li className="skills-item" key={index}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills