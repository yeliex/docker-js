"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const docker_1 = require("./module/docker");
const containers_1 = require("./module/containers");
class Docker extends docker_1.default {
    static async request() {
    }
    constructor(options) {
        super(options);
        this.Containers = new containers_1.default(options);
    }
}
exports.default = Docker;
//# sourceMappingURL=index.js.map