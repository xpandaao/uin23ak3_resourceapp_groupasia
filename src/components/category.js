import { resources } from '../resources.js';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function MainContent() {
    let {category} = useParams();
    if (category === undefined) {
        category = "react";
    }
    const [resource, setResource] = useState([]);

    useEffect(() => {
        const fetchResource = () => {
            setResource(resources.filter((x) => {
                return x.category == category;
            }))
        };
        fetchResource();
    }, [category]);

    console.log(resource)

    return(
        <section className="content-section">
            <h2 className="content-section-title">{category}</h2>
            <p className="content-section-text">Her skal det beskrives et par ting</p>
            <ul className="content-section-list">
                {resource.map((item) => (
                    <li className="content-section-list-item" key={item.title}>
                        <a className="content-section-list-link" href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </section>
    )
}