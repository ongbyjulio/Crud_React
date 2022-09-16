import React from "react";


// COntoh Menggunakan Table
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
                
            </tr>
        </thead>
    );
}


// Table Body Manual
// const TableBody = () => {
//     return(
//         <tbody>
//                      <tr>
//                         <td>Ongby</td>
//                         <td>It Support</td>
//                     </tr>                     <tr>
//                         <td>Yuli</td>
//                          <td>Web Developer</td>
//                      </tr>
//                     <tr>
//                          <td>Khan</td>
//                         <td>Cyber Security</td>
//                     </tr>
//                     <tr>
//                          <td>Elco</td>
//                          <td>Full-stack Developer</td>
//                     </tr>
//                  </tbody>
        
//     )
// }

//Table Body Json di App.js
const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
        </tr>
      );  
    });
    return <tbody>{rows}</tbody>
}


const Table = (props) => {
    const { characterData, removeCharacter} = props;
    return (
        <table>
            <TableHeader />
            <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </table>
    )
}


export default Table;


// class Table extends Component {
//     render() {
//         const { characterData } = this.props
//         return(
//             <table>
//                 <TableHeader />
//                 <TableBody characterData={characterData} />
//             </table>
//         )
//     }
// }

// export default Table






// class Table extends React.Component {
//     render(){
//         return(
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Job</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>Ongby</td>
//                         <td>It Support</td>
//                     </tr>
//                     <tr>
//                         <td>Yuli</td>
//                         <td>Web Developer</td>
//                     </tr>
//                     <tr>
//                         <td>Khan</td>
//                         <td>Cyber Security</td>
//                     </tr>
//                     <tr>
//                         <td>Elco</td>
//                         <td>Full-stack Developer</td>
//                     </tr>
//                 </tbody>
//             </table>
//         )
        
//     }
// }
// export default Table