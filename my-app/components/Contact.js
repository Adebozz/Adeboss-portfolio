import React from 'react'

const Contact = () => {
  return (
    <>
        <div className="homepage" id="contact">
        <h1>CONTACT</h1> 
        <div className="locate">
            <div className="map">
                <a href="https://www.google.com/maps/dir//Lagos/@6.5480357,3.1438714,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x103b8b2ae68280c1:0xdc9e87a367c3d9cb!2m2!1d3.3792057!2d6.5243793"><img src="/images/Rectangle 31.jpg" alt="map">
                </a></div>
            <div className="cont">
                <h2>Location:</h2>
                Lagos, Nigeria<br>
                <h2>Email:</h2>
                adeigbeademola03@gmail.com<br>
                <h2>Contact Number:</h2>
                08022767313
            </div>
        </div>
        <div className="info">
            <h2>ADEIGBE ADEMOLA</h2>
            <div className="icons">
                <ul>
                    <li><i className="fa-brands fa-linkedin"></i></li>
                    <li><i className="fa-brands fa-github"></i></li>
                    <li><i className="fa-brands fa-square-instagram"></i></li>
                    <li><i className="fa-brands fa-square-twitter"></i></li>
                </ul>
            </div>
           <p>&copy Copyright Adeboss.All rights reserved.</p> 
        </div>
    </div>
    </>
  )
}

export default Contact
