import React from "react";
import { NavLink } from "react-router-dom";
// import FormatPrice from "../Helpers/FormatPrice"

const Project = ({ img }) => {
    // const { id, name, image, price, category } = curElem;
    return (
        <NavLink to={`/singleproduct/${1}`}>
            <div className="card">
                <figure>
                    <img src={img} alt="name" />
                    <figcaption className="caption">House</figcaption>
                </figure>

                <div className="card-data">
                    <div className="card-data-flex">
                        <h3>house</h3>
                        <p className="card-data--price">$ 400000.00 </p>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default Project;