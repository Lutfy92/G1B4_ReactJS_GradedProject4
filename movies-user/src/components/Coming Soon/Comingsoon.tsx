import { useEffect,useState } from "react"
import { getComingSoon } from "../../services/movies";
import {Spinner,Alert,Row,Col} from 'react-bootstrap';
import IMovie from "../../models/IMovie";
import ComingList from "./ComingList";
const Comingsoon =()=> {
  const [movies,setMovies]=useState<IMovie[]>([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState<null | Error>(null);
  const [searchTitle,setSearchTitle]=useState("");
  
    useEffect(()=>{
      const helper = async()=>{
        try{
          const movies = await getComingSoon();
          setMovies(movies);
        }
        catch(error){
          setError(error as Error);
        }
        finally{
          setLoading(false);
        }
      }
        helper();
  
    },[]);
    return (
      <div>
        <input 
          className="Search-box"
          type="text"
          placeholder='Search ...'
          onChange={(e)=>setSearchTitle(e.target.value)}/>
        {
          loading &&(
            <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          )
        }
        {
          !loading && error &&(
            <Alert  variant="danger">
            {error.message}
          </Alert>
          )
        }
        {!loading && !error &&(
          <Row xs={3} lg={6}>{
          movies
          .filter(value =>{
            if(searchTitle === ""){
              return value;
            }
            else if(
              value.title.toLowerCase().includes(searchTitle.toLowerCase())
              ){
                return value;
              }
            return false;
          })
          .map(
            movie =>(
            <Col  
            key={movie.id}>
            <ComingList movie={movie}/>
            </Col>
          ))}
          </Row>
        )
  }
        </div>
    )
  }
export default Comingsoon