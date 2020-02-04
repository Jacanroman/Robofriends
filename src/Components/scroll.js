import React from 'react';

/* tenemos que usar children porque dentro de scroll tenemos children
podemos ver esto en archivo App.js
<Scroll>
               <Cardlist robots={filteredRobots}/> 
</Scroll>
*/

const Scroll = (props)=>{
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height:'800px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;