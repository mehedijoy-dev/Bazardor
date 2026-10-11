export const metadata = {
  title: "গোপনীয়তা নীতি | বাজার দর",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-2xl space-y-5 rounded-2xl border border-base-300 bg-base-100 p-6">
      <h1 className="text-2xl font-bold">গোপনীয়তা নীতি</h1>

      <section className="space-y-2">
        <h2 className="font-semibold">আমরা কী তথ্য সংগ্রহ করি</h2>
        <p className="text-base-content/85">
          সাইন আপ বা সাইন ইনের সময় আমরা আপনার নাম, ইমেইল ঠিকানা এবং (Google বা
          GitHub দিয়ে সাইন ইন করলে) প্রোফাইল ছবি সংগ্রহ করি।
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold">তথ্য কীভাবে ব্যবহার করি</h2>
        <p className="text-base-content/85">
          এই তথ্য শুধু আপনার অ্যাকাউন্ট তৈরি, সাইন ইন এবং প্রোফাইল দেখানোর জন্য
          ব্যবহার করা হয়। আমরা আপনার তথ্য বিক্রি করি না বা তৃতীয় পক্ষের সাথে
          শেয়ার করি না।
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold">যোগাযোগ</h2>
        <p className="text-base-content/85">
          বাজার দর একটি শিক্ষামূলক প্রজেক্ট। এই নীতি সম্পর্কে কোনো প্রশ্ন থাকলে
          প্রজেক্টের GitHub রিপোজিটরিতে জানাতে পারেন।
        </p>
      </section>
    </article>
  );
}
