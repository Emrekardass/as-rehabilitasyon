export default function TaniKriterleri() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
          AS Tanısı Nasıl Konulur?
        </h1>
        <p className="text-lg md:text-xl text-slate-600">
          Görüntüleme, laboratuvar testleri ve klinik mobilite ölçümleriyle multidisipliner tanı
        </p>
      </section>

      {/* Imaging and Lab Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          🖼️ Görüntüleme ve Laboratuvar Testleri
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Radyoloji */}
          <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-red-600">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">📸 Radyoloji (Röntgen/MR)</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded">
                <p className="font-semibold text-red-900 mb-2">Hastalığın Başlangıç Yeri:</p>
                <p className="text-red-800">
                  Hastalık neredeyse %100'e yakın oranda <strong>pelvis kemiğinde başlar.</strong>
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded">
                <p className="font-semibold text-orange-900 mb-2">⭐ Altın Standart Bulgu:</p>
                <p className="text-orange-800">
                  <strong>Bilateral Sakroiliit</strong> (iki taraflı sakroiliak eklem iltihabı) tanı için kritiktir.
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded">
                <p className="font-semibold text-amber-900 mb-2">İleri Evreler:</p>
                <p className="text-amber-800">
                  Omurgada dikey sindesmofitler ve <strong>"Bambu Omurga" görüntüsü</strong> saptanır.
                </p>
              </div>
            </div>
          </div>

          {/* Kan ve Genetik Testleri */}
          <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-blue-600">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">🧬 Kan ve Genetik Testleri</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded">
                <p className="font-semibold text-blue-900 mb-2">HLA-B27 Geni:</p>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>✓ AS hastalarının <strong>%90'ından fazlasında pozitif</strong></li>
                  <li>✓ Genetik zemin taramasında incelenir</li>
                  <li>✓ Hastalığa yatkınlığın güçlü göstergesi</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded">
                <p className="font-semibold text-purple-900 mb-2">Enflamasyon Markerları:</p>
                <ul className="space-y-2 text-sm text-purple-800">
                  <li>✓ <strong>CRP</strong> (C-reaktif protein) yüksekliği</li>
                  <li>✓ <strong>ESR</strong> (eritrosit sedimentasyon hızı)</li>
                  <li>✓ Hastalık aktivitesini gösterir</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BASMI Clinical Measurement Tests */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
          🔍 Fizyo-Klinik Ölçüm Testleri (BASMI)
        </h2>
        <p className="text-center text-slate-600 mb-8">
          Fizyoterapistler bu testleri yapısal hasarı ve katılığı ölçmek için kullanır.
        </p>

        <div className="space-y-6">
          {[
            {
              test: "1. Modifiye Schober Testi",
              purpose: "Alt Omurga (Lumbal) Hareketi",
              procedure: "L5 omuru bulup üzerine 10 cm'lik bir hat çizilir. Hasta dizlerini bükmeden öne eğilir.",
              normal: "Mesafe minimum 15 cm'e çıkmalı (5 cm uzama)",
              pathological: "15 cm'in altında kalması patolojiktir"
            },
            {
              test: "2. Lumbal Lateral Fleksiyon",
              purpose: "Yana Eğilme (Lateral Fleksiyon)",
              procedure: "Hasta sırtı duvara dönükken dizlerini bükmeden yana eğilir. Orta parmağın hareket mesafesi ölçülür.",
              normal: ">10 cm (Normal Delta)",
              pathological: "<10 cm patolojiktir"
            },
            {
              test: "3. Tragus-Duvar ve Oksiput-Duvar Mesafesi",
              purpose: "Boyun Kısıtlılığı ve Baş Postürü",
              procedure: "Hasta topuk-sırt duvara yaslanarak durur. Baş arkası ve kulak ön kıkırdağının duvara uzaklığı ölçülür.",
              normal: "Oksiput-Duvar = 0 cm, Tragus-Duvar ≤15 cm",
              pathological: "Tragus-Duvar mesafesinin artması üst torakal/servikal kısıtlılığı gösterir"
            },
            {
              test: "4. Servikal Rotasyon",
              purpose: "Boyun Dönüşü Kapasitesi",
              procedure: "Boynun sağa ve sola dönme açısı goniometre ile ölçülür.",
              normal: ">70° (hem sağ hem sol)",
              pathological: "<70° kısıtlılığı gösterir"
            },
            {
              test: "5. İntermalleolar Mesafe",
              purpose: "Kalça Mobilitesi ve Adduktör Durumu",
              procedure: "Hasta sırtüstü yatarken bacaklarını iki yana maksimum açar. Ayak bilekleri arası mesafe ölçülür.",
              normal: ">100 cm",
              pathological: "<100 cm kalça eklem daralmasını gösterir (Adduktör spazmı)"
            },
            {
              test: "6. Göğüs Ekspansiyonu Ölçümü",
              purpose: "Göğüs Kafesi Genişleme Kapasitesi (Mezura Testi)",
              procedure: "Mezura 4. interkostal aralık (koltuk altı çizgisi altı) seviyesinden sarılır. Derin nefes alma-verme arasındaki fark ölçülür.",
              normal: ">4-5 cm ekspansiyon",
              pathological: "<4 cm patolojiktir (füzyona bağlı restriktif hastalık işareti)"
            }
          ].map((test, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600">
              <h3 className="text-lg font-bold text-slate-900 mb-2">{test.test}</h3>
              <p className="text-slate-600 italic mb-3"><strong>Amaç:</strong> {test.purpose}</p>
              <div className="bg-slate-50 p-3 rounded mb-4">
                <p className="text-sm text-slate-700"><strong>İşlem:</strong> {test.procedure}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-3 rounded">
                  <p className="text-sm font-semibold text-green-700">✓ Normal:</p>
                  <p className="text-sm text-green-600">{test.normal}</p>
                </div>
                <div className="bg-red-50 p-3 rounded">
                  <p className="text-sm font-semibold text-red-700">✗ Patolojik:</p>
                  <p className="text-sm text-red-600">{test.pathological}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Important Note */}
      <section className="bg-blue-50 border-l-4 border-blue-600 px-8 py-8 max-w-5xl mx-auto my-12 rounded">
        <h3 className="text-xl font-bold text-blue-900 mb-3">📋 Tanı Süreci</h3>
        <p className="text-blue-800">
          AS tanısı laboratuvar, görüntüleme ve fiziksel testlerin <strong>birlikte değerlendirilmesiyle</strong> konulur. 
          Hiçbir tek test tanıya yeterli değildir. Multidisipliner yaklaşım gereklidir.
        </p>
      </section>
    </div>
  );
}
