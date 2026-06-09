import FlipCard from '@/components/FlipCard';

export default function AsNedir() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* FAQ Flip Cards */}
      <section className="px-6 pt-16 pb-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FlipCard 
            frontText="Ankilozan Spondilit nedir?" 
            backText="HLA-B27 genine bağlı olarak gelişen kronik inflamatuvar romatizmal hastalıktır." 
          />
          <FlipCard 
            frontText="Tanısı için kanda hangi değerlere bakılır?" 
            backText="Kanda CRP ve ESR yükselir, HLA-B27 pozitif çıkar." 
          />
          <FlipCard 
            frontText="Tanı için altın standart nedir?" 
            backText="Röntgende bilateral sakroiliak eklem iltihabı gözlenir." 
          />
          <FlipCard 
            frontText="Ankilozan Spondilit görüntüsü nasıldır?" 
            backText="Bambu kamışı görünüm." 
          />
        </div>
      </section>

      {/* Clinical Definition */}
      <section className="px-6 py-8 max-w-5xl mx-auto mb-8">
        <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-red-600">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">📖 Tıbbi Tanımı</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Ankilozan Spondilit (AS), <strong>Spondiloartrit (SpA) ailesinin prototipi</strong> olan, 
            genellikle <strong>HLA-B27 geni</strong> ile güçlü bir genetik ilişki gösteren 
            <strong>kronik, sistemik ve inflamatuar bir romatizma hastalığıdır.</strong>
          </p>
          <div className="bg-slate-50 p-4 rounded italic border-l-4 border-blue-500">
            <p className="text-slate-700">
              <strong>Terminolojik Anlamı:</strong> "Ankylos" (birleşmiş/kaynamış) ve "Spondylos" (omur) 
              kelimelerinden türemiştir.
            </p>
          </div>
        </div>
      </section>

      {/* Pathophysiology */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Karakteristik Özellik */}
          <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-blue-600">
            <h2 className="text-xl font-bold text-slate-900 mb-4">🦴 Karakteristik Özelliği</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-slate-800 mb-2">Tutulumun Yeri:</p>
                <p className="text-slate-700">
                  Temel olarak <strong>aksiyel iskeletin</strong> (Sakroiliak eklem ile omurga eklemleri) 
                  etkilenmesi.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">Başlangıç Süreci:</p>
                <p className="text-slate-700">
                  Disk ve vertebra bileşkesinde kronik iltihaplanma (inflamasyon) ve kıkırdak erozyonu ile başlar.
                </p>
              </div>
            </div>
          </div>

          {/* Hastalık Progresyonu */}
          <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-green-600">
            <h2 className="text-xl font-bold text-slate-900 mb-4">⚡ Hastalık Progresyonu</h2>
            <div className="space-y-3">
              <div className="bg-red-50 p-3 rounded">
                <p className="font-semibold text-red-900 mb-1">1. Adım: Kemik Köprüleri Oluşur</p>
                <p className="text-sm text-red-800">Vücudun hasarı onarmak için ürettiği dikey kemik köprüler (sindesmofit) oluşur.</p>
              </div>
              <div className="bg-orange-50 p-3 rounded">
                <p className="font-semibold text-orange-900 mb-1">2. Adım: Eklem Kaynama</p>
                <p className="text-sm text-orange-800">Sindesmofitler zamanla eklem aralığını tamamen kemikleştirerek ankiloz (kaynama) oluşur.</p>
              </div>
              <div className="bg-amber-50 p-3 rounded">
                <p className="font-semibold text-amber-900 mb-1">3. Adım: Bambu Omurga</p>
                <p className="text-sm text-amber-800">Omurganın esnekliğini yitirip tek bir uzun kemik görünümü almasına "Bambu Omurga" denir.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-blue-50 border-l-4 border-blue-600 px-8 py-8 max-w-5xl mx-auto my-12 rounded">
        <p className="text-slate-800 italic text-lg">
          "AS, ilerleyici olmakla birlikte, erken tanı ve uygun tedavi ile hastalığın ilerlemesi belirgin şekilde yavaşlatılabilir. 
          Hareketsizlik hastalığı hızlandırırken, düzenli egzersiz ise onu yönetebilir."
        </p>
      </section>
    </div>
  );
}
