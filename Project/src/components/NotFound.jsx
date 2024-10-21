import {Link} from "react-router-dom"

function NotFound() {
  return (
    <div>
        <div className="flex justify-center items-center text-9xl m-3">Yes its You!</div>
        <div className="flex italic ">
            <Link to=''>
            Go to home
            </Link>
            </div>
    </div>
  )
}
export default NotFound