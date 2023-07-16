"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var standalone_1 = require("@adonisjs/core/build/standalone");
var Application_1 = require("@ioc:Adonis/Core/Application");
/*
|--------------------------------------------------------------------------
| Exporting an array of commands
|--------------------------------------------------------------------------
|
| Instead of manually exporting each file from this directory, we use the
| helper `listDirectoryFiles` to recursively collect and export an array
| of filenames.
|
| Couple of things to note:
|
| 1. The file path must be relative from the project root and not this directory.
| 2. We must ignore this file to avoid getting into an infinite loop
|
*/
exports.default = (0, standalone_1.listDirectoryFiles)(__dirname, Application_1.default.appRoot, ['./commands/index']);
//# sourceMappingURL=index.js.map