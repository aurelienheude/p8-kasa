import React from "react";
import data from "../../logements.json";

const Card = ({id, title, cover }) => {
    return (
        <a href={'/apartment/' + id} className="cardhome">
            <p className="text">{title}</p>
            <img src={cover} alt="" ></img>
        </a>
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