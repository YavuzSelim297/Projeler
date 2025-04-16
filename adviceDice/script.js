// Rastgele tavsiyeleri ve numaralarını tutan bir dizi
const adviceList = [
  { id: 1, text: "Kendine inan." },
  { id: 2, text: "Tutarlı olmayı öğren." },
  { id: 3, text: "Zorluklara kucak aç." },
  { id: 4, text: "Dinlenmek için zaman ayır." },
  { id: 5, text: "Hatalarından ders çıkar." },
  { id: 6, text: "Hayat kısa, anı yaşa." },
  { id: 7, text: "Sabırlı olmayı öğren." },
  { id: 8, text: "Kendini geliştirmek için çabala." },
  { id: 9, text: "Başarı için plan yap." },
  { id: 10, text: "Düşüncelerine güven." },
  { id: 11, text: "Empati kurmayı unutma." },
  { id: 12, text: "İşlerini erteleme." },
  { id: 13, text: "Hayallerine sıkı tutun." },
  { id: 14, text: "Pozitif bir tutum sergile." },
  { id: 15, text: "Daha fazla gülümse." },
  { id: 16, text: "Öğrenmekten asla vazgeçme." },
  { id: 17, text: "Başkalarını dinlemeyi öğren." },
  { id: 18, text: "Korkularını cesaretle karşıla." },
  { id: 19, text: "Kendine vakit ayır." },
  { id: 20, text: "Sağlığına dikkat et." },
  { id: 21, text: "Hedeflerini açıkça belirle." },
  { id: 22, text: "Başkalarını ilham kaynağı olarak gör." },
  { id: 23, text: "Her yeni gün bir fırsattır." },
  { id: 24, text: "Cesur kararlar al." },
  { id: 25, text: "Başkalarını yargılamadan önce düşün." },
  { id: 26, text: "Bir şeyler denemekten korkma." },
  { id: 27, text: "Sadeliği kucakla." },
  { id: 28, text: "Her zaman teşekkür et." },
  { id: 29, text: "Etrafındakilere nazik ol." },
  { id: 30, text: "Zamanını iyi kullan." },
  { id: 31, text: "Şükretmeyi unutma." },
  { id: 32, text: "Hayatındaki küçük şeylerin tadını çıkar." },
  { id: 33, text: "Kendi yolunu çiz." },
  { id: 34, text: "Kararlarında net ol." },
  { id: 35, text: "Başkalarının fikrini dinle ama kendi yolunda ilerle." },
  { id: 36, text: "Başkalarına yardım etmeyi düşün." },
  { id: 37, text: "Başkalarının başarılarını kutla." },
  { id: 38, text: "Hayatta risk almayı öğren." },
  { id: 39, text: "Başkalarına örnek ol." },
  { id: 40, text: "Hedeflerin için sıkı çalış." },
  { id: 41, text: "Kendi mutluluğun için çabala." },
  { id: 42, text: "Hatalarını kabul et." },
  { id: 43, text: "Başarı için sabırlı ol." },
  { id: 44, text: "Başkalarının fikirlerine saygı göster." },
  { id: 45, text: "Hayal etmeyi bırakma." },
  { id: 46, text: "Günün sonunda kendini değerlendir." },
  { id: 47, text: "Başkalarının mutluluğuna katkıda bulun." },
  { id: 48, text: "Zamanını boşa harcama." },
  { id: 49, text: "Daha fazla kitap oku." },
  { id: 50, text: "Kendi değerini bil." },
  { id: 51, text: "Planlı olmayı öğren." },
  { id: 52, text: "Hayatta dengeyi sağla." },
  { id: 53, text: "Başarısızlıktan korkma." },
  { id: 54, text: "Olumlu düşün." },
  { id: 55, text: "Hayatını sadeleştir." },
  { id: 56, text: "Geçmişi serbest bırak." },
  { id: 57, text: "Bağışlayıcı olmayı öğren." },
  { id: 58, text: "Yeni şeyler dene." },
  { id: 59, text: "Olumsuzluklara odaklanma." },
  { id: 60, text: "Sevdiklerinle daha fazla vakit geçir." },
  { id: 61, text: "Hayatta dengeli olmayı öğren." },
  { id: 62, text: "İyilik yapmaktan çekinme." },
  { id: 63, text: "Daha fazla su iç." },
  { id: 64, text: "Hedeflerini yazıya dök." },
  { id: 65, text: "Duygularını ifade et." },
  { id: 66, text: "Herkese karşı nazik ol." },
  { id: 67, text: "İç sesini dinle." },
  { id: 68, text: "Kendine zaman ayır." },
  { id: 69, text: "Zorluklarla yüzleş." },
  { id: 70, text: "Başkalarına destek ol." },
  { id: 71, text: "Kendi hikayeni yaz." },
  { id: 72, text: "Hayatın küçük zevklerini unutma." },
  { id: 73, text: "Bir şeyler öğrenmekten keyif al." },
  { id: 74, text: "Başkalarının görüşlerini dinle." },
  { id: 75, text: "Hayatın anlamını keşfetmeye çalış." },
  { id: 76, text: "Kendine dürüst ol." },
  { id: 77, text: "Sevdiklerine sarılmayı unutma." },
  { id: 78, text: "Hayatta kendine meydan oku." },
  { id: 79, text: "Yeni kültürleri keşfet." },
  { id: 80, text: "Hayatın tadını çıkar." },
  { id: 81, text: "Kendi kararlarını al." },
  { id: 82, text: "Geçmişin seni tutmasına izin verme." },
  { id: 83, text: "Hayatını kendine göre yaşa." },
  { id: 84, text: "Küçük adımlarla ilerle." },
  { id: 85, text: "Başkalarının sınırlarına saygı göster." },
  { id: 86, text: "Her zaman şükret." },
  { id: 87, text: "Kendine inanmayı bırakma." },
  { id: 88, text: "Her günü bir fırsat olarak gör." },
  { id: 89, text: "Daha fazla teşekkür et." },
  { id: 90, text: "Hayatı akışına bırak." },
  { id: 91, text: "Gülmek için bir sebep bul." },
  { id: 92, text: "İç motivasyonunu güçlendir." },
  { id: 93, text: "Başarılı olacağına inan." },
  { id: 94, text: "Her zaman öğrenmeye açık ol." },
  { id: 95, text: "Hayatta sakin kalmayı öğren." },
  { id: 96, text: "Kendi sınırlarını zorla." },
  { id: 97, text: "Başkalarının mutluluğuna katkıda bulun." },
  { id: 98, text: "Kendi yolunda ilerle." },
  { id: 99, text: "Hayatın her anından keyif al." },
  { id: 100, text: "Sevgi dolu olmayı unutma." }
];

  
  // HTML elementlerini seçiyoruz
  const adviceNumber = document.getElementById("advice-number");
  const adviceText = document.getElementById("advice-text");
  const diceButton = document.getElementById("dice-button");
  
  // Butona tıklanınca rastgele bir tavsiye seç
  diceButton.addEventListener("click", () => {
    // Rastgele bir indeks oluştur
    const randomIndex = Math.floor(Math.random() * adviceList.length);
    
    // Rastgele tavsiyeyi seç
    const randomAdvice = adviceList[randomIndex];
    
    // HTML içeriğini güncelle
    adviceNumber.textContent = `TAVSİYE #${randomAdvice.id}`;
    adviceText.textContent = `"${randomAdvice.text}"`;
  });
  