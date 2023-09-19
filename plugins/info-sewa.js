let handler = async (m, { conn }) => {
let sewa = `
❏──「 *Sewa & Prem* 」
│ • *1 Bulan:* 20K
│ • *3 Bulan:* 50K
┠──「 *Pembayaran* 」
│ • *Dana:* [+6285225416745]
❏──────────────๑
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^(sewa|prem|premium)$/i

export default handler