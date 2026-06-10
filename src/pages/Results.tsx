import { Trophy, Wrench } from 'lucide-react';

export function Results() {
  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">成績・マシン</h1>
        <p className="text-slate-600 mb-12">Results & Machines</p>

        {/* Competition Results */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
            <Trophy className="text-amber-500" size={32} />
            <h2 className="text-2xl font-bold text-slate-900">大会成績</h2>
          </div>
          
          <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="px-6 py-4 font-bold">年度</th>
                  <th className="px-6 py-4 font-bold">大会名</th>
                  <th className="px-6 py-4 font-bold">総合順位</th>
                  <th className="px-6 py-4 font-bold hidden md:table-cell">特記事項</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-white transition-colors">
                  <td className="px-6 py-4 font-mono font-medium">2025</td>
                  <td className="px-6 py-4">第23回 全日本学生フォーミュラ大会</td>
                  <td className="px-6 py-4 font-bold text-blue-600">総合 15位</td>
                  <td className="px-6 py-4 hidden md:table-cell text-slate-600">エンデュランス完走, 車検一発合格</td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="px-6 py-4 font-mono font-medium">2024</td>
                  <td className="px-6 py-4">第22回 全日本学生フォーミュラ大会</td>
                  <td className="px-6 py-4 font-bold text-slate-700">総合 28位</td>
                  <td className="px-6 py-4 hidden md:table-cell text-slate-600">デザイン審査上位入賞</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Machine Info */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
            <Wrench className="text-slate-600" size={32} />
            <h2 className="text-2xl font-bold text-slate-900">歴代マシン (各年マシン情報)</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 2025 Machine */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden group">
              <div className="aspect-[4/3] bg-slate-200 relative overflow-hidden">
                {/* Placeholder Image */}
                <img 
                  src="https://images.unsplash.com/photo-1595180631623-e4d0faaf6803?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="2025 Machine" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white font-bold px-3 py-1 rounded">2025年モデル</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">F-25 "Alpha"</h3>
                <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                  空力パッケージを大幅に見直し、コーナリングスピードの向上を狙った2025年モデル。
                  新設計のカーボンモノコックを採用し、劇的な軽量化に成功しました。
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-500">
                  <span className="bg-slate-100 px-2 py-1 rounded">重量: 210kg</span>
                  <span className="bg-slate-100 px-2 py-1 rounded">エンジン: 600cc 4気筒</span>
                </div>
              </div>
            </div>

            {/* 2024 Machine */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden group">
              <div className="aspect-[4/3] bg-slate-200 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1547444733-659f8ed974b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="2024 Machine" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-slate-600 text-white font-bold px-3 py-1 rounded">2024年モデル</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">F-24 "Origin"</h3>
                <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                  信頼性を第一に開発されたモデル。徹底した解析により足回りのレイアウトを最適化し、
                  ドライバーの意思に素直に応答するハンドリングを実現しました。
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-500">
                  <span className="bg-slate-100 px-2 py-1 rounded">重量: 235kg</span>
                  <span className="bg-slate-100 px-2 py-1 rounded">エンジン: 450cc 単気筒</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
