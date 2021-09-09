import '../styles/Skills.scss';

const Skills: React.FC = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="skills__header">Skills</h2>
      <div className="skills__languages">
        <h3 className="skills__languages--title">Programming Languages</h3>
        <p>JavaScript</p>
        <p>TypeScript</p>
      </div>
      <div className="skills__container">
        <div className="skills__languages">
          <h2 className="skills__languages--title"> Frontend</h2>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>SASS</p>
          <p>React</p>
          <p>Redux</p>
          <p>React Router</p>
        </div>
        <div className="skills__backend">
          <h3 className="skills__backend--title">Backend</h3>
          <p>NodeJS</p>
          <p>Express</p>
          <p>REST</p>
          <p>MongoDB</p>
          <p>PostGreSQL</p>
        </div>
        <div className="skills__tools">
          <h3 className="skills__tools--title">Skills and Technologies</h3>
          <p>Git</p>
          <p>Visual Studio Code</p>
          <p>Mocha</p>
          <p>Jest</p>
          <p>TDD</p>
          <p>Agile work methods</p>
        </div>
      </div>
    </section>
  )
}

export default Skills;