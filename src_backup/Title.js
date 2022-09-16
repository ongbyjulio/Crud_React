import React from "react";

class Title extends React.Component {
    constructor(){
        super();
        this.state = {
            title : "Aplikasi React Pertamaku",
            subtitle : "By Ongby"
        }
    }
    
    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.state.subtitle}</p>
            </div>
        );
        
    }
}
// function Header{
//     return (
//         <header>
//         <button onClick={fungsiHandler}>OK</button>
//         </header>
//     );
// }

export default Title;