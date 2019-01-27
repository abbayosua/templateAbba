cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-brightness.Brightness",
    "file": "plugins/cordova-plugin-brightness/www/brightness.js",
    "pluginId": "cordova-plugin-brightness",
    "clobbers": [
      "cordova.plugins.brightness"
    ]
  },
  {
    "id": "cordova-plugin-battery-status.battery",
    "file": "plugins/cordova-plugin-battery-status/www/battery.js",
    "pluginId": "cordova-plugin-battery-status",
    "clobbers": [
      "navigator.battery"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-brightness": "0.1.5",
  "cordova-plugin-vibration": "3.1.0",
  "cordova-plugin-battery-status": "2.0.2"
};
// BOTTOM OF METADATA
});