const mosca = require("mosca");
const MqttServer = new mosca.Server({
  port: 1883
});
MqttServer.on("clientConnected", function (client) {
  //当有客户端连接时的回调.
  console.log("client connected", client.id);
});
/**
 * 监听MQTT主题消息
 * 当客户端有连接发布主题消息时
 **/
MqttServer.on("published", function (packet, client) {
  var topic = packet.topic;
  switch (topic) {
    case "temperature":
      // console.log('message-publish', packet.payload.toString());
      //MQTT可以转发主题消息至其他主题
      //MqttServer.publish({ topic: 'other', payload: 'sssss' });
      break;
    case "other":
      console.log("message-123", packet.payload.toString());
      break;
  }
});

MqttServer.on("ready", function () {
  //当服务开启时的回调
  console.log("mqtt is running...");
});
