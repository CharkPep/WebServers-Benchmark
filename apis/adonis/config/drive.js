"use strict";
/**
 * Config source: https://git.io/JBt3o
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Env_1 = require("@ioc:Adonis/Core/Env");
var config_1 = require("@adonisjs/core/build/config");
var Application_1 = require("@ioc:Adonis/Core/Application");
/*
|--------------------------------------------------------------------------
| Drive Config
|--------------------------------------------------------------------------
|
| The `DriveConfig` relies on the `DisksList` interface which is
| defined inside the `contracts` directory.
|
*/
exports.default = config_1.driveConfig({
    /*
    |--------------------------------------------------------------------------
    | Default disk
    |--------------------------------------------------------------------------
    |
    | The default disk to use for managing file uploads. The value is driven by
    | the `DRIVE_DISK` environment variable.
    |
    */
    disk: Env_1.default.get('DRIVE_DISK'),
    disks: {
        /*
        |--------------------------------------------------------------------------
        | Local
        |--------------------------------------------------------------------------
        |
        | Uses the local file system to manage files. Make sure to turn off serving
        | files when not using this disk.
        |
        */
        local: {
            driver: 'local',
            visibility: 'public',
            /*
            |--------------------------------------------------------------------------
            | Storage root - Local driver only
            |--------------------------------------------------------------------------
            |
            | Define an absolute path to the storage directory from where to read the
            | files.
            |
            */
            root: Application_1.default.tmpPath('uploads'),
            /*
            |--------------------------------------------------------------------------
            | Serve files - Local driver only
            |--------------------------------------------------------------------------
            |
            | When this is set to true, AdonisJS will configure a files server to serve
            | files from the disk root. This is done to mimic the behavior of cloud
            | storage services that has inbuilt capabilities to serve files.
            |
            */
            serveFiles: true,
            /*
            |--------------------------------------------------------------------------
            | Base path - Local driver only
            |--------------------------------------------------------------------------
            |
            | Base path is always required when "serveFiles = true". Also make sure
            | the `basePath` is unique across all the disks using "local" driver and
            | you are not registering routes with this prefix.
            |
            */
            basePath: '/uploads',
        },
    },
});
//# sourceMappingURL=drive.js.map