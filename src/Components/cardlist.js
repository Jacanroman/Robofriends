import React from 'react';
import Card from '../Components/card';

const Cardlist = ({ robots }) => {

    const cardComponent = robots.map((user, i) => {
        /* estas lineas son para ver ErrorBouders
        if(true){
            throw new Error('NOOOOOOOOOOO')
        }
        */
        return( 
        <Card
         key={i} 
         id={robots[i].id} 
         name={robots[i].name} 
         email={robots[i].email}
         />
        );
    })
    
    return (
        <div>
            {cardComponent}
        </div>

    );
}

export default Cardlist;
