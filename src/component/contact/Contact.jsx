import { MdEmail } from "react-icons/md";
import "./Contact.css";
import Lottie from "lottie-react";
import animatiomJson from '../../assets/animation/Animation - 1697153926208.json'
export const Contact = () => {
  return (
    <section id="contact">
      <h1 className="title">
        <MdEmail className="icon-contact" />
        Contact us
      </h1>
      <p className="subtitle">
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div className="flex"style={{justifyContent: "space-between"}}>
        

        <form>
          <div className="flex" style={{alignItems:"center"}}>
            <label htmlFor="email">Email Address :</label>
            <input required type="email" name="" id="email" placeholder="Enter Email ..." />
          </div>

          <div className="textarea flex" style={{ marginTop: "25px" ,alignItems:"center" }}>
            <label htmlFor="message">Your message :</label>
            <textarea required name="" id="message" placeholder="Enter Message ..."></textarea>
 </div>
 <button className="submit">Submit</button>

        </form>
        <div className="animation">
        <Lottie  style={{height:350}} animationData={animatiomJson}/>
        </div>
      </div>
    </section>
  );
};
