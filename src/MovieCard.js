import React from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { RatingView } from 'react-simple-star-rating';

const MovieCard = ({movie}) => {
   
    return (
        <div  className='movie'>
           <Card>
  <Card.Img variant="top" src={movie.img} />
  <Card.Body>
    <Card.Title><Link to={`/${movie.title}`}>{movie.title}</Link></Card.Title>
    <RatingView ratingValue={movie.rate} /* RatingView Props */ />
   <br/> <br/>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{movie.date}</ListGroupItem>
    <ListGroupItem>{movie.duration}</ListGroupItem>
    <ListGroupItem>{movie.genre}</ListGroupItem>
  </ListGroup>
</Card>
<br/>
        </div>
    )
}

export default MovieCard