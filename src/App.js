import React from 'react'
import './App.css';
import { allmovies } from './movies';


  

function App() {
  return (
    <section className='movielist'>
    {allmovies.map(({img,price,title,id})=>(
     
     <Movies key={id} img={img} title={title} price={price}> </Movies>
   
    )
    )}
    </section>
  );
}

 const Movies = ({img,title,price}) => {
  
  
  return (
   
    <article className='articles'>
     
       <img  src={img} alt="" /> 
       <h2 className='text' >
         {title}</h2>
       <h1 onMouseOver={()=>console.log({title})}> Price :{price}</h1>
 
   </article>
    
  )
}
 



export default App;
