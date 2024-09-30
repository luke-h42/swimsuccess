import { Link } from 'react-router-dom'

function NotFound() {
    return (
      <div className="flex items-center justify-center flex-col h-[calc(100vh-144px)] sm:h-[calc(100vh-108px)] bg-white">
        <h1 className="text-2xl font-bold text-center mb-4 text-baseblack" >Sorry, this page doesn't exist</h1>
        <h2>
            <Link to='/' className="block text-lg font-medium text-neutral-700 mt-2 place-self-end underline hover:text-primary">Return Home</Link>
        </h2>
      </div>
    )
  }
  
  export default NotFound
  