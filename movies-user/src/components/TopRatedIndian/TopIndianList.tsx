import React from 'react'
import { Card } from 'react-bootstrap'
import IMovie from '../../models/IMovie';
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

type Props = {
  movie: IMovie
}

function TopIndianList({ movie }: Props) {
  const[mess,setMess]=React.useState(false);
  const {id,title,posterurl,year,genres,ratings,poster,contentRating,
    releaseDate,averageRating,originalTitle,actors}=movie;


  const postData = () => {
    axios.post(`http://localhost:3001/favourite/`, { id, title, posterurl,year,genres,ratings,poster,contentRating,
    releaseDate,averageRating,originalTitle,actors })
      .then(res => console.log(movie))
      setMess(true)
  }
  React.useEffect(() => {
    setTimeout(() => {
      setMess(false)
    }, 4000);
  });


  return (
    <div>
    {mess &&(
      <div className="mess">Added to favourite</div>
    )}
    <Container className='mx-2 my-3'>


      <Card style={{ width: '15rem', height: '25rem' }} >
        <Link to={`/${movie.id}`} state={{ movie }} >
          <Card.Img variant="top" style={{ height: '17rem' }} src={movie.posterurl} />
        </Link>

        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>

          <input type="button" value="Add to favourite" onClick={postData} className="favourite" />
          <FontAwesomeIcon className="icon" icon={faHeart} />
        </Card.Body>
      </Card>


    </Container>
    </div>
  )
}
export default TopIndianList