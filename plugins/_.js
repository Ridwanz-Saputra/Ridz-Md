import fs from 'fs'

let handler = async (m, { conn }) => {
	let pfft = `ʜᴀɪ ᴋᴀᴋ, ꜱᴇʙᴇʟᴜᴍ ᴋᴇ ᴍᴇɴᴜ ꜰɪᴛᴜʀ ᴋᴜ ʜᴀʀᴀᴘ ᴅɪ ʙᴀᴄᴀ ʏᴀ ʀᴜʟᴇꜱ ᴘᴇɴɢɢᴜɴᴀᴀɴ ʙᴏᴛɴʏᴀ :)
	
1. ᴅɪ ʟᴀʀᴀɴɢ ꜱᴘᴀᴍ ʙᴏᴛ
2. ᴅɪ ʟᴀʀᴀɴɢ ᴍᴇɴᴇʟᴘᴏɴ ʙᴏᴛ
3. ᴅɪ ʟᴀʀᴀɴɢ ᴍᴇɴᴇʟᴘᴏɴ ɴᴏ ᴏᴡɴᴇʀ
4. ᴅɪ ʟᴀʀᴀɴɢ ꜱᴘᴀᴍ ᴋᴇ ɴᴏ ᴏᴡɴᴇʀ

ᴋᴇᴛɪᴋ *.ᴀʟʟᴍᴇɴᴜ* ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ

_ɴᴏᴛᴇ: ᴊɪᴋᴀ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ᴛᴀʜᴜ ᴄᴀʀᴀ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ʙᴏᴛ ᴋᴀᴍᴜ ʙɪꜱᴀ ᴋᴇᴛɪᴋ .ᴛᴜᴛᴏʀɪᴀʟ_


`;
conn.sendMessage(m.chat, {
      text: pfft,
      contextInfo: {
      externalAdReply: {
      title: `#ʀɪᴅᴢ-ʙᴏᴛᴢ🇮🇩`,
      body: global.author,
      thumbnailUrl: global.fotonya,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}
handler.command = /^(menu)$/i;

export default handler;