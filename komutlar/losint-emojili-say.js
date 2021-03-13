const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

if(!["818890015224102970", "818890015190024198"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

let guild = "818890015118983188"; // SUNUCU ID
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
let count = 0;
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
var msg = message;
var üyesayısı = msg.guild.members.cache.size.toString().replace(/ /g, "    ")
var üs = üyesayısı.match(/([0-9])/g)
üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs) {
üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
return {
'0': `<a:aspendos_0:818913821343088680>`,
'1': `<a:aspendos_1:818914059318460436>`,
'2': `<a:aspendos_2:818914149740052551>`,
'3': `<a:aspendos_3:818914236666216478>`,
'4': `<a:aspendos_4:818914335505383465>`,                       
'5': `<a:aspendos_5:818914436533452850>`,
'6': `<a:aspendos_6:818914638536114186>`,
'7': `<a:aspendos_7:818914698400628757>`,
'8': `<a:aspendos_9:818914841313148950>`,
'9': `<a:aspendos_9:818914841313148950>`}[d];})}
  
  
var sessayı = count.toString().replace(/ /g, "    ")
var üs2 = sessayı.match(/([0-9])/g)
sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs2) {
sessayı = sessayı.replace(/([0-9])/g, d => {
return {
'0': `<a:aspendos_0:818913821343088680>`,
'1': `<a:aspendos_1:818914059318460436>`,
'2': `<a:aspendos_2:818914149740052551>`,
'3': `<a:aspendos_3:818914236666216478>`,
'4': `<a:aspendos_4:818914335505383465>`,                       
'5': `<a:aspendos_5:818914436533452850>`,
'6': `<a:aspendos_6:818914638536114186>`,
'7': `<a:aspendos_7:818914698400628757>`,
'8': `<a:aspendos_9:818914841313148950>`,
'9': `<a:aspendos_9:818914841313148950>`}[d];})}

var taglılar = message.guild.roles.cache.get("818890015190024195").members.size
var taglılar = taglılar.toString().replace(/ /g, "    ")
var üs3 = taglılar.match(/([0-9])/g)
taglılar = taglılar.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs3) {
taglılar = taglılar.replace(/([0-9])/g, d => {
return {
'0': `<a:aspendos_0:818913821343088680>`,
'1': `<a:aspendos_1:818914059318460436>`,
'2': `<a:aspendos_2:818914149740052551>`,
'3': `<a:aspendos_3:818914236666216478>`,
'4': `<a:aspendos_4:818914335505383465>`,                       
'5': `<a:aspendos_5:818914436533452850>`,
'6': `<a:aspendos_6:818914638536114186>`,
'7': `<a:aspendos_7:818914698400628757>`,
'8': `<a:aspendos_9:818914841313148950>`,
'9': `<a:aspendos_9:818914841313148950>`}[d];})}
  
var cevirimici = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
var üs4= cevirimici.match(/([0-9])/g)
cevirimici = cevirimici.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs4) {
cevirimici = cevirimici.replace(/([0-9])/g, d => {
return {
'0': `<a:aspendos_0:818913821343088680>`,
'1': `<a:aspendos_1:818914059318460436>`,
'2': `<a:aspendos_2:818914149740052551>`,
'3': `<a:aspendos_3:818914236666216478>`,
'4': `<a:aspendos_4:818914335505383465>`,                       
'5': `<a:aspendos_5:818914436533452850>`,
'6': `<a:aspendos_6:818914638536114186>`,
'7': `<a:aspendos_7:818914698400628757>`,
'8': `<a:aspendos_9:818914841313148950>`,
'9': `<a:aspendos_9:818914841313148950>`}[d];})}

  
  
  
var booster = message.guild.roles.cache.get("818894911667306557").members.size
var booster = booster.toString().replace(/ /g, "    ")
var üs5 = booster.match(/([0-9])/g)
booster = booster.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs5) {
booster = booster.replace(/([0-9])/g, d => {
return {
'0': `<a:aspendos_0:818913821343088680>`,
'1': `<a:aspendos_1:818914059318460436>`,
'2': `<a:aspendos_2:818914149740052551>`,
'3': `<a:aspendos_3:818914236666216478>`,
'4': `<a:aspendos_4:818914335505383465>`,                       
'5': `<a:aspendos_5:818914436533452850>`,
'6': `<a:aspendos_6:818914638536114186>`,
'7': `<a:aspendos_7:818914698400628757>`,
'8': `<a:aspendos_9:818914841313148950>`,
'9': `<a:aspendos_9:818914841313148950>`}[d];})}


  
const embed1 = new Discord.MessageEmbed()
.setColor('PURPLE')
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
 .setDescription(`
** Aspendos Ailesinin Kanatları Altında Toplam** ${üyesayısı} **Üye bulunmakta.** 

** Aktif** ${cevirimici} **Kullanıcı Bulunmakta.** 

** Tagımızı Alarak Ailemize Katılmış** ${taglılar} **Kişi Bulunmakta.**

** Sunucuda Toplam ${booster} Booster Üye Bulunmakta.**

** Ses Kanallarında** ${sessayı} **Kişi Bulunmakta.**`)


msg.channel.send(embed1);

  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}