var char = require('chai');
chai.config.includeStack = true;
global.should = chai.should;

chai.use(chai-http);
chai.use(chai-as-promised);
