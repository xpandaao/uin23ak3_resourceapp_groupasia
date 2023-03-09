import { NavLink } from "react-router-dom";
export function Button() {
    return(
        <nav className="category-nav">
            <ul className="category-nav-list">
                <li className="category-nav-list-item"><NavLink className="category-nav-button" to="/">React</NavLink></li>
                <li className="category-nav-list-item"><NavLink className="category-nav-button" to="/css">CSS</NavLink></li>
                <li className="category-nav-list-item"><NavLink className="category-nav-button" to="/javascript">Javascript</NavLink></li>
                <li className="category-nav-list-item"><NavLink className="category-nav-button" to="/headless-cms">Headless CMS</NavLink></li>
                <li className="category-nav-list-item"><NavLink className="category-nav-button" to="/html">HTML</NavLink></li>
            </ul>
        </nav>
    )
}