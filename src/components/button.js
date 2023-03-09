import { Link } from "react-router-dom";
export function Button() {
    return(
        <nav className="category-nav">
            <Link className="category-nav-button" to="/">React</Link>
            <Link className="category-nav-button" to="/css">CSS</Link>
            <Link className="category-nav-button" to="/javascript">Javascript</Link>
            <Link className="category-nav-button" to="/headless-cms">Headless CMS</Link>
            <Link className="category-nav-button" to="/html">HTML</Link>
        </nav>
    )
}