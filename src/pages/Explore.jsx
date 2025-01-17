import { Link } from "react-router-dom"
import rentImage from '../assets/jpg/rentCategoryImage.jpg'
import sellImage from '../assets/jpg/sellCategoryImage.jpg'

const Explore = () => {
  return (
    <div className="Explore">
      <header>
        <p className="pageHeader">Explore</p>
      </header>
      <main>
        {/* slider */}
          <p className="exploreCategoryHeading">Categories</p>
        <div className="exploreCategories">
          <Link to='/category/rent'>
             <img src={rentImage} alt="rent"  className="exploreCategoryImg"/>
             <p className="exploreCategoryName">Places for Rent</p>
          </Link>
          <Link to='/category/sale'>
             <img src={sellImage} alt="sell"  className="exploreCategoryImg"/>
             <p className="exploreCategoryName">Places for Sale</p>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Explore