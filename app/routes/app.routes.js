"use strict";
var home_component_1 = require("./../components/home/home.component");
var register_component_1 = require("./../components/register/register.component");
var passPhrase_component_1 = require("./../components/register/registerPassPhrase/passPhrase.component");
exports.routes = [
    { path: '', component: register_component_1.RegisterComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'register/passphrase', component: passPhrase_component_1.RegisterPassPharseComponent }
];
//# sourceMappingURL=app.routes.js.map