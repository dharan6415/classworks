import React from "react";

export default function ListDemmo()
{
    const college=[{id:1, stuName:"john",age:35},
                    {id:2, stuName:"wick",age:45},
                    {id:3, stuName:"hulk",age:25}]

    const display=college.map((col)=> <li  key={col.id}> {col.age} {col.stuName}</li>)

    return(
        <div style={{background:"green"}}>
            <h1>List of Student</h1>
            
            {display}
        </div>
    )
}