
import Razorpay from 'razorpay'
export const razorpay = new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID!, key_secret: process.env.RAZORPAY_KEY_SECRET! })
export function verifySignature(orderId: string, paymentId: string, signature: string){
  const crypto = require('crypto')
  const expected = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!).update(orderId+'|'+paymentId).digest('hex')
  return expected === signature
}
