import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  // return <nav>
  //   <div className="nav-center">
  //     <div className="nav-header">
  //       <img src={logo} alt="" />
  //       <button className="nav-toggle">
  //         <FaBars/>
  //       </button>
  //     </div>
  //       <div className="links-container show-container">
  //             <ul className="links">
  //                 <li>
  //                   <a href="#">
  //                          Home
  //                    </a>
  //                 </li>
  //                 <li>
  //                   <a href="#">
  //                          Prodcuts
  //                    </a>
  //                 </li>
  //                 <li>
  //                   <a href="#">
  //                          contact
  //                    </a>
  //                 </li>
  //                 <li>
  //                   <a href="#">
  //                          Prodcuts
  //                    </a>
  //                 </li>
  //             </ul>

  //       </div>
  //       <ul className="social-icons">
  //         <li><a href="
  //         "><FaTwitter/></a>
  //         </li>
  //         <li><a href="
  //         "><FaTwitter/></a>
  //         </li>
  //         <li><a href="
  //         "><FaTwitter/></a>
  //         </li>
  //       </ul>
  //     </div>
    
  // </nav>
  //basic without dinamic, it works, but it's hard coding
const [showLinks, setShowLinks] = useState(false);
const linksContainerRef = useRef(null)
const linksRef = useRef(null)

useEffect(() => {
  const linksHeight = linksRef.current.getBoundingClientRect().height

if (showLinks) {
   linksContainerRef.current.style.height = `${linksHeight}px`
}
else {
  linksContainerRef.current.style.height = '0px'
}
 
}, [showLinks]) //every time that showlinks change y call this


  return <nav>
    <div className="nav-center">
      <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
            <FaBars/>
          </button>
      </div>
     { /*CONDICIONAL RENDERING OJO. */}
     {
    //   showLinks && 
    //   <div className="links-container show-container">
    //   <ul className="links">
    //      {
    //       links.map((link)=> {
    //          const {id,url,text} =link;
    //          return <li key={id}>
    //                <a href={url}>{text}</a>
    //          </li>
    //       })
    //      }  
        
    //   </ul>
    // </div> functiona pero es mejor asi
     }


      {/* <div className={`${showLinks? 'links-container show-container' :'links-container'}` //works but no dinamyc}> */}
      <div className='links-container' ref={linksContainerRef}> 
      <ul className="links" ref={linksRef}>
         {
          links.map((link)=> {
             const {id,url,text} =link;
             return <li key={id}>
                   <a href={url}>{text}</a>
             </li>
          })
         }  
        
      </ul>
    </div>
   
     
      <ul className="social-icons">
        {
          social.map((item) => {
              const {id,url,icon} = item;
              return <li key={id}>
                 <a href={url}>{icon}</a>
              </li>
          })
        }
      </ul>
    </div>
  </nav>

}

export default Navbar
