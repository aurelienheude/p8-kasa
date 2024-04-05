import React from "react";
import data from "../../logements.json";
import { Link } from "react-router-dom";

const Card = ({id, title, cover }) => {
    return (
        <Link to={'/apartment/' + id} className="cardhome">
            <p className="text">{title}</p>
            <img src={cover} alt="" ></img>
        </Link>
    );
};

export const CardList = () => {
    return (
        <>
            {
                data.map((item, i) => <Card id={item.id} title={item.title} cover={item.cover} key={i} />)
            }
        </>
    );
};