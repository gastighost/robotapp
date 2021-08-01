import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {
    if (true) {
        throw new Error('You have encountered an error!');
    }
    return (
        <div>
            {
            robots.map((robot, i) => {
                return <Card 
                key={i} 
                id={robots[i].id} 
                name={robots[i].name} 
                username={robots[i].username} 
                email={robots[i].email}/>
            })
            }
        </div>
    );
};

export default CardList;