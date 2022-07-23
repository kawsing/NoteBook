let client;

function setup() {
  client = mqtt.connect("wss://mqtt.eclipseprojects.io/mqtt");
  console.log('connecting......');
  client.on('connect', ()=>{
    console.log('connected.');
    client.subscribe("fses/computer")
    client.on("message", function (topic, payload) {
      console.log(payload);
      console.log(document.URL);
      console.log([topic, payload].join(": "));
      // client.end()
    })
    const str = document.URL;
    const words = str.split('?');
    console.log(words[1]);
    client.publish("fses/computer", words[1]);    
  });
}

function draw() {
}