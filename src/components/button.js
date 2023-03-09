import { NavLink } from "react-router-dom";
export function Button() {
    return(
        <nav className="category-nav">
            <NavLink className="category-nav-button" to="/">React</NavLink>
            <NavLink className="category-nav-button" to="/css">CSS</NavLink>
            <NavLink className="category-nav-button" to="/javascript">Javascript</NavLink>
            <NavLink className="category-nav-button" to="/headless-cms">Headless CMS</NavLink>
            <NavLink className="category-nav-button" to="/html">HTML</NavLink>
        </nav>
    )
}