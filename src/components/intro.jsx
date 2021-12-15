import React from 'react';
import ReactDOM from 'react-dom';
import '../css/main.css';

export default class Intro extends React.Component{
    render() {
        return (

            <section id="intro">
                <div className="intro-overlay" />
                <div className="intro-content">
                    <div className="row">
                        <div className="col-twelve">
                            <h5>Hello, I'm</h5>
                            <h1>{this.props.nome}</h1>
                            <p className="intro-position">
                                <span>{this.props.cargo || "oi"}</span>
                                <span>{this.props.cargo2 || "oi"}</span>
                            </p>
                            <a className="button stroke smoothscroll" href="#about" title>More About Me</a>
                        </div>
                    </div>
                </div> {/* /intro-content */}
                {<ul className="intro-social">
                    <li><a href="https://www.instagram.com/" target="_blank"><i className="fa fa-instagram" /></a></li>
                    <li><a href="mailto:lizzegabriel@gmail.com"><i className="fa fa-envelope" /></a></li>
                    <li><a href="https://github.com/lizze3"><i className="fa fa-github" /></a></li>
                </ul>}
            </section> 
      );
    }
  };             
           