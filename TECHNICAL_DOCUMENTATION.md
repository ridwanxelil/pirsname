# 🔧 Sınav Sistemi - Teknik Dokümantasyon

---

## Mimarı

```
┌─────────────────────────────────────────┐
│          exam_system.html               │
│  (Ana React Bileşeni - Tüm UI'yi       │
│   yönetir)                              │
└──────────────┬──────────────────────────┘
               │
               ├─────────────────────────────────────┐
               │                                     │
        ┌──────▼────────┐            ┌──────────────▼────┐
        │  Menu Page    │            │   Exam Session    │
        │ (Seçim Alanı) │            │ (Soru Gösterimi)  │
        └───────┬────────┘            └──────────────┬────┘
                │                                     │
        ┌───────▼─────────┐         ┌────────────────▼────┐
        │ Database Import │         │  Results Page       │
        │ Excel işleme    │         │ (Sonuç Gösterimi)   │
        │ JS Dosya        │         └────────────────┬────┘
        │ İndirme         │                         │
        └─────────────────┘         ┌─────────────────────┐
                                    │  Questions Database │
                                    │ questions_database  │
                                    │  .js                │
                                    └─────────────────────┘
```

---

## 📁 Dosya Açıklamaları

### `exam_system.html`
Ana HTML dosyası. İçerir:
- React ve Babel CDN bağlantıları
- XLSX.js kütüphanesi (Excel işlemleri)
- Tüm CSS stillerini (inline)
- React bileşeni (ExamSystem)

**Boyut**: ~44 KB  
**Bağımlılıklar**: React 18, Babel, XLSX.js  

### `questions_database.js`
Soru veri tabanı. Özellikleri:
- ES6 export formatında yazılı
- Dış kaynaklardan otomatik oluşturulur
- Her soru için ID, metin, kategori, alt kategori, zorluk, seçenekler, doğru cevap ve açıklama

**Yapı Örneği**:
```javascript
export const questionsDatabase = [
  {
    id: 1,
    text: "Soru",
    category: "Kategori",
    subcategory: "Alt Kategori",
    difficulty: "Zorluk",
    options: ["A", "B", "C", "D"],
    correctAnswer: 0,  // İndeks (0-3)
    explanation: "Açıklama"
  }
];
```

### `sorular_template.xlsx`
Excel şablonu dosyası. İçerir:
- Başlık satırı
- 2 örnek soru
- Formatlı hücreler
- Uygun sütun genişlikleri

---

## 🔄 Veri Akışı

### 1. Sınav Başlatma Akışı

```
Kullanıcı →  Kategori Seçimi  →  Soru Filtreleme  →  Sınav Başlatı
             ↓                      ↓                    ↓
         setSelected           startExam()          setExamQuestions()
         Category              filteredQuestions     setCurrentPage('exam')
```

### 2. Soru Cevaplanması Akışı

```
Kullanıcı Cevap Seçer
         ↓
   handleAnswer(idx)
         ↓
   userAnswers[currentQuestion] = idx (state güncelle)
         ↓
   Buton görünümü değişir (seçili stil uygulanır)
```

### 3. Sonuç Hesaplama Akışı

```
calculateResults()
    ↓
    ├─ Her soru için: userAnswers[idx] === question.correctAnswer ?
    │                  ↓
    │            correct++  ya da  wrong.push()
    │
    └─ Return: { correct, wrong, total }
```

### 4. Excel Import Akışı

```
Dosya Seçimi (handleExcelImport)
    ↓
FileReader ile XLSX oku
    ↓
sheet_to_json() ile JSON dönüştür
    ↓
Her satırı Question objesine dönüştür
    ↓
questionsDatabase'e ekle
    ↓
downloadQuestionsAsJS() çağır
    ↓
JS dosyası otomatik indir
```

---

## 🎨 UI Bileşenleri

### Sayfa Bileşenleri

#### Menu Sayfası (`currentPage === 'menu'`)
- Kategori seçim grid'i
- Alt kategori seçim grid'i (koşullu gösterim)
- Zorluk seçim grid'i
- Soru sayısı seçim grid'i
- İmport/Export butonları

#### Sınav Sayfası (`currentPage === 'exam'`)
- İlerleme göstergesi
- Soru metni
- 4 cevap seçeneği
- Önceki/Sonraki navigationu
- Çıkış butonu

#### Sonuç Sayfası (`currentPage === 'results'`)
- Skor kartları (Doğru/Yanlış/Yüzde)
- Yanlış cevaplar listesi
- Açıklamalar
- Ana menüye dön butonu

---

## 💾 State Yönetimi

### Ana State Değişkenleri

```javascript
// Sayfa Kontrolü
const [currentPage, setCurrentPage] = useState('menu');
// Değerler: 'menu', 'exam', 'results'

// Seçimler
const [selectedCategory, setSelectedCategory] = useState(null);
const [selectedSubcategory, setSelectedSubcategory] = useState(null);
const [selectedDifficulty, setSelectedDifficulty] = useState(null);
const [questionCount, setQuestionCount] = useState(null);
// Değerler: 10, 20, 50, 100, 'unlimited'

// Sınav Durumu
const [examQuestions, setExamQuestions] = useState([]);
const [currentQuestion, setCurrentQuestion] = useState(0);
const [userAnswers, setUserAnswers] = useState({});
// Format: { 0: 1, 1: 3, 2: 0, ... }
// Anahtar: soru indeksi, Değer: seçilen seçenek indeksi (0-3)
```

---

## 🔍 Filtrelleme Mantığı

### Kategori Filtresi
```javascript
let filtered = questionsDatabase;
if (selectedCategory) {
  filtered = filtered.filter(q => q.category === selectedCategory);
}
```

### Alt Kategori Filtresi
```javascript
if (selectedSubcategory) {
  filtered = filtered.filter(q => q.subcategory === selectedSubcategory);
}
```

### Zorluk Filtresi
```javascript
if (selectedDifficulty) {
  filtered = filtered.filter(q => q.difficulty === selectedDifficulty);
}
```

### Soru Sayısı Sınırlaması
```javascript
if (questionCount !== null && questionCount !== 'unlimited') {
  selectedQuestions = filtered.slice(0, questionCount);
}
```

---

## 📊 Sonuç Hesaplama

### Doğru Cevap Kontrolü
```javascript
examQuestions.forEach((q, idx) => {
  const userAnswer = userAnswers[idx];
  if (userAnswer === q.correctAnswer) {
    correct++;
  } else {
    wrong.push({
      question: q,
      userAnswer: q.options[userAnswer],
      correctAnswer: q.options[q.correctAnswer]
    });
  }
});
```

### Başarı Yüzdesi
```javascript
Math.round((correct / total) * 100)
```

---

## 📤 Excel İşlemleri

### İçe Aktarma (Import)

**Giriş Formatı**:
```
| Soru Metni | Kategori | Alt Kategori | Zorluk | Seçenek A | Seçenek B | Seçenek C | Seçenek D | Doğru Cevap | Açıklama |
```

**Dönüşüm Kodu**:
```javascript
const newQuestion = {
  id: nextId,
  text: row['Soru Metni'],
  category: row['Kategori'],
  subcategory: row['Alt Kategori'],
  difficulty: row['Zorluk'],
  options: [row['Seçenek A'], row['Seçenek B'], row['Seçenek C'], row['Seçenek D']],
  correctAnswer: parseInt(row['Doğru Cevap']),
  explanation: row['Açıklama']
};
```

### Dışa Aktarma (Export)

**Çıkış Formatı**: Excel şablonun aynısı

**Kod**:
```javascript
const data = questionsDatabase.map(q => ({
  'Soru Metni': q.text,
  'Kategori': q.category,
  // ... diğer alanlar
}));
const worksheet = XLSX.utils.json_to_sheet(data);
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, 'Sorular');
XLSX.writeFile(workbook, 'sorular.xlsx');
```

---

## 🔐 Veri Doğrulama

### Import Validation
```javascript
if (newQuestion.text && newQuestion.options.every(o => o)) {
  // Geçerli soru
  newQuestions.push(newQuestion);
}
```

Gerekli şartlar:
- ✓ Soru metni boş olmamalı
- ✓ Tüm seçenekler doldurulmalı

---

## 🎨 CSS Stil Değişkenleri

### Renkler
```javascript
const colors = {
  primary: '#667eea',      // Mor-mavi
  secondary: '#764ba2',    // Koyu mor
  success: '#10b981',      // Yeşil
  danger: '#ef4444',       // Kırmızı
  lightGray: '#f0f0f0',    // Açık gri
  border: '#e0e0e0'        // Sınır gri
};
```

### Font Stilleri
```javascript
fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
```

### Animasyonlar
- `slideIn`: 0.3s (sayfa geçişi)
- `fadeIn`: 0.4s (içerik gösterimi)
- `slideUp`: 0.3s (soru gösterimi)

---

## 📱 Responsive Tasarım

### Grid Sistemi
```css
gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))'
/* Tablet ve mobile'da 1-2 sütun, desktop'ta daha fazla */
```

### Mobil Uyumluluğu
- Flexible düzeni
- Touch-friendly butonlar (min 44px)
- Readable font boyutları (min 14px)

---

## ⚡ Performans Optimizasyonları

1. **State Yönetimi**: Sadece gerekli state'ler güncellenir
2. **Filtrelleme**: Hızlı JavaScript array metodları
3. **Rendering**: Koşullu render ile gereksiz DOM güncellemelerinden kaçınılır
4. **CSS**: Inline stillerle harici dosya yükleme yok

---

## 🚀 Genişletme Rehberi

### Yeni Kategori Ekleme

1. Soru veri tabanına yeni kategoriye sahip soru ekle:
```javascript
{
  id: 15,
  text: "Soru",
  category: "Yeni Kategori",
  subcategory: "Alt Kategori",
  difficulty: "Kolay",
  options: ["A", "B", "C", "D"],
  correctAnswer: 0,
  explanation: "Açıklama"
}
```

2. Sistem otomatik olarak `getCategories()` ile yeni kategoriyi algılayacaktır.

### Yeni Zorluk Seviyesi Ekleme

1. Veri tabanında kullan:
```javascript
difficulty: "Çok Zor"
```

2. Sistem otomatik olarak `getDifficulties()` ile yeni seviyeyi algılayacaktır.

### Özel Sınav Türü Ekleme

```javascript
// Örnek: Random soru seçimi
const randomQuestions = questionsDatabase
  .sort(() => Math.random() - 0.5)
  .slice(0, questionCount);
```

---

## 🐛 Debugging İpuçları

### Tarayıcı Konsolu
```javascript
// Tüm soruları kontrol et
console.log(questionsDatabase);

// Belirli kategorideki soruları filtrele
console.log(questionsDatabase.filter(q => q.category === 'Matematik'));

// User cevaplarını kontrol et
console.log(userAnswers);
```

### Common Issues

| Sorun | Çözüm |
|-------|--------|
| Sorular gösterilmiyor | React yüklü mü? XLSX.js CDN'e erişim var mı? |
| Export çalışmıyor | Pop-up engelleme devre dışı mı? |
| Import hata veriyor | Excel formatı doğru mu? Başlıklar eşleşiyor mu? |

---

## 📚 Kütüphane Referansları

### React 18
- `useState`: State yönetimi
- `ReactDOM.createRoot`: Uygulamayı render et

### XLSX.js
- `XLSX.read()`: Dosya oku
- `XLSX.utils.sheet_to_json()`: Excel'den JSON'a dönüştür
- `XLSX.utils.json_to_sheet()`: JSON'dan Excel'e dönüştür
- `XLSX.writeFile()`: Dosyayı indir

---

## 🔗 Kaynak Kodları

- [React Dokümantasyon](https://react.dev)
- [XLSX.js Kütüphanesi](https://sheetjs.com)
- [MDN Web Docs](https://developer.mozilla.org)

---

## ✅ Checklist - Yeni Özellik Eklerken

- [ ] State değişkenleri tanımladım
- [ ] Event handler'ları yazdım
- [ ] Render mantığını kontrol ettim
- [ ] CSS stilleri ekledim
- [ ] Responsive tasarım kontrol ettim
- [ ] Tarayıcıda test ettim
- [ ] Veri doğrulaması ekledim

---

**Versiyon**: 1.0  
**Son Güncelleme**: 2024  
**Geliştirici**: Sınav Sistemi Ekibi
