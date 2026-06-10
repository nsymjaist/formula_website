export function News() {
  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">お知らせ</h1>
        <p className="text-slate-600 mb-12">News & Updates</p>

        <div className="space-y-6">
          {/* Mock News Items */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="border-b border-slate-200 pb-6 group cursor-pointer">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-sm font-mono text-slate-500">2026.04.0{i}</span>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                  {i % 2 === 0 ? '活動報告' : '新歓情報'}
                </span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {i === 1 ? '【新入生歓迎】第1回 マシン展示＆説明会のお知らせ' : `2026年度の活動報告 vol.${i}`}
              </h2>
              <p className="text-slate-600 text-sm line-clamp-2">
                新入生の皆さん、ご入学おめでとうございます！当チームでは、実際に作られたフォーミュラカーの展示と、活動内容についての説明会を実施します。
              </p>
            </div>
          ))}
        </div>
        
        {/* Placeholder for SNS feed (Orange box in sitemap) */}
        <div className="mt-16 bg-slate-50 p-8 rounded-xl border border-slate-200 text-center">
          <h3 className="text-lg font-bold text-slate-900 mb-2">SNSで最新情報をチェック！</h3>
          <p className="text-slate-600 text-sm mb-4">公式X (旧Twitter) やInstagramで日々の活動を発信しています。</p>
          <div className="h-40 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-400">
            [ X (Twitter) タイムライン埋め込みエリア ]
          </div>
        </div>
      </div>
    </div>
  );
}
