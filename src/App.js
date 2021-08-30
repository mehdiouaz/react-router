import {React, useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Description from './Description';
import Home from './Home';

function App  () {
  const [movies, setmovies] = useState([
    {
        title: "The GodFather",
        duration:"237 min",
        date:"1972",
        rate:2,
        genre:"Drama",
        description:"The Godfather Don Vito Corleone is the head of the Corleone mafia family in New York. He is at the event of his daughter's wedding. Michael, Vito's youngest son and a decorated WW II Marine is also present at the wedding. Michael seems to be uninterested in being a part of the family business. Vito is a powerful man, and is kind to all those who give him respect but is ruthless against those who do not. But when a powerful and treacherous rival wants to sell drugs and needs the Don's influence for the same, Vito refuses to do it. What follows is a clash between Vito's fading old values and the new ways which may cause Michael to do the thing he was most reluctant in doing and wage a mob war against all the other mafia families which could tear the Corleone family apart.",
        img:"https://i1.sndcdn.com/artworks-000258070367-dij50r-t500x500.jpg",
        href:"https://www.youtube.com/watch?v=sY1S34973zA&ab_channel=Fan-MadeFilmTrailers"
    },
    {
      
      title: "The lord of the rings",
        duration:"380 min",
        date:"2003",
        rate:3,
        genre:"War",
        description:"The Lord of the Rings: The Return of the King is a 2003 epic fantasy ... From Pippin's description of his visions, Gandalf surmises that Sauron will attack .",
        img:"http://3.bp.blogspot.com/-KUn_HHccQMI/VY4Sy_Mn4pI/AAAAAAAAADY/hkXsYvw1uqc/s1600/LOTR%2BROTK%2Bposter.jpg",
        href:"https://www.youtube.com/watch?v=r5X-hFf6Bwo&ab_channel=Movieclips"  
    },
    {
    
        title: "Jumper",
        duration:"171 min",
        date:"2008",
        rate:4,
        genre:"Adventure",
        description:"Jumper is a 2008 American science fiction action film loosely based on the 1992 novel of the same name by Steven Gould. The film is directed by Doug Liman ....",
        img:"https://upload.wikimedia.org/wikipedia/en/3/37/Jumperposter.jpg",
        href:"https://www.youtube.com/watch?v=eLqE8rqNPbk&ab_channel=TheTrailerGuy"
    },
    {
    
      title: "The fast and the furious",
      duration:"140 min",
      date:"2005",
      rate:5,
      genre:"action",
      description:"Fast & Furious (also known as The Fast and the Furious) is a media franchise centered on a series of action films that are largely concerned with illegal street racing, heists, spies and betrayal.",
      img:"https://static.wikia.nocookie.net/fastandfurious/images/b/bc/Fast_Four_Poster.jpg/revision/latest?cb=20200323093212",
      href:"https://www.youtube.com/watch?v=ZsJz2TJAPjw&ab_channel=TheFastSaga",
  }
]);
  return (
    <div>
      <BrowserRouter>
      <Route exact path="/" ><Home movies={movies}/></Route>
      <Route path="/:name"><Description movies={movies}/></Route>
      </BrowserRouter>
    </div>
  );
}

export default App

