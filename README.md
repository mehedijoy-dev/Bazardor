# 🛒 বাজার দর (BazarDor)

বাজার দর হলো একটি বাংলা মার্কেট প্রাইস ওয়েবসাইট, যেখানে চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার আজকের দাম এক নজরে দেখা যায়। বাজারভিত্তিক সর্বনিম্ন, সর্বোচ্চ ও গড় দাম এবং গতকালের তুলনায় দামের পরিবর্তনও দেখা যায়।

**Live Link:** (deploy-er por boshabo)

## 🛠️ Technologies Used

- Next.js (App Router) + TypeScript
- Tailwind CSS + DaisyUI
- Better Auth (Email/Password, Google, GitHub)
- PostgreSQL (Neon)
- react-hot-toast

## ✨ Key Features

1. **লাইভ প্রাইস টিকার:** সব পণ্যের দাম ও ▲/▼ পরিবর্তন নিয়ে অনবরত চলমান স্ট্রিপ
2. **আজকের পরিবর্তন:** সবচেয়ে বেশি দাম বাড়া ও কমা ৬টি করে পণ্যের আলাদা সেকশন
3. **ক্যাটাগরি পেজ:** দাম অনুযায়ী সাজানো (ডিফল্ট / কম থেকে বেশি / বেশি থেকে কম), লোডিং স্কেলেটন ও খালি অবস্থার পেজ
4. **বাজারভিত্তিক বিস্তারিত দাম:** প্রতিটি পণ্যের সর্বনিম্ন, সর্বোচ্চ ও গড় দাম এবং ১২টি বাজারের তুলনা (লগইন প্রয়োজন)
5. **অথেনটিকেশন:** ইমেইল/পাসওয়ার্ড, Google ও GitHub দিয়ে সাইন ইন, প্রোফাইল দেখা ও নাম আপডেট
6. **সম্পূর্ণ রেসপনসিভ:** মোবাইল, ট্যাবলেট ও ডেস্কটপে সঠিকভাবে কাজ করে
7. **বাংলা সংখ্যা ও তারিখ:** সব দাম ও তারিখ বাংলায় দেখানো হয়

## 🚀 Run Locally

```bash
git clone https://github.com/mehedijoy-dev/Bazardor.git
cd Bazardor
npm install
npm run dev
```

`.env.local` ফাইলে এই ভ্যারিয়েবলগুলো দিতে হবে:

```
NEXT_PUBLIC_API_BASE_URL=
DATABASE_URL=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```
