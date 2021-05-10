import React, { useState } from 'react';
import styles from './Color.module.css';

const ColorBox = (props) => {
    const [boxColor, setBoxColor] = useState("")


const [allColors, setAllColors] = useState([])

// const changeHandler = (e) => {
//     setColorName({
//         ...colorName,
//         [e.target.name]: e.target.value
//     })
// }
const submitHandler = (e) => {
    e.preventDefault()
    const boxStyle = {
        backgroundColor: boxColor,
        width: "100px",
        height: "100px",
        border: "1px solid black",
        margin:"20px"
    };
        setAllColors([...allColors, boxStyle])
        
    }

return (
    <>
        <div>
            <form onSubmit={submitHandler} className="col-3 mx-auto mt-5">
                <div className="form-group">
                    <label htmlFor="">Color</label>
                    <input className="form-control" type="text" onChange = {(e)=>setBoxColor(e.target.value)} value={boxColor} />
                    <button className="btn btn-light border mt-2" type="submit">Add</button>
                </div>
            </form>
        </div>
        <div style ={{display:"flex"}}>
        
            {allColors.map((color, idx) => {
                return (<div style= {color} key={idx}/>)

            })}
            
        </div>
    </>
);
}



export default ColorBox;

