const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
console.log("Welcome Again !");
});




 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`
**
سلام عليكم يا قلبي ● Server :
 → Carezma Server..

ّ

بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا حياك الله,

Carezma Server..

الرابط


 https://discord.gg/4s5VNZu]
@everyone
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`
**
سلام عليكم يا قلبي ● Server :
 → Carezma Server
ّ

بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا حياك الله,

Carezma Ser


الرابط


[https://discord.gg/4s5VNZu]
@everyone
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)
})

client.login("NTE0NTQ2NDc3MDQxOTc1Mjk2.Dxz9cA.frnnPKIK-FkXw_ehVau45-yTaJI");
