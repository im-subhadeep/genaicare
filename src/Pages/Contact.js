import React from 'react';
import Banner from '../Components/Banner/Banner.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart,faGlobe,faMap,faHome,faPhone, faSearch,faArrowLeft, faEnvelope, faMobile} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

   // Handle post request
   const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/submit', {
       method: 'POST',
    }).then((res) => {
        console.log("Rishi")    
        res.json()
    }).then((post) => {
          setPosts((posts) => [post, ...posts]);
          setTitle('');
          setBody('');
       })
       .catch((err) => {
          console.log(err.message);
       });
 };


  return (
       <>
           <Banner title="contact" smtitle="Contact" />
           <form id="tela" method="post" action="">
              <div className="container">
                 <div className="row">
                  <div className="col-lg-6 col-md-6">
                      <form>
                           <div className="form-control">
                               <input name="Name" placeholder="Your Name" />
                           </div>
                           <div className="form-control">
                               <input name="Email" placeholder="Your Email" />
                           </div>
                           <div className="form-control">
                               <input name="Numbers" placeholder="Phone Numbers" />
                           </div>
                           <select>
                                <option>Select Department</option>
                                <option>One</option>
                                <option>Two</option>
                                <option>Three</option>
                                <option>Four</option>
                           </select>
                           <div className="form-control">
                               <input name="Name" placeholder="Your Name" />
                           </div>
                           <div className="form-control">
                                <textarea name="Message" placeholder="Message"></textarea>
                           </div> 
                            <button type="submit" onClick={handleSubmit}>Submit</button>                       
                      </form>
                  </div>
                  <div className="col-lg-6 col-md-6">
                        <div className="side">
                             <div className="overlay">
                             <h1>contact us for Any Informatics</h1>
                              <li><FontAwesomeIcon icon ={faEnvelope}/>Email & Phone</li>
                              <hr />
                              <p>gjsgdwjdb@gmail.com</p>
                              <p>88678698643</p>
                              <li><FontAwesomeIcon icon={faGlobe} />Follow Us</li>
                              <ul>
                                  <li><FontAwesomeIcon icon={faHeart} /></li>
                                   <li><FontAwesomeIcon icon={faGlobe}/></li>
                                   <li><FontAwesomeIcon icon={faMobile} /></li>
                              </ul>
                             </div>
                        </div>
                  </div>
              </div>
              </div>
           </form>
       </>
  )
}

export default Contact
