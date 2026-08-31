# AlwaysYou - Vercel Par Deploy Kaise Kare (Hinglish Guide)

## Tumhe mujhe keys dene ki zarurat nahi hai! 😊

Main directly Vercel pe deploy nahi kar sakta kyunki mere paas internet access nahi hai.
Lekin maine tumhare liye pura deployment-ready code bana diya hai.

### Step 1: GitHub Par Daalo
1. github.com par jao, New Repository banao - naam `alwaysyou-platform`
2. Is zip ko extract karo aur saari files upload karo
   - GitHub Desktop use karo ya `git push` karo

### Step 2: Vercel Par Import Karo
1. vercel.com par jao, Login karo (GitHub se)
2. "Add New Project" -> Import `alwaysyou-platform` repo
3. Framework: Next.js auto-detect hoga

### Step 3: Environment Variables Daalo (Sabse Important)
Vercel dashboard me "Environment Variables" section me ye daalo:

```
RAZORPAY_KEY_ID = rzp_test_TWEhfFpel1OPrA
RAZORPAY_KEY_SECRET = [tumhara secret jo maine .env me daala hai]
DATABASE_URL = postgresql://... (Supabase/Neon se lo)
NEXTAUTH_SECRET = alwaysyou-secret-2024
NEXTAUTH_URL = https://tumhara-domain.vercel.app
NEXT_PUBLIC_RAZORPAY_KEY_ID = rzp_test_TWEhfFpel1OPrA
```

**DATABASE_URL ke liye:**
- supabase.com ya neon.tech par free Postgres banao
- Connection string copy karke yahan paste karo

### Step 4: Deploy!
"Deploy" button dabao, 2-3 min me live ho jayega!

### Test Karo
Live URL open karo, koi template select karo, payment test karo:
- UPI: success@razorpay
- Card: 4111 1111 1111 1111

### Mujhe Keys Kaise Diye The?
Tumne CSV upload kiya tha, maine .env me daal diya. Vercel par tumhe manually daalna hoga kyunki .env GitHub par nahi jaata (security ke liye).

Koi doubt ho to bolo, main step-by-step help kar dunga!
