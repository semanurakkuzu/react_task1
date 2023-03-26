//The getdata function is imported and the userid information is added.

import getData from './app.js'

let userData = await getData(1);
console.log(userData);