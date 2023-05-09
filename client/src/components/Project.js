import React from "react";
import { ImLocation } from 'react-icons/im';
import { BsArrowsMove } from 'react-icons/bs';
import { AiFillTags } from 'react-icons/ai';
import { FiLayers } from 'react-icons/fi';
import { NavLink } from "react-router-dom";

const Project = ({ Home }) => {
    const { title, sourceUrl, id } = Home;
    const { floors, location, price, totalarea, packagename } = Home?.ProjectFields;

    return (
        <NavLink to={`/project/${id}`}>
            <div className="card">
                <figure>
                    <img src={sourceUrl} alt="name" />
                    <figcaption className="caption">{packagename}</figcaption>
                </figure>

                <div className="card-data">
                    <div className="card-data-title">
                        <h3>{title}</h3>
                    </div>

                    <div className="card-data-details-flex ">
                        <div className="left">
                            <div className="icon">
                                <ImLocation />
                            </div>
                            <div className="card-mini-details">
                                <p className="card-data--price">Location</p>
                                <h4 className="card-data--price">{location} </h4>
                            </div>
                        </div>

                        <div className="left">
                            <div className="icon">
                                <FiLayers />
                            </div>
                            <div className="card-mini-details layers">
                                <p className="card-data--price">Floors </p>
                                <p className="card-data--price">{floors} </p>
                            </div>
                        </div>
                    </div>

                    <div className="card-data-details-flex ">
                        <div className="left">
                            <div className="icon">
                                <BsArrowsMove />
                            </div>
                            <div className="card-mini-details">
                                <p className="card-data--price">Total Area </p>
                                <h4 className="card-data--price">{totalarea} </h4>
                            </div>
                        </div>

                        <div className="left">
                            <div className="icon">
                                <AiFillTags />
                            </div>
                            <div className="card-mini-details">
                                <p className="card-data--price">Cost </p>
                                <p className="card-data--price">{price} lakhs</p>
                            </div>
                        </div>
                    </div>

                    <div className="Know_more">Know more →</div>

                </div>
            </div>
        </NavLink>
    );
};

export default Project;