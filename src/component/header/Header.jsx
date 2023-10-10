import {useState} from "react";
import "./Header.css";
import {FiMenu} from "react-icons/fi"
import {AiOutlineClose} from "react-icons/ai"
import {BsFillSunFill} from "react-icons/bs"


export const Header = () => {
  const [showData , setShowData]= useState(false)
  return (
    <header className="flex">
 <h1 className="find"></h1>
    
    <button onClick={()=>{
      setShowData(true)
    }} className="menu " ><FiMenu/></button>
    
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button className="mode"><BsFillSunFill/></button>
      
      {showData && (
        <div className="fixed">
          <ul className="modal ">
            <li>
              <button
                className="close"
                onClick={() => {
                  setShowData(false);
                }}
              > <AiOutlineClose/></button>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Uses</a>
            </li>
          </ul>
    
          </div>
         ) }
    </header>
  );
};
