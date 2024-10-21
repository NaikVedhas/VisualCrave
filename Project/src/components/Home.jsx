import ImageCard from "./ImageCard";
import useFetch from "./useFetch";

const Home = () => {
  const { images, error, isloading } = useFetch(
    `https://pixabay.com/api/?key=46474546-5e82edb11697ba67086783198&q=&image_type=photo&pretty=true`
  );
  return (
    <div>
      <div className="text-9xl mt-9 mx-5 italic pt-6 px-5">VisualCrave </div>
      <div className="mx-5 mt-2 italic py-3 px-7">
        your one stop solution for any image!
      </div>
      <div className="flex justify-center items-center text-3xl p-4">
        View our latest Collection
      </div>
      <ImageCard images={images} isloading={isloading} error={error} />
    </div>
  );
};
export default Home;
