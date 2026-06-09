export default function Semptomlari() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
          Ankilozan Spondilit Semptomları
        </h1>
        <p className="text-lg md:text-xl text-slate-600">
          Hastalığın Klinik Yansımaları: Aksiyel, Periferik ve Sistemik
        </p>
      </section>

      {/* Section 1: Aksiyel ve Entezit Semptomları */}
      <section className="px-6 py-16 max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          🔴 Aksiyel ve Entezit Semptomları
        </h2>
        <div className="space-y-6">
          {[
            {
              title: "İnflamatuar Bel Ağrısı",
              icon: "⚠️",
              details: [
                "Genellikle 40 yaşın altında başlar",
                "Sinsi ve yavaş başlangıçlı, en az 3 ay devam eder",
                "KLİNİK İMZA: Hareket/egzersiz ile AZALIR, istirahatle KÖTÜLEŞİR",
                "Mekanik ağrıdan en güçlü fark bu ayrımdır"
              ],
              highlight: true
            },
            {
              title: "Uzun Süren Sabah Tutukluğu",
              icon: "🌅",
              details: [
                "Sabahları uyanınca veya uzun süre hareketsiz kalınca oluşur",
                "30 dakikadan UZUN süren (genellikle saatlerce)",
                "Hareket ve aktivite başlayınca iyileşir",
                "Hastalık aktivitesinin en güçlü göstergesi"
              ]
            },
            {
              title: "Gece Ağrısı",
              icon: "🌙",
              details: [
                "Gecenin ikinci yarısında hastalığı uykudan uyandırır",
                "Şiddetli ve rahatsız edici",
                "Yatış pozisyonuyla ilişkili olabilir"
              ]
            },
            {
              title: "Alternan Kaba Et Ağrısı",
              icon: "↔️",
              details: [
                "Sakroiliak eklem tutulumuna bağlı",
                "Sağ ve sol kalça arasında yer değiştiren ağrı",
                "Her iki taraf simetrik değildir"
              ]
            },
            {
              title: "Entezit Ağrıları",
              icon: "🦶",
              details: [
                "Tendon, bağ ve fasyanın kemiğe yapıştığı yerlerde inflamasyon (entezis)",
                "En sık: Aşil tendonu ve Plantar fasya",
                "Sabah ilk adımlarda şiddetli topuk ağrısı",
                "Ayakkabı giyerken zorlanma"
              ]
            }
          ].map((symptom, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${
                symptom.highlight ? "border-red-600 bg-red-50" : "border-slate-400"
              }`}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl">{symptom.icon}</span>
                <h3 className="text-xl font-bold text-slate-900">{symptom.title}</h3>
              </div>
              <ul className="space-y-2">
                {symptom.details.map((detail, i) => (
                  <li key={i} className="text-slate-700 flex gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Postüral Değişiklikler */}
      <section className="px-6 py-16 max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          🧍 Postüral Değişiklikler (İleri Evreler)
        </h2>
        <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-orange-600">
          <p className="text-slate-700 mb-6">
            İlerleyen evrelerde kas spazmı ve inflamasyon sonucu <strong>zincirleme reaksiyon</strong> gelişerek 
            klasik <strong>"Soru İşareti (?)" Postürü</strong> oluşur:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Lumbal Lordoz Düzleşir", desc: "Bel kavsinin kaybı", icon: "📉" },
              { title: "Torakal Kifoz Artır", desc: "Sırt kamburlaşması (dramatik)", icon: "🏔️" },
              { title: "Baş Öne Yer Değiştirir", desc: "Boyun hiperekstansiyona gider", icon: "📍" },
              { title: "Kalça-Diz Fleksiyon", desc: "Dengeyi sağlamak için mecburi bükülme", icon: "🤏" }
            ].map((change, idx) => (
              <div key={idx} className="bg-orange-50 p-5 rounded border border-orange-200">
                <div className="text-3xl mb-2">{change.icon}</div>
                <p className="font-bold text-slate-900">{change.title}</p>
                <p className="text-sm text-slate-600 mt-1">{change.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Sistemik Semptomlar */}
      <section className="px-6 py-16 max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          🫁 Sistemik ve Eklem Dışı Semptomlar
        </h2>
        <div className="space-y-6">
          {[
            {
              title: "Solunum Kısıtlılığı",
              icon: "🫁",
              color: "bg-blue-50 border-blue-600",
              details: [
                "Kaburga eklemlerinin tutulup kilitlenmesiyle oluşur",
                "Göğüs kafesi genişleyemez",
                "Kalp krizini taklit edebilen göğüs ağrıları",
                "Restriktif tip akciğer kapasitesi düşüşü"
              ]
            },
            {
              title: "Göz Tutulumu (Üveit)",
              icon: "👁️",
              color: "bg-green-50 border-green-600",
              details: [
                "En sık görülen eklem dışı bulgudur (%20-30)",
                "Akut anterior üveit",
                "Gözde ağrı, kızarıklık ve ışığa hassasiyet",
                "Acil göz doktoru muayenesini gerektirir"
              ]
            },
            {
              title: "Diğer Sistem Tutulumları",
              icon: "⚡",
              color: "bg-purple-50 border-purple-600",
              details: [
                "Sessiz bağırsak inflamasyonu (Crohn/Ülseratif Kolit öyküsü)",
                "Kardiyovasküler sorunlar (aortit, aort yetmezliği)",
                "Kronik yorgunluk",
                "Sekonder uyku sorunları"
              ]
            }
          ].map((symptom, idx) => (
            <div key={idx} className={`rounded-lg shadow-md p-6 border-l-4 ${symptom.color}`}>
              <div className="flex items-start gap-3 mb-4">
                <span className="text-4xl">{symptom.icon}</span>
                <h3 className="text-xl font-bold text-slate-900">{symptom.title}</h3>
              </div>
              <ul className="space-y-2">
                {symptom.details.map((detail, i) => (
                  <li key={i} className="text-slate-700 flex gap-2">
                    <span className="text-slate-500 font-bold">→</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
