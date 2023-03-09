import { Link } from "react-router-dom";
export function Button() {
    return(
        <nav className="category-nav">
            <button className="category-nav-button"><Link to="/">React</Link></button>
            <button className="category-nav-button"><Link to="/css">CSS</Link></button>
            <button className="category-nav-button"><Link to="/javascript">Javascript</Link></button>
            <button className="category-nav-button"><Link to="/headless-cms">Headless CMS</Link></button>
            <button className="category-nav-button"><Link to="/html">HTML</Link></button>
        </nav>
    )
}