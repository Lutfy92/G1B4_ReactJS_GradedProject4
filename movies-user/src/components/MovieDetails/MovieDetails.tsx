import React from 'react'
import { useLocation } from 'react-router'
import { Card,Nav} from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import {Row,Col} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Movie(state: any) {
  const location = useLocation();
  const movie = location.state.movie;
console.log(movie)



  return (
    <div>
      
      <Nav.Link className="back" as={NavLink} to="/">{" "} <FontAwesomeIcon icon={faArrowLeft}/> Go Back</Nav.Link>
      <Container className='mx-2 my-3'>
        <Card style={{ width: '100rem', height: '30rem' }} >
          <Row>
            
          <Card.Img id="img"  variant="top" className='mx-2  my-3' style={{ width: "20rem", height: '25rem' }}
            src={location.state.movie.posterurl} />
            
          <div style={{width:'80rem', height:'50px'}}>
          <Card.Title className='my-3'>{movie.title}{`(${movie.year})`}</Card.Title>
          <Row xs={2} lg={2} >
            <div style={{width:'150px'}}>
            <Col >Imdb Rating</Col>
            <Col >Content Rating</Col>
            <Col>Average Rating</Col>
            <Col>Duration</Col>
            <Col>Genres</Col>
            <Col>Actors</Col>
            <Col>Release Date</Col>
            <Col>Story line</Col>
            </div>
            <div style={{width:'70rem'}}>
            <Col>{movie.imdbRating}</Col>
            <Col>{movie.contentRating}</Col>
            <Col>{movie.averageRating}</Col>
            <Col>{movie.duration}</Col>
            <Col>{movie.genres}</Col>
            <Col>{movie.actors}</Col>
            <Col>{movie.releaseDate}</Col>
            <Col>{movie.storyline}</Col>
            </div>
          </Row>
          </div>
           
          </Row>
        </Card>
      </Container>
    </div>
  )
}

export default Movie