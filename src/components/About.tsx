import '../styles/About.scss';
import Picture from '../images/picture-bw.png';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <h2 className="about__title">About me</h2>
      <div className="about__container">
        <img src={Picture} alt="picture of me" className="about__picture"/>
        <div className="about__desc-container">
          <p className="about__desc">I am a fullstack JavaScript developer with experience in TypeScript, React and Node.js.</p>
          <p className="about__desc">Before becoming a developer I worked in Sales and Service as a Sales Teamleader and Kitchen Consultant. I found my passion for coding through hobby coding and my huge IT interest.</p>
          <p className="about__desc">Working in a team developing intuitive apps or services is what I love doing, and always strive to improve and learn new things.</p>
        </div>
      </div>
    </section>
  )
}

export default About;