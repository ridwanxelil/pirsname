// Soru Veri Tabanı - Otomatik oluşturuldu
// Bu dosya questions_database.js olarak kaydedilmelidir
// İçe aktarma: import { questionsDatabase } from './questions_database.js';

export const questionsDatabase = [
  {
    "id": 1,
    "text": "Türkiye'nin başkenti neresidir?",
    "category": "Coğrafya",
    "subcategory": "Türkiye",
    "difficulty": "Kolay",
    "options": ["İstanbul", "Ankara", "İzmir", "Bursa"],
    "correctAnswer": 1,
    "explanation": "Ankara, 1923'ten beri Türkiye'nin başkenti."
  },
  {
    "id": 2,
    "text": "Anadolu'nun en yüksek dağı hangisidir?",
    "category": "Coğrafya",
    "subcategory": "Türkiye",
    "difficulty": "Orta",
    "options": ["Kaçkar Dağı", "Erciyes Dağı", "Aladag", "Suphan Dağı"],
    "correctAnswer": 2,
    "explanation": "Erciyes Dağı 3917 metredir."
  },
  {
    "id": 3,
    "text": "Dünya'nın en yüksek dağı hangisidir?",
    "category": "Coğrafya",
    "subcategory": "Dünya",
    "difficulty": "Kolay",
    "options": ["K2", "Everest", "Kilimanjaro", "Denali"],
    "correctAnswer": 1,
    "explanation": "Mount Everest 8.848 metre yüksekliğe sahiptir."
  },
  {
    "id": 4,
    "text": "2+2 kaçtır?",
    "category": "Matematik",
    "subcategory": "Temel İşlemler",
    "difficulty": "Kolay",
    "options": ["3", "4", "5", "6"],
    "correctAnswer": 1,
    "explanation": "2+2=4"
  },
  {
    "id": 5,
    "text": "15 × 12 kaçtır?",
    "category": "Matematik",
    "subcategory": "Temel İşlemler",
    "difficulty": "Orta",
    "options": ["150", "160", "180", "200"],
    "correctAnswer": 2,
    "explanation": "15 × 12 = 180"
  },
  {
    "id": 6,
    "text": "Pisagor Teoremi nedir?",
    "category": "Matematik",
    "subcategory": "Geometri",
    "difficulty": "Zor",
    "options": ["a+b=c", "a²+b²=c²", "a³+b³=c³", "a/b=c"],
    "correctAnswer": 1,
    "explanation": "Dik üçgende hipotenüsün karesi, diğer iki kenarın kareleri toplamına eşittir."
  },
  {
    "id": 7,
    "text": "Bir dairenin alanı nasıl hesaplanır?",
    "category": "Matematik",
    "subcategory": "Geometri",
    "difficulty": "Orta",
    "options": ["πr", "2πr", "πr²", "πd²"],
    "correctAnswer": 2,
    "explanation": "Daire alanı = πr² (π × yarıçap²)"
  },
  {
    "id": 8,
    "text": "Mitokondri neyin organeli?",
    "category": "Biyoloji",
    "subcategory": "Hücre",
    "difficulty": "Orta",
    "options": ["Çekirdek", "Hücre", "Kalp", "Beyin"],
    "correctAnswer": 1,
    "explanation": "Mitokondri hücrenin enerji fabrikasıdır."
  },
  {
    "id": 9,
    "text": "Fotosentez nedir?",
    "category": "Biyoloji",
    "subcategory": "Bitki Fizyolojisi",
    "difficulty": "Orta",
    "options": ["Işık yayan bir olay", "Bitkinin ışığı enerjiye dönüştürdüğü olay", "Su üreten olay", "Mitokondride gerçekleşen olay"],
    "correctAnswer": 1,
    "explanation": "Fotosentez, bitkiler tarafından ışık enerjisinin kimyasal enerjiye dönüştürüldüğü biyolojik olaydır."
  },
  {
    "id": 10,
    "text": "İnsan vücudunda kaç kemik bulunur?",
    "category": "Biyoloji",
    "subcategory": "İnsan Anatomisi",
    "difficulty": "Kolay",
    "options": ["150", "206", "250", "300"],
    "correctAnswer": 1,
    "explanation": "Erişkin insan vücudunda 206 kemik bulunur."
  },
  {
    "id": 11,
    "text": "DNA'nın tam adı nedir?",
    "category": "Biyoloji",
    "subcategory": "Genetik",
    "difficulty": "Kolay",
    "options": ["Deoxyribose Nucleic Acid", "Deoxyribonucleic Acid", "Deoxynucleic Acid", "Diribonucleic Acid"],
    "correctAnswer": 1,
    "explanation": "DNA'nın tam adı Deoxyribonucleic Acid (Deoksiribonükleik Asit) dir."
  },
  {
    "id": 12,
    "text": "İçerik Yönetim Sistemi'nin İngilizce kısaltması nedir?",
    "category": "Bilgisayar",
    "subcategory": "Web Teknolojileri",
    "difficulty": "Kolay",
    "options": ["CMS", "IYS", "WMS", "DMS"],
    "correctAnswer": 0,
    "explanation": "Content Management System (CMS), web sitesi yönetimi için kullanılan yazılım sistemidir."
  },
  {
    "id": 13,
    "text": "HTML'in anlamı nedir?",
    "category": "Bilgisayar",
    "subcategory": "Web Teknolojileri",
    "difficulty": "Kolay",
    "options": ["Hyper Tool Markup Language", "High Text Mark Language", "HyperText Markup Language", "Hyper Timed Markup Language"],
    "correctAnswer": 2,
    "explanation": "HTML (HyperText Markup Language), web sayfaları oluşturmak için kullanılan işaretleme dilidir."
  },
  {
    "id": 14,
    "text": "Python programlama dili kaç yılında oluşturulmuştur?",
    "category": "Bilgisayar",
    "subcategory": "Programlama",
    "difficulty": "Orta",
    "options": ["1989", "1991", "1993", "1995"],
    "correctAnswer": 1,
    "explanation": "Python, Guido van Rossum tarafından 1989 yılında tasarlanmış, 1991'de ilk versiyonu yayınlanmıştır."
  }
];
