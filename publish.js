var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://127.0.0.1:1883'); //连接到服务端
const data = require("./points.js");

function getPoints() {
  const dataLen = data.length;
  let points = []
  for (let i = 0; i < 10; i++) {
    const randomPoint = data[parseInt(Math.random() * dataLen - 1)];
    const point = {
      "id": i,
      "verticalAccuracy": 10,
      "speed": -1,
      "longitude": randomPoint.lng,
      "horizontalAccuracy": 65,
      "provider": "gps",
      "latitude": randomPoint.lat,
      "accuracy": 65,
      "direction": -1,
      "altitude": 409.93402099609375
    }
    points.push(point);
  }
  return points;
}
setInterval(function () {
  const points = getPoints()
  client.publish('location', JSON.stringify(points), { qos: 0, retain: true });
}, 3000);
