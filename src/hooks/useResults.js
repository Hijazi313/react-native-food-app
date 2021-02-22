import React,{useState, useEffect} from 'react'
import yelp from "../api/yelp";

export default () => {
    const [results, setResults ] = useState([]);
    const [errorMessage, setError ] = useState("");
    const searchApi = async (tsearchTerm)=>{
        try{
       const respo =  await (await yelp.get("/search",{
           params:{
               limit:40,
               term:tsearchTerm,
               location: 'san jose'
           }
       })).data;
      setResults(respo.businesses)
    }
    catch(err){
        setError("Something Went wrong")
        }
    }
    useEffect(()=>{
        searchApi('pasta')
    }, [])

    return [searchApi, results, errorMessage]

}