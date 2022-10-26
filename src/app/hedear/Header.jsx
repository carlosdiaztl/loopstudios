import React from 'react'
import logo from "../images/logo.svg";
import '../styles/style.scss';
const Header = () => {
   let listInputs = ["About", "Careers", "Events", "Products", "Support"];
  return (
    
    <div className="header">
                       <nav>
                        <img src={logo} alt="" />
                        <ul>
                            {
                                listInputs.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))
                            }

                        </ul>
                    </nav>
                    <aside>
                        <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
                    </aside>
                    
                </div>
  )
}

export default Header





