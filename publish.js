const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://127.0.0.1:1883"); //连接到mqtt服务端
//写个定时器定时每隔3秒定时推送天气信息，此业务可替换为自己的实际需求
setInterval(function() {
  const value = Math.ceil(Math.random() * 40);
  client.publish("temperature", value.toString(), { qos: 0, retain: true });
}, 3000);
