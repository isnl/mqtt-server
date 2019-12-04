const mqtt = require("mqtt");
// const mqtt = require('./node_modules/mqtt/dist/mqtt.min.js')
const client = mqtt.connect("mqtt://127.0.0.1:1883"); //指定服务端地址和端口

client.on("connect", function() {
  console.log("服务器连接成功");
  // connected = client.connected
  client.subscribe("temperature", { qos: 1 }); //订阅主题为test的消息
});
client.on("message", function(top, message) {
  console.log("当前topic：", top);
  console.log('当前温度：',message.toString());
});
