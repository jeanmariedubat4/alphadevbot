const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = ";";                      
var prefix1 = "Alpha dev";


client.login("NjAzNTMzMTA0NTgxNDQzNTk1.XTgyFA.VZWw87ly6SdAqq1agtdyomO-oSQ")

client.on("ready", () => { 
  console.log("message?");
  console.log("-1")                
  client.user.setGame(";help || AlphaDev' v1"); 
});
var array1 = [1,2];

var firstElement = array1.shift();

console.log(array1);
// expected output: Array [1,2]

console.log(firstElement);
// expected output: 1
   

client.on("message", message =>{
  if(!message.guild) return
  if(message.content === prefix + "help")
  {
    var embed = new Discord.RichEmbed()
    .setColor('#76D880')
    .setDescription(`
    **Alpha dev V1**
     __Voici la liste des commandes disponbiles :__

    **;legg** -- meme de phoque communistes
    **;ping** -- pong
    **;issou** -- GIF meme
    **;murloc** -- cri saturé du murloc
    **;windowsXP** -- démarrage saturé de windows XP
    **;yeahboy** -- meme mp3 yeah boy
    **;cheh** -- cheh de maskey
    **;KobalaD** -- Hunhuu
    **;kobalaD2** -- partis de la parodie de misterV sur kobalaD
    `)
    return message.channel.send({embed})
  }
})

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "legg"){
        message.channel.send("https://tenor.com/view/monday-wtf-seal-communism-lol-gif-5098714")
    }
    if(message.content === prefix + "ping"){           
        message.channel.send(`pong !
https://tenor.com/view/cats-ping-pong-gif-8942945`)
    }
    if(message.content === prefix + "issou"){
       message.channel.send("https://tenor.com/view/lol-mdr-issou-risistas-xd-gif-7717009")
    }
    if(message.content === ""){
      message.channel.send("")
    }
  if(message.content === "fire")
  {
    message.channel.send("https://tenor.com/view/bts-fake-love-min-yoongi-suga-fire-gif-11849799")
  }
  if(message.content === prefix + "murloc")
  {
    message.channel.send({files :["./Sound_of_a_Murloc.mp3"]})
  }
  if(message.content === prefix + "windowsXP")
  {
    message.channel.send({files :["./Microsoft_Windows_XP_Startup_Sound.mp3"]})
  }
  if(message.content === prefix + "yeahboy")
  {
    message.channel.send({files :["./Yeah_Boy_meme_for_mp3.mp3"]})
  }
  if(message.content === prefix + "yee")
  {
    message.channel.send({files :["./Yee.mp3"]})
  }
  if(message.content === prefix + "cheh")
  {
    message.channel.send({files :["./CHEH_-_MASKEY.mp3"]})
  }
  if(message.content === prefix + "kobalaD")
  {
    message.channel.send({files :["./MISTER_V_IMITE_Koba_LaD.mp3"]})
  }
  if(message.content === prefix + "kobalaD2")
  {
    message.channel.send({files :["./MISTER_V_IMITE_Koba_LaD - 2.mp3"]})
  }
  if(message.content === "YAMETE")
  {
    message.channel.send("**YAMETEEE KUDASAIII SENPAIIIIIIIIIIIIIIIIIII !!!!!!!!!!!!!!!!!!!!!!!!**")
  }
  if(message.content === "Alpha dev sale pute")
  {
    message.channel.send("La seule pute ici c'est ta mère")
  }
  if(message.content === "Alpha dev gros pd")
  {
    message.channel.send("Parle pas d'ton père comme ça gamin")
  }
  if(message.content === "Alpha dev lèche moi les pieds")
  {
    if(message.member.roles.get("605135087008219137"))
    {
      message.channel.send("Oui maitre...")
    }
    else
    {
      message.channel.send("Wola parle bien")
    }
  }
 if(message.content === "bon chiens")
  {
    if(message.member.roles.get("605135087008219137"))
    {
      message.channel.send("Waaf !")
    }
    else
    {
      message.channel.send("C'est toi ma chienne sale soumis")
    }
  }
})
