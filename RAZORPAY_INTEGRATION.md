# Razorpay Integration - AlwaysYou

Test Keys Integrated from uploaded CSV:
- Key ID: rzp_test_TWEhfFpel1OPrA (safe to expose in frontend)
- Key Secret: stored only in .env server-side

## Frontend Checkout Example
```ts
const options = {
  key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_TWEhfFpel1OPrA",
  amount: amount * 100,
  currency: "INR",
  name: "AlwaysYou",
  description: "Emotional Surprise Website",
  order_id: razorpayOrderId,
  method: { upi: true, card: true, netbanking: true, wallet: true },
  handler: async (response) => {
    await fetch('/api/payments/verify', { method:'POST', body: JSON.stringify(response) })
  },
  theme: { color: '#E11D48' }
}
const rzp = new (window as any).Razorpay(options)
rzp.open()
```

## Backend
- POST /api/payments/create-order -> creates Razorpay order
- POST /api/payments/verify -> verifies signature using QLhhWvNUWWTKhV0gO8VNP1KF equivalent

Test UPI: Use Razorpay test UPI IDs like success@razorpay
