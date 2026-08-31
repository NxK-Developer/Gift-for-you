# AlwaysYou — Emotional Gifting Platform (India-first)

Production-ready, mobile-first platform inspired by AlwaysYou.in

**Features built:**
- Marketing homepage: emotional hero, categories (Birthday, Invitations, Flipbooks), featured/trending, pricing, 3-step flow (Choose Template -> Personalise Your Love -> Share), Styled QR, FAQ
- Marketplace with filters: category, occasion (birthday, wedding, engagement, proposal, friendship, raksha-bandhan, farewell, festive), price, free/paid, featured/trending/premium/best-value
- Template detail with rating, original price, sale price, discount %, badges, theme presets, section list
- No-code editor: text, dates, images, video, music, reorder, enable/disable, theme/font presets, CTA buttons (RSVP/WhatsApp/Call/Open Gift/Open Gallery/View Venue), mobile/desktop preview, autosave, undo/redo
- Publishing: unique slug, custom slug, password, unlisted, scheduled, expiry, edit-republish, duplicate
- Sharing: unique link, WhatsApp, Telegram, native share, Styled QR (classic/floral/polaroid), PNG/SVG download, OG image
- Hosted pages: surprise story layout, invitation with countdown/map/RSVP, flipbook 3D page curl, music controls
- Dashboard: drafts, published, orders, favorites, coupons, analytics
- Admin: templates CRUD (schema-driven), categories, orders, coupons, homepage merchandising, FAQs, SEO
- Commerce: Razorpay UPI/Cards/NetBanking/Wallets, coupons, free templates, invoice
- Media: S3 signed URLs, private drafts, compression, thumbnails

**Stack:** Next.js 14 App Router, Tailwind, Prisma, PostgreSQL, S3/Cloudinary, Razorpay, NextAuth (email+phone OTP+Google), Resend

**Run:**
1. cp .env.example .env
2. npm install
3. npx prisma db push
4. npm run db:seed
5. npm run dev

**Live Preview:** Open /dist/index.html — fully functional SPA simulating all flows with localStorage.

**Production Architecture:**
- Template engine is schema-driven: adding template = DB row, no code change
- Project lifecycle: draft -> ready_for_checkout -> payment_pending -> paid -> published -> unpublished -> expired -> deleted
- Secure: Zod server validation, payment signature verification, signed uploads, RBAC admin

Built for emotional gifting: warm, cinematic, premium, romantic.
