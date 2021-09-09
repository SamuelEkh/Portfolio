import '../styles/Timeline.scss';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Projects } from "../projects";
import { IProject } from '../types';
import { FaReact } from 'react-icons/fa';

const renderProjects = () => {
  return Projects.map((project: IProject) => (
    <VerticalTimelineElement
      key={project.title}
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(237, 237, 237)', color: 'black' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(237, 237, 237)' }}
      iconStyle={{ background: 'rgb(36, 36, 36)', color: '#fff' }}
      icon={<FaReact />}
    >
      <h3 className="vertical-timeline-element-title">{project.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{project.date}</h4>
      <div className="timeline__img-container">
        <img className="timeline__img" src={project.img} />
      </div>
      <p className="timeline__desc">
        {project.description}
      </p>
      <h4 className="timeline__tech">Tech used: {project.tech}</h4>
      <a href={project.codelink} target="__blank">
        <button className="timeline__code">Code</button>
      </a>
      {project.deploylink ? 
      <a href={project.deploylink} target="__blank">
        <button className="timeline__deploy">App</button>
      </a>
      :
      null
      }
    </VerticalTimelineElement>
  )) 
}

const Timeline: React.FC = () => {
  return (
    <section id="projects" className="timeline">
      <VerticalTimeline>
        {renderProjects()}
      </VerticalTimeline>
    </section>
  )
}

export default Timeline;