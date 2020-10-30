
const Discord = require('discord.js')
var totalpages = "4"  // Tptal Number of pages (embeds)
var  embedsCOLOR = "#FF1493"  // Replace with desired embed color
var totaltime = '5' // DO NOT CHANGE , to configure replace "5000" in  | }, 5000);|  with your interval in miliseconds.


// PAGE 1
var page1 = new Discord.MessageEmbed()
     .setTitle("**TITLE HERE**")
     .setDescription('DESCRIPTION HERE')
     .addField('NAME HERE','VALUE HERE')
     .addField("NAME HERE","VALUE HERE")
     .setFooter(`AutoPortal | Help Commands will rotate at interval of ${totaltime} Seconds`)
     .setColor(embedsCOLOR)

// PAGE 2
var page2 = new Discord.MessageEmbed()
     .setTitle("**TITLE HERE**")
     .setDescription('DESCRIPTION HERE')
     .addField('NAME HERE','VALUE HERE')
     .addField("NAME HERE","VALUE HERE")
     .setFooter(`AdvancedPortal | Help Commands will rotate at interval of ${totaltime} Seconds`)
     .setColor(embedsCOLOR)

  // PAGE 3

  var page3 = new Discord.MessageEmbed()
     .setTitle("**TITLE HERE**")
     .setDescription('DESCRIPTION HERE')
     .addField('NAME HERE','VALUE HERE')
     .addField("NAME HERE","VALUE HERE")
     .setFooter(`AdvancedPortal | Help Commands will rotate at interval of ${totaltime} Seconds`)
     .setColor(embedsCOLOR)

// PAGE 4
   var page4 = new Discord.MessageEmbed()
     .setTitle("**TITLE HERE**")
     .setDescription('DESCRIPTION HERE')
     .addField('NAME HERE','VALUE HERE')
     .addField("NAME HERE","VALUE HERE")
     .setFooter(`AdvancedPortal | Help Commands will rotate at interval of ${totaltime} Seconds`)
     .setColor(embedsCOLOR)

// EXPIRE
      var expiredPage = new Discord.MessageEmbed()
      .setTitle("**TITLE HERE**")
      .setDescription('DESCRIPTION HERE')
      .addField('NAME HERE','VALUE HERE')
      .addField("NAME HERE","VALUE HERE")
      .setColor(embedsCOLOR)
   menuLoader = await message.channel.send(page1)
   setTimeout(() => {
   menuLoader.edit(page2);
  }, 5000);
  setTimeout(() => {
   menuLoader.edit(page3);
  }, 10000);
  setTimeout(() => {
   menuLoader.edit(page4);
  }, 15000);
   setTimeout(() => {
   menuLoader.edit(expiredPage)
   }, 20000);
