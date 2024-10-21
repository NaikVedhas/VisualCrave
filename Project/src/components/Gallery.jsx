import { useState } from "react";
import ImageCard from "./ImageCard";
import useFetch from "./useFetch";
import Search from "./Search";
function Gallery() {
  
    //See whenver we search something and submit then that value is stored in term and term gets changed so now when term changes url changes and in usefetch hook we have url as depenecy array so usefetch runs and give the different results
    const [term,setTerm]= useState('');
    const handleSearch = (s) => {
      setTerm(s);
    }

    const {images,error,isloading} = useFetch(`https://pixabay.com/api/?key=46474546-5e82edb11697ba67086783198&q=${term}&image_type=photo&pretty=true`);
  
    return (
      <>
      <Search handle={handleSearch}/>
      <ImageCard images={images} isloading={isloading} error={error} />
      </>
    
  )
}
export default Gallery

//Yaha pe hoga search ka option 