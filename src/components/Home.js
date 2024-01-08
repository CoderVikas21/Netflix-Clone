import React from 'react'
import { IoLanguage } from "react-icons/io5";
import Started from './Started';
import { useNavigate } from "react-router-dom";
import Template from './template';
import {content_data,faq_data} from '../data.js';
import Faq from './Faq';
import Footer from './Footer.js';

const Home = () => {

    const img_src = "https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_medium.jpg";


    const navigate = useNavigate();


  return (
    <div>
      <div className="home">
        <img id='homeimg' src={img_src} alt="" />
        <div className="nav">
            <div className="navleft">
                <img src="https://cdn.geekwire.com/wp-content/uploads/2014/07/Netflix_Logo_Print_FourColorCMYK.png" alt="" />
            </div>
            <div className="navright">
                <div className="lang">
                    <span id='svg'><IoLanguage /></span>
                    <select>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Spanish">Spanish</option>
                    </select>
                </div>
                <button className='signin_btn' onClick={()=>{navigate('/signin')}}>Sign In</button>
            </div>
        </div>
        <div className="container">
            <h1>Unlimited movies, TV shows and more</h1>
            <h5>Watch anywhere. Cancel anytime.</h5>
            <Started/>
        </div>
      </div>

      {
        content_data.map((data)=>{
            return <Template  key={data.id} data = {data}/>
        })
      }
      <div className="faq_sec">
        <h1>Frequently Asked Questions</h1>
      {
        faq_data.map((faq)=>{
          return <Faq key={faq.id} data={faq}/>
        })
      }
      </div>
      <Footer/>
    </div>
  )
}

export default Home
