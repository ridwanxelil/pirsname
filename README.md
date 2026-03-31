# 📚 Sınav Sistemi - Soru Bankası Uygulaması

Modern, interaktif bir soru bankası ve sınav sistemi. Kategorilere göre soru seçimi, Excel ile toplu soru yönetimi ve otomatik veri tabanı oluşturma özellikleri içerir.

---

## ✨ Özellikler

### 1. **Sınav Sistemi**
- ✅ Kategori seçimi
- ✅ Alt kategori seçimi
- ✅ Zorluk seviyesi seçimi (Kolay, Orta, Zor)
- ✅ Soru sayısı seçimi (10, 20, 50, 100, Sınırsız)
- ✅ Dinamik sınav başlatma
- ✅ İlerleme çubuğu
- ✅ Önceki/Sonraki soruya geçiş
- ✅ Sınav sırasında çıkma seçeneği

### 2. **Sonuç Gösterimi**
- 📊 Doğru/Yanlış cevap sayısı
- 📈 Başarı yüzdesi
- ❌ Yanlış cevapların detaylı gösterimi
- 💡 Her soru için açıklama
- 🎯 Kullanıcının cevabı vs. Doğru cevap karşılaştırması

### 3. **Soru Yönetimi**
- 📥 **Excel'den İçe Aktar**: XLSX dosyasından toplu soru ekle
- 📤 **Excel'e Aktar**: Tüm soruları XLSX dosyasına dışa aktar
- 💾 **JS Dosyası İndir**: questions_database.js olarak veri tabanını indir
- 🔄 **Otomatik Güncelleme**: İçe aktarılan sorular otomatik JS dosyasına yazılır

### 4. **Tasarım**
- 🎨 Modern ve responsive arayüz
- 🌈 Gradient arka plan (mor-mavi)
- ⚡ Smooth animasyonlar
- 📱 Mobil cihazlarda da çalışır
- ✨ İnteraktif buton ve geçişler

---

## 🚀 Başlangıç

### Kullanım Adımları

1. **HTML dosyasını açın**: `exam_system.html` dosyasını web tarayıcıda açın
2. **Kategori seçin**: İlk olarak bir kategori seçin (Coğrafya, Matematik, Biyoloji, Bilgisayar)
3. **Alt kategori seçin**: Kategorinin içinden bir alt kategori seçin
4. **Zorluk seviyesi seçin**: Soru zorluğunu seçin (Kolay, Orta, Zor)
5. **Soru sayısı seçin**: Kaç soru çözmek istediğinizi seçin
6. **Sınavı başlatın**: "🚀 Sınavı Başlat" butonuna tıklayın
7. **Soruları cevaplayın**: Her soru için doğru seçeneği seçin
8. **Sonuçları görün**: Sınav bittikten sonra yanlış cevapları inceleyin

---

## 📊 Excel İçe Aktarma

### Format

Excel dosyası aşağıdaki sütunları içermelidir:

| Sütun Adı | Açıklama | Örnek |
|-----------|----------|--------|
| **Soru Metni** | Sorunun tam metni | "Türkiye'nin başkenti neresidir?" |
| **Kategori** | Ana kategori | "Coğrafya" |
| **Alt Kategori** | Alt kategori | "Türkiye" |
| **Zorluk** | Zorluk seviyesi | "Kolay", "Orta", "Zor" |
| **Seçenek A** | İlk seçenek | "İstanbul" |
| **Seçenek B** | İkinci seçenek | "Ankara" |
| **Seçenek C** | Üçüncü seçenek | "İzmir" |
| **Seçenek D** | Dördüncü seçenek | "Bursa" |
| **Doğru Cevap** | Doğru cevabın numarası (0-3) | 1 |
| **Açıklama** | Sorunun açıklaması | "Ankara, 1923'ten beri başkent" |

### İçe Aktarma Adımları

1. Sonu "Sorular" sayfası ismi olan XLSX dosyasını hazırlayın
2. Ana menüde "📥 Excel'den İçe Aktar" butonunu tıklayın
3. Hazırladığınız Excel dosyasını seçin
4. Otomatik olarak sorular veri tabanına eklenecek
5. JS dosyası otomatik indirilecektir

---

## 💾 Veri Tabanı Yapısı

### JavaScript Dosyası Formatı

```javascript
// Soru Veri Tabanı - Otomatik oluşturuldu
export const questionsDatabase = [
  {
    id: 1,
    text: "Soru metni",
    category: "Kategori",
    subcategory: "Alt Kategori",
    difficulty: "Kolay",
    options: ["Seçenek A", "Seçenek B", "Seçenek C", "Seçenek D"],
    correctAnswer: 1,  // 0-3 arası
    explanation: "Açıklama"
  },
  // Daha fazla soru...
];
```

---

## 📁 Dosya Yapısı

```
exam_system/
├── exam_system.html              # Ana HTML dosyası (başlangıç)
├── questions_database.js         # Soru veri tabanı
├── sorular_template.xlsx         # Excel şablonu (örnek)
├── README.md                     # Bu dosya
└── sorular.xlsx                  # Dışa aktarılan sorular (otomatik)
```

---

## 🔧 Teknik Detaylar

### Teknolojiler
- **React 18**: İçeriği dinamik yönetmek için
- **Babel**: JSX dönüşümü için
- **XLSX.js**: Excel dosyası işleme
- **CSS3**: Modern tasarım ve animasyonlar

### Veri Depolama
- Tüm sorular JavaScript dosyası içinde saklanır
- Import/Export işlemleri istemci tarafında yapılır
- Sunucu gerekli değildir

### Tarayıcı Uyumluluğu
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

---

## 🎯 Örnek Senaryolar

### Senaryo 1: Matematik Sınavı (Kolay Seviye)
1. Kategori: **Matematik** seçin
2. Alt Kategori: **Temel İşlemler** seçin
3. Zorluk: **Kolay** seçin
4. Soru Sayısı: **10** seçin
5. Sınavı başlatın

### Senaryo 2: Tüm Coğrafya Soruları
1. Kategori: **Coğrafya** seçin
2. Alt Kategori: Seçili bırakın
3. Zorluk: Seçili bırakın
4. Soru Sayısı: **Sınırsız** seçin
5. Sınavı başlatın

### Senaryo 3: Toplam 50 Orta Zorluk Soru
1. Kategori: Seçili bırakın
2. Alt Kategori: Seçili bırakın
3. Zorluk: **Orta** seçin
4. Soru Sayısı: **50** seçin
5. Sınavı başlatın

---

## 📈 İstatistikler

Varsayılan olarak yüklü soru sayısı: **14 soru**

Kategoriler:
- 🌍 **Coğrafya**: 3 soru (Türkiye, Dünya)
- 🔢 **Matematik**: 4 soru (Temel İşlemler, Geometri)
- 🧬 **Biyoloji**: 4 soru (Hücre, Bitki Fizyolojisi, İnsan Anatomisi, Genetik)
- 💻 **Bilgisayar**: 3 soru (Web Teknolojileri, Programlama)

---

## 🔐 Güvenlik Notları

- ✅ Tüm işlemler tarayıcı içinde yapılır
- ✅ Sunucuya veri gönderilmez
- ✅ Excel dosyaları güvenli şekilde işlenir
- ✅ Açık kaynak kütüphaneler kullanılır

---

## 🐛 Sorun Giderme

### Excel dosyası içe aktarılamıyor
- ✓ Dosya formatının XLSX olduğundan emin olun
- ✓ Başlık satırının doğru olduğundan emin olun
- ✓ Tüm gerekli sütunları doldurun

### Sorular görüntülenmiyor
- ✓ Tarayıcı konsolunu kontrol edin (F12)
- ✓ JavaScript etkinleştirildiğinden emin olun
- ✓ Sayfayı yenileyin (F5)

### Export işlemi çalışmıyor
- ✓ Pop-up engellemeyi devre dışı bırakın
- ✓ Tarayıcı güncelleyin
- ✓ Başka bir tarayıcı deneyin

---

## 📝 Lisans

Bu proje açık kaynak kodludur. İsterseniz kendi ihtiyaçlarına göre değiştirebilir ve kullanabilirsiniz.

---

## 👨‍💼 Destek

Sorularınız veya önerileriniz için lütfen iletişime geçin.

**Versiyon**: 1.0  
**Son Güncelleme**: 2024  
**Dil**: Türkçe ✨

---

## 🎓 Eğitim Amaçlı Kullanım

Bu sistem aşağıdaki alanlarda kullanılabilir:
- 📚 Sınıf yönetim sistemleri
- 🏫 Çevrimiçi eğitim platformları
- 🧑‍🎓 Öğrenci değerlendirme sistemleri
- 💼 Kurumsal eğitim programları
- 🎯 Sınav hazırlık uygulamaları

---

**Herhangi bir soru veya tavsiye için lütfen bilgi verin! 😊**
