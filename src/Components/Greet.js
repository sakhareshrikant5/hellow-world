import React from 'react'
/*
function Greet(){
    return <h1>Hellow Vishwas</h1>
} */

//const Greet = () => <h1>Hellow Vishwas -Arrow Function</h1>
const Greet = (props) => {
    console.log("------>"+props.name);
    //return <h1>Hello {props.name} as {props.heroName}</h1>

    return (
        <div>
            <h1>Hello {props.name} as {props.heroName}</h1>
            {props.children}
        </div>
    )


}

export default Greet;