import logo from './logo.svg';
import './App.css';
import Typewriter from 'typewriter-effect';
import MUPhoto from './IMG_4370.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi, I'm Sabrina Nelson</h1>
        <h2>
        <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Full-stack Software Developer")
                        .pauseFor(1000)
                        .start();
                }}
            />
        </h2>
        </header>
        <section id="about-me">
          <h2>About Me</h2>

          <div className='about-me-content'>
            <img src={MUPhoto} alt='Photo of Sabrina Nelson in front of Old Main at Arizona State University' className='about-me-photo'></img>

          <p>I am an ambitious and detail-oriented full-stack software developer graduating from Arizona State
             University with a B.S. in Computer Science and a concentration in Software Engineering in May 2025. 
             Specializing in web development and UI/UX design, I have a strong passion for developing front-end 
             applications that enhance accessibility, create positive user experiences, and boost client satisfaction. 
             When I am not working, 
             I love spending time outdoors and can be found swimming, camping, hiking, or walking to my favorite coffee 
             shop. </p>

          </div>
         
        </section>
        <section id="project">
          <h2>Projects</h2>
          <h3>Port of Mars</h3>
          <p>Port of Mars is a National Science Foundation funded, social science research project at Arizona State University that utilizes a video game
            which focuses on life in a Martian Colony. The game offers a traditional multi-player option and a solo-player version, 
            with other versions of the game under current development. </p>
          
          <p><a href="https://portofmars.asu.edu/#/" target="_blank" rel="noopener noreferrer">Visit the Port of Mars Website</a></p>
          <p><a href="https://github.com/virtualcommons/port-of-mars" target="_blank" rel="noopener noreferrer">Port of Mars Repository</a></p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Contact info</p>
          <p>Email: snelsonmc@gmail.com</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/sabrina-nelson-883136200/" target="_blank" rel="noopener noreferrer">Sabrina Nelson</a></p>
   
        </section>
    </div>
  );
}

export default App;
