'use strict';

console.log('App.js is running');

var user = {
    name: 'Anil',
    age: 33,
    location: 'Ankara'
};

var getLocation = function getLocation(location) {

    if (location) {
        return React.createElement(
            'p',
            null,
            'Location ',
            location
        );
    }
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age >= 18 && React.createElement(
        'p',
        null,
        'Age:',
        user.age
    ),
    getLocation(user.location)
);
ReactDOM.render(templateTwo, document.querySelector('#app'));
