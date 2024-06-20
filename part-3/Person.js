const Person = ({name, age, hobbies}) => {
    let reply;
    // reply = "please go vote!" ? age >= 18 : reply = "you must be 18";
    if(age >= 18) {
        reply = "please go vote!";
     } else {
        reply = "you must be 18";
     }
    
    let displayName = name;
    if(name.length >= 8) displayName = `${name.slice(0,6)}...`

    const hobbyList = [];
    for(let h of hobbies){
        hobbyList.push(<li>{h}</li>)
    }

    return (
        <div class="person">
            <p>Learn some information about this person:</p>
            <h1>{displayName}</h1>
            <h2>Age: {age}</h2>
            <h2>Hobbies:</h2>
            <ul>{hobbyList}</ul>
            <h3>{reply}</h3>
        </div>
    )
}