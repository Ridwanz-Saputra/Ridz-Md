import fs from 'fs'

let handler = async (m, { conn }) => {
	let tqto = `Thanks Too :
	
- ShirokamiRyzn

- BochilGamng

- Xct007

- Ekuzika

- Nurutomo

- ImYanXiao

- VynaaChan

- RizalFR

Pengembang: Xyroinee/Zeltoria
`;
	await conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/4804f8c7c04a6fcdc1d8e.jpg' }, caption: tqto }, m)
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(tqto)$/i;

export default handler;

//minimal gk usah di hapus semua namanya kontol tinggal tambahin nama lu apa susahnya yapit
