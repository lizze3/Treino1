import React from 'react';
import ReactDOM from 'react-dom';
import '../css/main.css';
import '../css/vendor.css';
import '../css/base.css';
import profilePhoto from '../images/profile-pic.png';

export default class About extends React.Component {
    render() {
        return (

            <section id="about">

                <div className="row section-intro">
                    <div className="col-twelve">

                        <h5>About</h5>
                        <div className="intro-info">

                            <img src={profilePhoto} alt="Profile Picture"/>

                            <p className ="lead">Gabriel Lizze - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend odio mauris, sit amet ullamcorper ipsum tempus non. Nam suscipit.</p>
                        </div>

                    </div>
                </div> 
                <div className="row about-content">

                    <div className="col-six tab-full">

                        <h3>About her Work</h3>
                        <p>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.</p>

                        <ul className="info-list">
                            <li>
                                <strong></strong>
                                <span></span>
                            </li>
                            <li>
                                <strong></strong>
                                <span></span>
                            </li>
                            <li>
                                <strong>Fullname:</strong>
                                <span>Gabriel Lizze Rodrigues Marques</span>
                            </li>
                            <li>
                                <strong>Website:</strong>
                                <span>www.kardswebsite.com</span>
                            </li>
                            <li>
                                <strong>Email:</strong>
                                <span>lizzegabriel@gmail.com</span>
                            </li>

                             <li>
                                 <strong>Onde eu fico:</strong>
                                <span><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16269439.975445103!2d-176.4972492552856!3d60.14736406805023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5400df9cc0aec01b%3A0xbcdb5e27a98adb35!2sAlasca%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1639599750193!5m2!1spt-BR!2sbr"></iframe></span>
                             </li>

                        </ul> 
                        
                    </div>

                    <div className="col-six tab-full">

                        <h3>Skills</h3>
                        <p>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.</p>

                        <ul className="skill-bars">
                            <li>
                                <div className="progress percent90"><span>90%</span></div>
                                <strong>HTML5</strong>
                            </li>
                            <li>
                                <div className="progress percent85"><span>85%</span></div>
                                <strong>CSS3</strong>
                            </li>
                            <li>
                                <div className="progress percent70"><span>70%</span></div>
                                <strong>JQuery</strong>
                            </li>
                            <li>
                                <div className="progress percent95"><span>95%</span></div>
                                <strong>PHP</strong>
                            </li>
                            <li>

                                <div className="progress percent100"><span>100%</span></div>
                                <strong>Jogar</strong>
                            </li>

                        </ul> 
                    </div>

                </div>

                <div className="row button-section">
                    <div className="col-twelve">
                        <a href="mailto:lizzegabriel@gmail.com" title="Contact" className="button stroke smoothscroll">Contact</a>
                        <a href="#" title="Download CV" className="button button-primary">Download CV</a>
                    </div>
                </div>

            </section> 
        )
    }
}