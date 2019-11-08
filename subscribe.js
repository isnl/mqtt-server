var mqtt = require('mqtt');
// var mqtt = require('./node_modules/mqtt/dist/mqtt.min.js')
var client = mqtt.connect("mqtt://127.0.0.1:1883");   //指定服务端地址和端口

client.on('connect', function () {
    console.log("服务器连接成功");

    // connected = client.connected

    client.subscribe('location', { qos: 1 });//订阅主题为test的消息  
})



client.on('message', function (top, message) {
    console.log('当前topic', top);

    console.log(message.toString());
});

