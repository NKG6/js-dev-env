//This file is not transpiled so use commonJS or ES5
//registering mocha with babel
require('babel-register')();

//disabling webpack css with mocha
require.extensions['.css']=function(){};
