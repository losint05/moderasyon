const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports.run = async(client, message, args) => {

const tagrol = message.guild.roles.cache.find(r => r.id === '818890015190024197')
if(!['818890015224102968', "818890015224102969"].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) 
return message.channel.send(new MessageEmbed().setDescription(`Komutu kullanmak için yetkiniz bulunmamakta.`).setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor('#BLACK')).then(x => x.delete({timeout: 5000}));    
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(!member) return message.channel.send(new MessageEmbed().setDescription(`Geçerli Bir Kullanıcı Etiketlemelisin !`).setColor("BLACK")).then(msg => msg.delete({timeout: 5000}))
if(message.member.roles.highest.position <= member.roles.highest.position) return 
if(member.manageable)  member.setNickname(member.user.username).catch();
let digerroller = [];
member.roles.cache.filter(r => r.id).map(r => {digerroller.push(r.id)})
await member.roles.add('818890015190024197')
await member.roles.add("818890015190024198")
await member.roles.add('818890015199068215')
    message.react("818900828920348712")
message.channel.send(new MessageEmbed().setDescription(`${member} Adlı Kullanıcı ${message.author} Tarafından ${tagrol}'Rolü Verildi `)).then(msg => msg.delete({timeout: 7000}))}
exports.conf = { enabled: true, guildOnly: true , aliases: ["yetki-ver", ""]}
exports.help = { name: "yetkiver"}