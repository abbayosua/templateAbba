cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-brightness.Brightness",
    "file": "plugins/cordova-plugin-brightness/www/brightness.js",
    "pluginId": "cordova-plugin-brightness",
    "clobbers": [
      "cordova.plugins.brightness"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-brightness": "0.1.5",
  "cordova-plugin-vibration": "3.1.0"
};
// BOTTOM OF METADATA
});