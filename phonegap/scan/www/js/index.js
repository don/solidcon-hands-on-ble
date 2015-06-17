var app = {
   initialize: function() {
       this.bindEvents();
   },
   bindEvents: function() {
       document.addEventListener('deviceready', this.onDeviceReady, false);
   },
   onDeviceReady: function() {
       app.refreshDeviceList();
   },
   refreshDeviceList: function() {
       deviceList.innerHTML = ''; // empty the list
       ble.scan([], 5, app.onDiscoverDevice, app.onError);
   },
   onDiscoverDevice: function(device) {
       var listItem = document.createElement('li');
       listItem.innerHTML = device.name + ' ' + device.id;
       deviceList.appendChild(listItem);
   },
   onError: function(reason) {
       navigator.notification.alert(reason, null, 'Error');
   }
};
