import React from 'react';
import { RatingView } from 'react-simple-star-rating';
import { useRouteMatch } from 'react-router';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Description({ movies, handleClose }) {
  const match = useRouteMatch();
  console.log(match.url.slice(1));
  const movie = movies.filter((movie) =>
    movie.title==match.url.slice(1)

  );

console.log(movies)
   console.log(movie[0].href)
    return (
     
        <div className='affich'>
        <div  className='moviedes'>
       <br/>
    <img  src={movie[0].img}/>
    <h1 name="title">{movie[0].title}</h1> <br/>
    <RatingView ratingValue={movie[0].rate} /* RatingView Props */ /> <br/>
    <h8 name="date">{movie[0].date}</h8> <br/> 
    <h8 name="duration">{movie[0].duration}</h8> <br/>
    <h8 name="genre">{movie[0].genre}</h8> <br/> <br/>
  <iframe width="560" height="315" src={movie[0].href}
  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   <h4>THE STORY</h4> <br/>
 <p name="discription"> {movie[0].description} </p> 
<br/>
          <Button variant="secondary" onClick={handleClose}>
           <Link to="/"> Close </Link>
          </Button>
          <br/> <br/>
        </div>
        </div>
        
    )
}

export default Description

