export default function TedaviEgzersizleri() {
  const exercises = [
    {
      id: 1,
      name: "Yüzüstü Yatış",
      icon: "😴",
      frequency: "Günde 2 seans (Sabah & Akşam)",
      sets: "1 Seans",
      reps: "Pasif 15-20 dakika",
      rest: "Pozisyonda kalmaya devam",
      benefits: ["Omurga hiperekstansiyonunu korur", "Lordozis kaybını engeller", "Göğüs açıklığı sağlar"],
      notes: "Sabah uyanınca ve gece yatarken yapılmalı"
    },
    {
      id: 2,
      name: "Köprü Kurma (Bridging)",
      icon: "🌉",
      frequency: "Günde 2 seans (Sabah & Akşam)",
      sets: "3 Set",
      reps: "10 Tekrar",
      rest: "Yukarıda 3 saniye bekle, set arası 45 sn.",
      benefits: ["Gluteus maksimus güçlendirme", "Kalça ekstensiyonu", "Pelvik stabilite", "Core stabilizasyonu"],
      notes: "Her tekrarda 3 saniye pozisyonda kalın"
    },
    {
      id: 3,
      name: "Çene İçeri (Chin Tuck)",
      icon: "🧬",
      frequency: "Günde 4-5 seans (Masa başında dahil)",
      sets: "2 Set",
      reps: "10 Tekrar",
      rest: "Arkada 5 saniye tut, kontrollü bırak",
      benefits: ["Boyun lordozisini korur", "Baş postürü düzeltme", "Üst omurga mobilitesi"],
      notes: "Çalışma sırasında sık sık tekrarlanabilir"
    },
    {
      id: 4,
      name: "Pelvik Tilt",
      icon: "🔄",
      frequency: "Günde 2 seans (Sabah uyanınca & Gece)",
      sets: "3 Set",
      reps: "12 Tekrar",
      rest: "Yere basarken 5 saniye sıkıca tut",
      benefits: ["Pelvik mobilitesi", "Lumbal lordoz kontrolü", "Core aktivasyonu"],
      notes: "Her tekrarda maksimum kastırma sağlanmalı"
    },
    {
      id: 5,
      name: "Duvarda Esneme",
      icon: "🧘",
      frequency: "Günde 3 seans (Gün içinde sık aralıklarla)",
      sets: "3 Set",
      reps: "3 Tekrar",
      rest: "Germe pozisyonunda 20-30 saniye",
      benefits: ["Göğüs açıklığı", "Pectoral kaslarının esnetilmesi", "Postür iyileştirilmesi"],
      notes: "Zarla değil, nazik şekilde germe yapılmalı"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
          Hareket En Güçlü İlacınızdır
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-6">
          Klinik veriler göstermektedir ki, düzenli ve planlanmış egzersiz AS hastalarının yaşam kalitesini 
          belirgin şekilde artırır.
        </p>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 inline-block">
          <p className="text-green-800 font-semibold">
            ✓ Omurga katılaşmasını yavaşlatır ve postürü korur
          </p>
        </div>
      </section>

      {/* Exercise Table */}
      <section className="px-6 py-16 max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          📋 Egzersiz Planı ve Protokolü
        </h2>
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-red-600 to-red-700 text-white">
                <th className="px-4 py-4 text-left font-bold">Egzersiz Adı</th>
                <th className="px-4 py-4 text-left font-bold">Sıklık</th>
                <th className="px-4 py-4 text-left font-bold">Set × Tekrar</th>
                <th className="px-4 py-4 text-left font-bold">Dinlenme / Süre</th>
              </tr>
            </thead>
            <tbody>
              {exercises.map((ex, idx) => (
                <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-4 py-4 font-semibold text-slate-900">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{ex.icon}</span>
                      <span>{ex.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-slate-700">{ex.frequency}</td>
                  <td className="px-4 py-4 text-slate-700">{ex.sets} × {ex.reps}</td>
                  <td className="px-4 py-4 text-slate-700">{ex.rest}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Exercise Cards */}
      <section className="px-6 py-16 max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          📚 Egzersizlerin Detaylı Açıklaması
        </h2>
        <div className="space-y-8">
          {exercises.map((ex, idx) => {
            const imageMap: { [key: number]: string } = {
              0: '/tedavi-egzersizleri/pron.jpeg',
              1: '/tedavi-egzersizleri/kopru.jpeg',
              2: '/tedavi-egzersizleri/ceneiceri.jpeg',
              3: '/tedavi-egzersizleri/pelviktilt.jpeg',
              4: '/tedavi-egzersizleri/duvardapostur.jpeg'
            };
            return (
            <div key={idx} className="bg-white rounded-lg shadow-md p-8 border-l-4 border-red-600">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-5xl">{ex.icon}</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{ex.name}</h3>
                  <p className="text-slate-600 italic">{ex.notes}</p>
                </div>
              </div>

              {imageMap[idx] && (
                <div className="mb-6 rounded-lg overflow-hidden bg-slate-100">
                  <img 
                    src={imageMap[idx]} 
                    alt={ex.name}
                    className="w-full h-auto object-contain"
                  />
                </div>
              )}

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded">
                  <p className="text-sm font-semibold text-blue-900 mb-1">📅 Sıklık</p>
                  <p className="text-sm text-blue-800">{ex.frequency}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded">
                  <p className="text-sm font-semibold text-purple-900 mb-1">💪 Set & Tekrar</p>
                  <p className="text-sm text-purple-800">{ex.sets} × {ex.reps}</p>
                </div>
                <div className="bg-orange-50 p-4 rounded">
                  <p className="text-sm font-semibold text-orange-900 mb-1">⏱️ Dinlenme</p>
                  <p className="text-sm text-orange-800">{ex.rest}</p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-slate-900 mb-3">✨ Faydaları:</p>
                <ul className="space-y-2">
                  {ex.benefits.map((benefit, i) => (
                    <li key={i} className="text-slate-700 flex gap-2">
                      <span className="text-red-500 font-bold">→</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            );
          })}
        </div>
      </section>

      {/* Important Guidelines */}
      <section className="px-6 py-16 max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          ⚡ Önemli Yönergeler
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded">
            <h3 className="text-lg font-bold text-green-900 mb-3">✅ YAPILMASI GEREKENLER</h3>
            <ul className="space-y-2 text-sm text-green-800">
              <li>✓ Sabah ve akşam düzenli olarak yapın</li>
              <li>✓ Yavaş, kontrollü ve ağrısız hareketler yapın</li>
              <li>✓ Omurga hiperekstansiyonunu koruyun</li>
              <li>✓ Postürü düzeltmeye odaklanın</li>
              <li>✓ Düzenli egzersizin ardından iyileşme beklenmeli</li>
            </ul>
          </div>
          <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded">
            <h3 className="text-lg font-bold text-red-900 mb-3">❌ KESİNLİKLE YAPMAYINIZ</h3>
            <ul className="space-y-2 text-sm text-red-800">
              <li>✗ Ani, hızlı ve zorlayıcı hareketler</li>
              <li>✗ Hiperfleksiyon (omurgayı aşırı eğme)</li>
              <li>✗ Ağrı varsa güç kullanmak</li>
              <li>✗ Manipülasyon veya kütletme</li>
              <li>✗ Alevlenme döneminde ağır egzersiz</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Motivational Quote */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600 px-8 py-8 max-w-5xl mx-auto rounded mb-12">
        <p className="text-slate-800 italic text-lg leading-relaxed">
          "Bir fincan çay içmek kadar günlük olması gereken düzenli egzersiz alışkanlığı, AS hastaları için yaşam kalitesi denklemidir. 
          Erken başla, disiplinli ol, ömür boyu sürdür—hayat kaliten geometrik olarak artacaktır."
        </p>
      </section>
    </div>
  );
}
