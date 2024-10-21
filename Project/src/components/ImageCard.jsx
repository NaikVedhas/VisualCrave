const ImageCard = ({ images, isloading, error }) => {
    
  return (
    <>
        {isloading && <div className="text-3xl">Loading..</div>}
        {error && <div className="text-3xl">{error}</div>}
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4 ">
          {images && images.map((i) => (
            <div key={i.id} className="max-w-sm rounded overflow-hidden shadow-xl ">
              <img src={i.webformatURL} alt="Logo" className= {`w-full h-64 `} />
  
              <div className="px-4 py-2">
                <div className="text-xl">
                  Photo by: <strong className="text-blue-600 italic">{i.user}</strong>
                </div>
                <ul>
                  <li>
                    Views: <strong>{i.views}</strong>
                  </li>
                  <li>
                    Likes: <strong>{i.likes}</strong>
                  </li>
                  <li>
                    Downloads: <strong>{i.downloads}</strong>
                  </li>
                </ul>
              </div>
              {i.tags.split(',').map((t,i) => (
                <span key={i} className="bg-gray-400 rounded-full my-2 mx-1 p-1 italic font-semibold">
                  #{t}
                </span>
                ))              
              }
            </div>
          ))}
        </div>
      </>
    );
  };
  export default ImageCard;
  