const Greeting = (props)=>{
    const {name = "XYZ", age = 18} = props;
    return (
        <div>
            <h1>{name} age is {age}</h1>
        </div>
    )
}
export default Greeting