// Code EyesOnMe Component Here



function EyesOnMe(){
    return (
        <button onBlur={e =>{
            console.log("Hey! Eyes on me!")
        }} onFocus={e =>{
            console.log("Good!")
        }}>Eyes on me</button>
    )
}


export default EyesOnMe