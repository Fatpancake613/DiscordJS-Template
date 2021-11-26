const Discord = require('discord.js');
const client = new Discord.Client();
const pref = "/" //put your own prefix here
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}.`);
  });
  
  client.on('message', message => {
    if (message.author.bot) return;
    
    
    if (message.content.startsWith(pref)) {        const [name, ...args] = message.content.trim().substring(pref.length).split(/\s+/) //Seperating prefix from command and arguments
    console.log(name + " " + args)
    
    
        if (name === 'ping') {
      message.channel.send('Pong!');
    }

    /*
    Syntax on making commands
    if (name === "name_of_command"){
        Now you have options. To respond to them, use message.reply("Message")
        To just send a message, use message.channel.send("Message")
        If you want to check for permissions, use if (message.member.hasPermission("permission")) {
            List of permissions at https://discordjs.guide/popular-topics/permissions.html
        
        }
        
    }
    Here is how you make a kick command. I will be using some things that i never explained but there is a lot of stuff i cant explain because there is so many commands in discord.js

    */
    if (name=="kick") {
        console.log("kick")
        if (!message.member.hasPermission("KICK_MEMBERS")) {
            message.channel.send("You don't have permissions!")
        return
         }
        const member = message.mentions.members.first()
         if (member) {
             member.kick().then(() =>{
                 message.channel.send(`${member} kicked.`)
             }).catch(() => {message.channel.send("I am missing permissions or the person I am kicking has a higher role than me.")})
             
         }
    }
  }});/*Dont touch these 3 brackets, and keep every command inside them. If there is an error that says something of the lines of `name is not defined`,
that likely means you have added an extra "}". */  
client.login("Go to your bot's application and press bot and copy token, paste it here")
