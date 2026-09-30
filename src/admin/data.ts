export const stats = {
  students: 125,
  courses: 12,
  messages: 8,
}

export type AdminMessage = {
  id: number
  name: string
  email: string
  subject: string
  message: string
  time: string
  unread: boolean
}

export const messages: AdminMessage[] = [
  {
    id: 1,
    name: 'Rahim',
    email: 'rahim@gmail.com',
    subject: 'Course সম্পর্কে জানতে চাই',
    message: 'আসসালামু আলাইকুম। সম্পূর্ণ ব্যাচের কোর্স ফি কত এবং কিস্তিতে পেমেন্ট করা যাবে?',
    time: '২ মিনিট আগে',
    unread: true,
  },
  {
    id: 2,
    name: 'Karim',
    email: 'karim01@gmail.com',
    subject: 'ভর্তি সম্পর্কে জানতে চাই',
    message: 'নতুন ব্যাচে ভর্তির শেষ তারিখ কবে? আগে কি ফ্রি ক্লাস দেওয়া হবে?',
    time: '১৫ মিনিট আগে',
    unread: true,
  },
  {
    id: 3,
    name: 'ফারহানা ইসলাম',
    email: 'farhana@gmail.com',
    subject: 'লাইভ ক্লাসের সময়সূচি',
    message: 'লাইভ ক্লাস কখন কখন হয়? আমি কলেজ থেকে ফিরতে দেরি হয়, রেকর্ডিং পাওয়া যাবে?',
    time: '১ ঘণ্টা আগে',
    unread: true,
  },
  {
    id: 4,
    name: 'সাব্বির হোসেন',
    email: 'sabbir@gmail.com',
    subject: 'মডেল টেস্ট ফি সম্পর্কে',
    message: 'শুধু মডেল টেস্ট সিরিজে জয়েন করতে চাই, আলাদা করে ফি আছে?',
    time: '২ ঘণ্টা আগে',
    unread: true,
  },
  {
    id: 5,
    name: 'Nusrat',
    email: 'nusrat.j@gmail.com',
    subject: 'পেমেন্ট কনফার্মেশন',
    message: 'গতকাল বিকাশে পেমেন্ট করেছি, কিন্তু ড্যাশবোর্ডে এখনো দেখাচ্ছে না।',
    time: '৪ ঘণ্টা আগে',
    unread: true,
  },
  {
    id: 6,
    name: 'তানভীর আহমেদ',
    email: 'tanvir@gmail.com',
    subject: 'নোট ডাউনলোড সমস্যা',
    message: 'ফুল নোট PDF ডাউনলোড করতে গেলে error দেখাচ্ছে। সাহায্য করবেন?',
    time: 'গতকাল',
    unread: true,
  },
  {
    id: 7,
    name: 'Mim Akter',
    email: 'mim.akter@gmail.com',
    subject: 'রেফারেল ডিসকাউন্ট',
    message: 'বন্ধুদের রেফার করলে কি ডিসকাউন্ট পাওয়া যাবে? শর্তগুলো জানাবেন।',
    time: 'গতকাল',
    unread: true,
  },
  {
    id: 8,
    name: 'আরিফুল ইসলাম',
    email: 'ariful@gmail.com',
    subject: '২য় পত্রের ক্লাস শুরু',
    message: '২য় পত্রের ক্লাস কবে থেকে শুরু হচ্ছে? সময়সূচি জানালে ভালো হয়।',
    time: '২ দিন আগে',
    unread: true,
  },
  {
    id: 9,
    name: 'Sumaiya',
    email: 'sumaiya@gmail.com',
    subject: 'রিফান্ড পলিসি',
    message: '৭ দিনের মধ্যে কোর্স বাতিল করলে ফি ফেরত পাওয়া যাবে কি?',
    time: '৩ দিন আগে',
    unread: false,
  },
  {
    id: 10,
    name: 'জুবায়ের রহমান',
    email: 'zubayer@gmail.com',
    subject: 'মোবাইল অ্যাপ থাকবে?',
    message: 'অ্যান্ড্রয়েড অ্যাপ থাকলে ক্লাস দেখা সহজ হয়। পরিকল্পনা আছে?',
    time: '৪ দিন আগে',
    unread: false,
  },
]

export const unreadCount = messages.filter((m) => m.unread).length

export type AdminCourse = {
  id: number
  title: string
  price: string
  students: number
  status: 'published' | 'draft'
  updated: string
  color: string
}

export const courses: AdminCourse[] = [
  { id: 1, title: 'HSC মানবিক সম্পূর্ণ ব্যাচ', price: '৳৪,৫০০', students: 48, status: 'published', updated: '28 সেপ্টেম্বর 2026', color: '#3DA9F5' },
  { id: 2, title: 'অর্থনীতি সম্পূর্ণ কোর্স', price: '৳১,৫০০', students: 21, status: 'published', updated: '25 সেপ্টেম্বর 2026', color: '#F5B33D' },
  { id: 3, title: 'সমাজবিজ্ঞান সম্পূর্ণ কোর্স', price: '৳১,৫০০', students: 17, status: 'published', updated: '24 সেপ্টেম্বর 2026', color: '#4ADE80' },
  { id: 4, title: 'ইতিহাস (১ম ও ২য় পত্র)', price: '৳১,২০০', students: 14, status: 'published', updated: '21 সেপ্টেম্বর 2026', color: '#A78BFA' },
  { id: 5, title: 'রাষ্ট্রবিজ্ঞান সম্পূর্ণ কোর্স', price: '৳১,৩০০', students: 9, status: 'published', updated: '19 সেপ্টেম্বর 2026', color: '#5EEAD4' },
  { id: 6, title: 'কারও ভর্তি প্রস্তুতি', price: '৳৯৯৯', students: 26, status: 'published', updated: '18 সেপ্টেম্বর 2026', color: '#FF4B2B' },
  { id: 7, title: 'বাংলা ১ম পত্র কোর্স', price: '৳৯৯৯', students: 6, status: 'draft', updated: '29 সেপ্টেম্বর 2026', color: '#F0566B' },
  { id: 8, title: 'ইংরেজি ১ম পত্র কোর্স', price: '৳৯৯৯', students: 0, status: 'draft', updated: '30 সেপ্টেম্বর 2026', color: '#34D07A' },
  { id: 9, title: 'তথ্য ও যোগাযোগ প্রযুক্তি', price: '৳৭৯৯', students: 11, status: 'published', updated: '15 সেপ্টেম্বর 2026', color: '#00B2FF' },
  { id: 10, title: 'স্বাস্থ্য ও সু-স্বাস্থ্য', price: '৳৭৯৯', students: 8, status: 'published', updated: '12 সেপ্টেম্বর 2026', color: '#FFD43D' },
  { id: 11, title: 'লোক ও সম্পদ', price: '৳৮৯৯', students: 5, status: 'published', updated: '10 সেপ্টেম্বর 2026', color: '#3B82F6' },
  { id: 12, title: 'ইসলাম ও নৈতিক শিক্ষা', price: '৳৮৯৯', students: 7, status: 'draft', updated: '08 সেপ্টেম্বর 2026', color: '#A78BFA' },
]

export type AdminStudent = {
  id: number
  name: string
  email: string
  course: string
  joined: string
  status: 'active' | 'pending'
  color: string
}

export const students: AdminStudent[] = [
  { id: 1, name: 'রাহিম উদ্দিন', email: 'rahim@gmail.com', course: 'HSC মানবিক সম্পূর্ণ ব্যাচ', joined: '28 সেপ্টেম্বর 2026', status: 'active', color: '#3DA9F5' },
  { id: 2, name: 'করিম মিয়া', email: 'karim01@gmail.com', course: 'অর্থনীতি সম্পূর্ণ কোর্স', joined: '27 সেপ্টেম্বর 2026', status: 'active', color: '#F5B33D' },
  { id: 3, name: 'ফারহানা ইসলাম', email: 'farhana@gmail.com', course: 'সমাজবিজ্ঞান সম্পূর্ণ কোর্স', joined: '26 সেপ্টেম্বর 2026', status: 'active', color: '#4ADE80' },
  { id: 4, name: 'সাব্বির হোসেন', email: 'sabbir@gmail.com', course: 'কারও ভর্তি প্রস্তুতি', joined: '25 সেপ্টেম্বর 2026', status: 'pending', color: '#A78BFA' },
  { id: 5, name: 'নুসরাত জাহান', email: 'nusrat.j@gmail.com', course: 'HSC মানবিক সম্পূর্ণ ব্যাচ', joined: '24 সেপ্টেম্বর 2026', status: 'active', color: '#5EEAD4' },
  { id: 6, name: 'তানভীর আহমেদ', email: 'tanvir@gmail.com', course: 'ইতিহাস (১ম ও ২য় পত্র)', joined: '23 সেপ্টেম্বর 2026', status: 'active', color: '#FF4B2B' },
  { id: 7, name: 'মিম আক্তার', email: 'mim.akter@gmail.com', course: 'রাষ্ট্রবিজ্ঞান সম্পূর্ণ কোর্স', joined: '22 সেপ্টেম্বর 2026', status: 'pending', color: '#00B2FF' },
  { id: 8, name: 'আরিফুল ইসলাম', email: 'ariful@gmail.com', course: 'HSC মানবিক সম্পূর্ণ ব্যাচ', joined: '21 সেপ্টেম্বর 2026', status: 'active', color: '#34D07A' },
  { id: 9, name: 'সুমাইয়া আক্তার', email: 'sumaiya@gmail.com', course: 'অর্থনীতি সম্পূর্ণ কোর্স', joined: '20 সেপ্টেম্বর 2026', status: 'active', color: '#F0566B' },
  { id: 10, name: 'জুবায়ের রহমান', email: 'zubayer@gmail.com', course: 'কারও ভর্তি প্রস্তুতি', joined: '19 সেপ্টেম্বর 2026', status: 'active', color: '#FFD43D' },
]
