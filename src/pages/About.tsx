import { Users, Crosshair } from 'lucide-react';

export function About() {
  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">サークル概要</h1>
        <p className="text-slate-600 mb-12">About Us</p>

        {/* Club Introduction */}
        <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Users className="text-blue-600" size={32} />
            <h2 className="text-2xl font-bold text-slate-900">サークル紹介</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-600">
            <p>
              私たちは、〇〇大学公認の学生フォーミュラチームです。
              「自らの手で、最速を創り出す」をモットーに、学生主体でフォーミュラカーの設計・製作・テスト走行を行っています。
            </p>
            <p>
              大会での勝利はもちろんのこと、そのプロセスを通じて、実践的なエンジニアリングスキル、プロジェクトマネジメント、チームワークを学ぶことを目的としています。
            </p>
          </div>
        </section>

        {/* Activity Info */}
        <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <Crosshair className="text-blue-600" size={32} />
            <h2 className="text-2xl font-bold text-slate-900">活動情報</h2>
          </div>
          
          <dl className="divide-y divide-slate-100">
            <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <dt className="font-bold text-slate-900">活動日時</dt>
              <dd className="md:col-span-2 text-slate-600">平日 17:00〜20:00 / 土曜 10:00〜17:00</dd>
            </div>
            <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <dt className="font-bold text-slate-900">活動場所</dt>
              <dd className="md:col-span-2 text-slate-600">〇〇地区 工作センター / ガレージ</dd>
            </div>
            <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <dt className="font-bold text-slate-900">部員数</dt>
              <dd className="md:col-span-2 text-slate-600">約30名 (工学部だけでなく、多様な学部の学生が在籍しています)</dd>
            </div>
            <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <dt className="font-bold text-slate-900">部門</dt>
              <dd className="md:col-span-2 text-slate-600">
                <ul className="list-disc pl-5 space-y-1">
                  <li>車両設計班 (パワートレイン / シャシー / エアロ)</li>
                  <li>製作班 (溶接 / カーボン成形 / 加工)</li>
                  <li>マネジメント班 (広報 / 会計 / スポンサー渉外)</li>
                </ul>
              </dd>
            </div>
          </dl>
        </section>

      </div>
    </div>
  );
}
