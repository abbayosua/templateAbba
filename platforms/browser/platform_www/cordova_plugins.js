cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-brightness/www/brightness.js",
        "id": "cordova-plugin-brightness.Brightness",
        "pluginId": "cordova-plugin-brightness",
        "clobbers": [
            "cordova.plugins.brightness"
        ]
    },
    {
        "file": "plugins/cordova-plugin-vibration/src/browser/Vibration.js",
        "id": "cordova-plugin-vibration.Vibration",
        "pluginId": "cordova-plugin-vibration",
        "merges": [
            "navigator"
        ]
    },
    {
        "file": "plugins/cordova-plugin-vibration/www/vibration.js",
        "id": "cordova-plugin-vibration.notification",
        "pluginId": "cordova-plugin-vibration",
        "merges": [
            "navigator"
        ]
    },
    {
        "file": "plugins/cordova-plugin-battery-status/www/battery.js",
        "id": "cordova-plugin-battery-status.battery",
        "pluginId": "cordova-plugin-battery-status",
        "clobbers": [
            "navigator.battery"
        ]
    },
    {
        "file": "plugins/cordova-plugin-battery-status/src/browser/BatteryProxy.js",
        "id": "cordova-plugin-battery-status.Battery",
        "pluginId": "cordova-plugin-battery-status",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-brightness": "0.1.5",
    "cordova-plugin-vibration": "3.1.0",
    "cordova-plugin-battery-status": "2.0.2"
}
// BOTTOM OF METADATA
});