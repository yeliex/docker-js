const Docker = require('./lib').default;

Object.defineProperties(Docker, {
    default: {
        value: Docker,
        configurable: false,
        enumerable: false,
    },
});

module.exports = Docker;
