/*export default function List()
{
    const animals=["dog","cat","lion","tiger"]
    const result=animals.map((ani)=><li>{ani}</li>)
    return(
        <div>
            <ul>
                {result}
            </ul>
        </div>
    )
}*/
export default function List()
{
    const collage=[{id:1, stuName:"sachin", age:26},
                   {id:2, stuName:"surya", age:24},
                   {id:3, stuName:"panvith", age:25},]

    const display=collage.map((col)=><li key={col.id}>{col.stuName} {col.age}</li>)

    return(
        <div>
            <h1>List of Student</h1>
            {display}
        </div>
    )
}