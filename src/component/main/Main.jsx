import "./Main.css";
import {BsArrowRightShort, BsGithub, BsLink45Deg} from 'react-icons/bs'
export const Main = () => {
  return (
    <main className="mainProject" id="project">
      <div className="l-section ">
        <button>all project</button>
        <button type="">html & css</button>
        <button type="">javascript</button>
        <button type="">react & mui</button>
      </div>
      
      <section className="r-section flex">
      {["aa ", "bb " , "cc" , "ee" ,"ww"].map((item) =>{
        return(
            <article key={item} className="card">
  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKsw0wE25AxZPm4f8P9bzRl5IKY9AvjaABg&usqp=CAU" alt="" />


<div  className="box">
  <h1 className="title-card">E-commerce Amazon Clone</h1>
  <p  className="subtitle">The Amazon Clone project is a comprehensive e-commerce solution built using ReactJS.</p>

<div className="icon-card flex">
<div  style={{gap : "11px"}}  className="flex">
<BsLink45Deg/>
<BsGithub/>
</div>
<div className="flex link">
<a href="">More
<BsArrowRightShort style={{alignSelf:"end"}}/>
</a>

</div>

</div>
 </div>
</article>
        )
      }) }



     

   </section>    

        
 </main>   
  );
};
