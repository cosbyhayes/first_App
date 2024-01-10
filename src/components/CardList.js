import React from "react";
import Card from './Card.js';

const CardList = ({ robots }) => {
    const cardComponent = robots.map((user, i) => {
        // Removed the line that throws an error
        return (
         <Card 
            key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}   
            />
        );    
    })
    return (
        <React.StrictMode>
           {cardComponent}
        </React.StrictMode>
    );
}

export default CardList;
