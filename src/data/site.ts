export const site = {
  name: 'চলো শিখি',
  logoSrc: '',
  phoneDisplay: '+৮৮০ ১৭০০-০০০০০০',
  phoneRaw: '+8801700000000',
  email: 'info@choloshikhi.com',
  address: 'ধানমন্ডি, ঢাকা-১২০৯, বাংলাদেশ',
  facebook: 'https://facebook.com/',
  youtube: 'https://youtube.com/',
  whatsappLink: 'https://wa.me/8801700000000',
  messengerLink: 'https://m.me/choloshikhi',
  copyright: '© ২০২৬ চলো শিখি। সর্বস্বত্ব সংরক্ষিত।',
}

export const navLinks = [
  { label: 'হোম', href: '#home' },
  { label: 'কোর্স', href: '#courses' },
  { label: 'রিভিউ/ডকুমেন্ট', href: '#reviews' },
  { label: 'নোটিশ', href: '#notices' },
  { label: 'আমাদের সম্পর্কে', href: '#about' },
  { label: 'যোগাযোগ', href: '#contact' },
]

export const heroCategories = ['ইতিহাস', 'অর্থনীতি', 'সমাজবিজ্ঞান', 'রাষ্ট্রবিজ্ঞান']

export type GalleryItem = { src: string; alt: string; bg: string }

export const galleryItems: GalleryItem[] = [
  { src: 'https://picsum.photos/seed/shikhi-girl-yellow/420/980', alt: 'বই হাতে একজন শিক্ষার্থী', bg: '#FFD43D' },
  { src: 'https://picsum.photos/seed/shikhi-girl-purple/420/1040', alt: 'ক্যাম্যাসের সামনে শিক্ষার্থী', bg: '#A78BFA' },
  { src: 'https://picsum.photos/seed/shikhi-boy-teal/420/980', alt: 'হাসিমুখ কলেজ ছাত্র', bg: '#5EEAD4' },
  { src: 'https://picsum.photos/seed/shikhi-girl-red/420/980', alt: 'নোট কার্ড হাতে শিক্ষার্থী', bg: '#F0483E' },
  { src: 'https://picsum.photos/seed/shikhi-boy-blue/420/1040', alt: 'লাইব্রেরিতে পড়াশোনা করা ছাত্র', bg: '#3B82F6' },
  { src: 'https://picsum.photos/seed/shikhi-girl-green/420/980', alt: 'ব্যাগ কাঁধে কলেজ ছাত্রী', bg: '#4ADE80' },
]

export type Course = {
  id: string
  title: string
  description: string
  image: string
  tag?: string
  lessons: string
  duration: string
  price: string
  oldPrice?: string
}

export const courses: Course[] = [
  {
    id: 'full-batch',
    title: 'HSC মানবিক সম্পূর্ণ ব্যাচ',
    description: 'সব বিষয় একসাথে — লাইভ ক্লাস, সাপ্তাহিক মডেল টেস্ট ও সম্পূর্ণ নোটসহ।',
    image: 'https://picsum.photos/seed/course-full-batch/640/400',
    tag: 'বেস্টসেলার',
    lessons: '২৪০+ লেসন',
    duration: '৯ মাস',
    price: '৳৪,৫০০',
    oldPrice: '৳৬,০০০',
  },
  {
    id: 'economics',
    title: 'অর্থনীতি সম্পূর্ণ কোর্স',
    description: '১ম ও ২য় পত্র পূর্ণাঙ্গভাবে — ধারণা, গণিত ও উত্তর লেখার কৌশল।',
    image: 'https://picsum.photos/seed/course-economics/640/400',
    lessons: '৮০+ লেসন',
    duration: '৩ মাস',
    price: '৳১,৫০০',
    oldPrice: '৳২,০০০',
  },
  {
    id: 'sociology',
    title: 'সমাজবিজ্ঞান সম্পূর্ণ কোর্স',
    description: 'সিলেবাস অনুযায়ী অধ্যায়ভিত্তিক লেকচার ও প্রশ্ন সমাধান।',
    image: 'https://picsum.photos/seed/course-sociology/640/400',
    lessons: '৭৫+ লেসন',
    duration: '৩ মাস',
    price: '৳১,৫০০',
    oldPrice: '৳২,০০০',
  },
  {
    id: 'history',
    title: 'ইতিহাস (১ম ও ২য় পত্র)',
    description: 'তারিখ ও ঘটনার সহজ কৌশল, বছরের প্রশ্নের ব্যাখ্যাসহ পূর্ণ প্রস্তুতি।',
    image: 'https://picsum.photos/seed/course-history/640/400',
    lessons: '৭০+ লেসন',
    duration: '২.৫ মাস',
    price: '৳১,২০০',
    oldPrice: '৳১,৮০০',
  },
  {
    id: 'political',
    title: 'রাষ্ট্রবিজ্ঞান সম্পূর্ণ কোর্স',
    description: 'রাষ্ট্রতত্ত্ব, সরকারব্যবস্থা ও সমকালীন বিষয়াবলি এক ধারায়।',
    image: 'https://picsum.photos/seed/course-political/640/400',
    lessons: '৬৫+ লেসন',
    duration: '২.৫ মাস',
    price: '৳১,৩০০',
    oldPrice: '৳১,৮০০',
  },
  {
    id: 'admission',
    title: 'কারও ভর্তি প্রস্তুতি',
    description: 'MCQ অনুশীলন, সময় ব্যবস্থাপনা ও ফুল মডেল টেস্ট।',
    image: 'https://picsum.photos/seed/course-admission/640/400',
    tag: 'নতুন',
    lessons: '৫০+ লেসন',
    duration: '২ মাস',
    price: '৳৯৯৯',
    oldPrice: '৳১,৫০০',
  },
]

export type Testimonial = {
  name: string
  college: string
  quote: string
  rating: number
  initial: string
  color: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'সাদিয়া আক্তার',
    college: 'ঢাকা রাজউক উদয়ন কলেজ',
    quote:
      'একদম শূন্য থেকে শুরু করে অর্থনীতিতে আমি এখন আত্মবিশ্বাসী। লাইভ ক্লাসের প্রশ্নোত্তর আর নোট দুটোই দারুণ।',
    rating: 5,
    initial: 'সা',
    color: '#3DA9F5',
  },
  {
    name: 'মেহেদী হাসান',
    college: 'চট্টগ্রাম সরকারি কলেজ',
    quote:
      'মডেল টেস্টের ফিডব্যাক সিস্টেম অসাধারণ। প্রতিটা ভুলের ব্যাখ্যা পাওয়া যায়, ভুল আর করি না।',
    rating: 5,
    initial: 'মে',
    color: '#F5B33D',
  },
  {
    name: 'নুসরাত জাহান',
    college: 'রাজশাহী কলেজ',
    quote:
      'সমাজবিজ্ঞানের নোট এত সহজ ভাষায় আগে কখনো পাইনি। সময়ের আগেই সিলেবাস শেষ হয়ে যাচ্ছে।',
    rating: 4,
    initial: 'নু',
    color: '#4ADE80',
  },
]

export const documents = [
  { title: 'HSC মানবিক ফুল নোট (১ম ও ২য় পত্র)', meta: 'PDF · ১২ এমবি' },
  { title: 'সম্পূর্ণ সিলেবাস ২০২৬', meta: 'PDF · ২ এমবি' },
  { title: '১০ বছরের প্রশ্ন ও সমাধান', meta: 'PDF · ২৫ এমবি' },
]

export type Notice = { date: string; title: string; tag: string }

export const notices: Notice[] = [
  {
    date: '২৮ সেপ্টেম্বর ২০২৬',
    title: 'HSC ২০২৭ ব্যাচের ভর্তি চলছে — সীমিত আসন, শুরু ১৫ অক্টোবর',
    tag: 'গুরুত্বপূর্ণ',
  },
  {
    date: '২০ সেপ্টেম্বর ২০২৬',
    title: 'সপ্তাহের মডেল টেস্ট ফলাফল প্রকাশিত — ড্যাশবোর্ড থেকে দেখুন',
    tag: 'ফলাফল',
  },
  {
    date: '১০ সেপ্টেম্বর ২০২৬',
    title: 'ঈদ-এ-মিলাদুন্নবী উপলক্ষে ১২ সেপ্টেম্বর সকল লাইভ ক্লাস বাতিল',
    tag: 'নোটিশ',
  },
  {
    date: '০১ সেপ্টেম্বর ২০২৬',
    title: 'নতুন ব্যাচের ফ্রি ওরিয়েন্টেশন ক্লাস — ০৫ সেপ্টেম্বর রাত ৮টা',
    tag: 'ইভেন্ট',
  },
]

export const stats = [
  { value: '৫০,০০০+', label: 'সক্রিয় শিক্ষার্থী' },
  { value: '১২০+', label: 'ভিডিও লেকচার' },
  { value: '২৫+', label: 'অভিজ্ঞ শিক্ষক' },
  { value: '৪.৯/৫', label: 'গড় রেটিং' },
]

export const features = [
  {
    title: 'লাইভ ইন্টার‍্যাক্টিভ ক্লাস',
    description: 'প্রতিদিন লাইভ ক্লাসে সরাসরি শিক্ষককে প্রশ্ন করো, সমাধান পাও তারই সঙ্গে।',
  },
  {
    title: 'ডাউনলোডযোগ্য নোট',
    description: 'অধ্যায়ভিত্তিক সুন্দর লেখা নোট ও লেকচার স্লাইড যেকোনো ডিভাইসে সংরক্ষণ করো।',
  },
  {
    title: 'সাপ্তাহিক মডেল টেস্ট',
    description: 'প্রতিটি টেস্টের পর বিস্তারিত ফিডব্যাক ও র‍্যাংকিং, দুর্বলতা টের পাও নিজেই।',
  },
  {
    title: '২৪/৭ সাপোর্ট',
    description: 'যেকোনো সময় হোয়াটসঅ্যাপ বা কলে সাপোর্ট টিমের সঙ্গে কথা বলো।',
  },
]
