
import QRCode from 'qrcode'
export async function generateQR(url: string, style: 'classic'|'floral'|'polaroid'= 'classic'){
  const opts = style === 'classic' ? { margin: 2, color: {dark:'#1F1A1C', light:'#FFFFFF'} } : { margin: 4 }
  const dataUrl = await QRCode.toDataURL(url, opts as any)
  return dataUrl
}
