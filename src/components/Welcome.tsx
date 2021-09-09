import '../styles/Welcome.scss';
import Eye from './Eye';
import Birds from './Birds';

const Welcome: React.FC = () => {
  return (
    <section className="welcome" id="home">
      <Birds />
{/*       <div className="eye-container">
        <Eye />
      </div> */}
{/*       <div className="welcome__container"> */}
        <h2 className="welcome__name">Hello, my name is Samuel</h2>
        <h2 className="welcome__dev">I am a full stack JavaScript developer</h2>
        <h2 className="welcome__port">Welcome to my portfolio!</h2>
{/*       </div> */}
    </section>
  )
}

export default Welcome;