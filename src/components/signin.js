import React, { useState } from 'react'

const Signin = () => {

    const img_src = "https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

    const [formdata,setFormdata] = useState({email:"",password:"",check:false})

    function clickhandler(event){

        const {name,type,value,checked} = event.target
        setFormdata(prev=>{
            return{
            ...prev,
            [name]: type==='checkbox'? checked : value
            }
        })
    }
    function senddata(event)
    {   event.preventDefault();
        console.log(formdata);
    }

  return (
    <div>
        <div className="signin">
            <img id='homeimg' src={img_src} alt="" />
            <div className="signin_box">
                <h2>Sign In</h2>
                <form action="" onSubmit={senddata}>
                    <div className="info">
                        <input 
                        required
                        onChange={clickhandler}    
                        type="email" 
                        value={formdata.email} 
                        name="email" 
                        placeholder='Email or Phone Number'
                        />
                        <input 
                        required
                         onChange={clickhandler}
                        type="password"
                        name="password" 
                        value={formdata.password}
                         placeholder='password'
                         />
                        <button>Sign In</button>
                    </div>
                    <div className="tick">
                        <input 
                        onChange={clickhandler}
                        type="checkbox" 
                        name="check"
                        checked={formdata.check}/>
                        <label htmlFor="">Remember Me</label>
                        <a href="#">Need help?</a>
                    </div>
                </form>

                <p>New to Netflix <a href="#">Sign up now.</a></p>
            </div>
        </div>
    </div>
  )
}

export default Signin
