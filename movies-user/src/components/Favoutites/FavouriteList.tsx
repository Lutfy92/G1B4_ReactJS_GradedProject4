import React from 'react'
import { Card } from 'react-bootstrap'
import IMovie from '../../models/IMovie';
import {Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


type Props = {
  movie:IMovie
}

function FavouriteList({movie}:Props) {
  const[mess,setMess]=React.useState(false);
  const deleteData=()=>{
    axios.delete(`http://localhost:3001/favourite/${movie.id}`,{})
    .then(res =>console.log(res.data))
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
        <div className="mess">deleted</div>
      )}
    <Container className='mx-2 my-3'>
      <Card style={{ width: '15rem',height: '25rem'  }} >

    <Card.Img variant="top" style={{ height: '17rem' }} src={movie.posterurl}/>
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      
      <button  onClick={deleteData} className='  favourite'>Remove{" "}
      <FontAwesomeIcon className='my-0.5 icon' icon={faXmark} /></button>
    </Card.Body>
  </Card>
  </Container>
  </div>
  )
}

export default FavouriteList