import { Briefcase, HeartHandshake } from 'lucide-react';

export function Sponsors() {
  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">スポンサー</h1>
        <p className="text-slate-600 mb-12">Sponsors & Partners</p>

        {/* Recruitment Message */}
        <section className="bg-blue-600 text-white p-8 md:p-12 rounded-3xl shadow-lg mb-16 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 opacity-10">
            <HeartHandshake size={300} />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">スポンサー様を募集しています</h2>
            <div className="space-y-4 text-blue-50">
              <p>
                当チームは「実践的なものづくりを通じたエンジニア育成」を理念に掲げ活動しております。
                しかし、フォーミュラカーの開発・製作には多額の費用と高度な技術・設備が必要です。
              </p>
              <p>
                ご協賛いただいた資金は、部品制作、材料費、遠征費として大切に活用させていただきます。
                また、資金面だけでなく、部品加工や技術指導といった形でのご支援も広く受け付けております。
              </p>
              <p className="font-semibold text-white mt-4">
                未来の日本のものづくりを担う私たち学生の挑戦に、どうかお力添えをお願い申し上げます。
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/contact" className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors shadow-md">
                協賛についてのお問い合わせ
              </a>
              <button className="inline-block bg-blue-700 text-white border border-blue-500 font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors">
                スポンサー要項のダウンロード (PDF)
              </button>
            </div>
          </div>
        </section>

        {/* Sponsor List / Logos */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
            <Briefcase className="text-slate-600" size={32} />
            <h2 className="text-2xl font-bold text-slate-900">ご協賛企業様</h2>
          </div>
          <p className="text-slate-600 mb-8">
            日頃より当チームの活動にご支援・ご協力を賜り、厚く御礼申し上げます。（順不同・敬称略）
          </p>

          <div className="space-y-12">
            {/* Platinum */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <span className="w-4 h-4 bg-slate-300 transform rotate-45 inline-block"></span>
                プラチナスポンサー
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-white h-32 rounded-xl flex items-center justify-center border border-slate-200 shadow-sm p-4 hover:shadow-md transition-shadow">
                    <span className="text-slate-400 font-bold text-lg">協賛企業様ロゴ {i}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gold */}
            <div>
              <h3 className="text-xl font-bold text-amber-500 mb-6 flex items-center gap-2">
                <span className="w-4 h-4 bg-amber-400 transform rotate-45 inline-block"></span>
                ゴールドスポンサー
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="bg-white h-24 rounded-lg flex items-center justify-center border border-slate-200 shadow-sm p-4 hover:shadow-md transition-shadow">
                    <span className="text-slate-400 font-medium text-sm">協賛ロゴ</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
