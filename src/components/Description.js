import React from 'react'
import { Link } from 'react-router-dom'



const Description =(props )=>{
    const founder = props.movie.find( movie => movie.id==props.match.params.Idmovie  )
    return (

        <div className="card">
     {
       console.log("e",props.match.params.Idmovie)
     }
      <div className="card_left">
        <img src={founder.image} alt="poster" />
      </div>
      <div className="card_right">
        <h1>{founder.name}</h1>
        <div className="card_right__details">
          <ul>
            <li>{founder.date}</li>
            <li>||</li>
            <li>{founder.type}</li>
          </ul>
        </div>
        
        <div className="card_right__review">
          <p>{founder.description}</p>
           <a href="https://www.imdb.com/?ref_=nv_home">Read More</a> 
        </div>
        <div className="card_right__button">
           <a href="https://www.imdb.com/?ref_=nv_home">WATCH TRAILER</a>
          <Link to ='/'> <button> Back to moviesList </button></Link> 
        </div>
      </div>
    </div> 
 
   
    );
};
export default Description;
