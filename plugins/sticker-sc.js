import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let stiker = await sticker(null, `https://telegra.ph/file/5a9865937843402a24a69.png`, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
} 

handler.customPrefix = /^(.sc|sc|sourcecode)$/i;
handler.command = new RegExp()

export default handler