console.log('App.js is running');

const user = {
    name:'Anil',
    age:33,
    location:'Ankara'
}

const getLocation = (location)=>{

    if (location) {
        return <p>Location {location}</p>;
    } 
}

const templateTwo=(
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age >= 18 && <p>Age:{user.age}</p>}
        {getLocation(user.location)}
    </div>
);
ReactDOM.render(templateTwo, document.querySelector('#app'))