
import './globals.css'
export const metadata = { title: 'AlwaysYou - Bring Smiles To Your Loved Ones', description: 'Create emotional surprise websites, invitations and flipbooks in 5 minutes. 50+ premium templates, styled QR, hosted link.' }
export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body className="bg-[#FFFCF8] text-[#1F1A1C] antialiased">{children}</body></html>
}
