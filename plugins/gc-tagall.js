let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `*𝐌𝐞𝐧𝐬𝐚𝐣𝐞:* ${pesan}`
  let teks =`🫶🏻 Vende o compra cuentas seguras
 Aqui 👉🏻https://chat.whatsapp.com/CCDGO1lIuH3Ggr4nA44cbY\n\n🌩️ ${oi}\n\n🌩️ *𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚:*\n`
  for (let mem of participants) {
  teks += `🏳️ @${mem.id.split('@')[0]}\n`}
  teks += `➤ BOB EL CONSTRUCTOR`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
  handler.admin = true
  handler.group = true
  export default handler