import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Wrench, Users, Trophy, Flag, ChevronRight } from 'lucide-react';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white flex items-center justify-center min-h-[85vh]">
        {/* Placeholder for background image */}
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Formula Car on Track" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
              学生フォーミュラ 2026年大会参戦決定！
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              自らの手で、<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                最速を創り出す。
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
              私たちは、学生フォーミュラ大会で日本一を目指すものづくりサークルです。
              設計、製作、そして走行。すべてを自分たちの手で行います。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/about" 
                className="inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-blue-500/25"
              >
                サークルについて <ArrowRight size={20} />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-8 rounded-lg backdrop-blur-sm transition-all border border-white/10"
              >
                新入生向け情報はこちら
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Section (Welcoming & Professional) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              本気の「ものづくり」が、ここにある。
            </h2>
            <p className="text-slate-600">
              未経験からでも大丈夫。私たちが大切にしているのは「情熱」と「探求心」です。<br className="hidden md:block" />
              先輩たちが一からサポートし、誰もが一生モノのスキルと経験を得られる環境があります。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Wrench size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">ゼロから創る</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                CADでの設計、鋼管の溶接、カーボンパーツの製作まで。ただ部品を組み立てるのではなく、理論に基づき一からマシンを創り上げます。
              </p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">多様なメンバー</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                工学部だけでなく、文系学部の学生も広報やスポンサー渉外、会計などで大活躍しています。車好きでなくても、それぞれの得意分野を活かせます。
              </p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Flag size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">全国への挑戦</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                年に一度行われる全日本学生フォーミュラ大会に出場。全国の強豪校と競い合い、ものづくりの真の価値と自分たちの成長の証をコースに刻みます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News & CTA Section - Flex Layout */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* News */}
            <div className="flex-1">
              <div className="flex justify-between items-end mb-6">
                <h2 className="text-2xl font-bold text-slate-900">最新のお知らせ</h2>
                <Link to="/news" className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1">
                  一覧を見る <ArrowRight size={16} />
                </Link>
              </div>
              
              <div className="space-y-4">
                {[
                  { date: '2026.04.01', category: '新歓情報', title: '【新入生歓迎】第1回 マシン展示＆説明会のお知らせ', isNew: true },
                  { date: '2026.03.15', category: '活動報告', title: '春季テスト走行を行いました' },
                  { date: '2026.02.28', category: '協賛', title: '〇〇株式会社様よりパーツの協賛をいただきました' }
                ].map((news, idx) => (
                  <Link key={idx} to="/news" className="group block bg-white p-5 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-slate-500">{news.date}</span>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">{news.category}</span>
                      {news.isNew && <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-600 animate-pulse">NEW</span>}
                    </div>
                    <h3 className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                      {news.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sponsor CTA Block */}
            <div className="lg:w-1/3">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white h-full flex flex-col justify-between shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 text-white/5">
                  <Trophy size={200} />
                </div>
                <div className="relative z-10">
                  <div className="inline-block bg-blue-500 text-xs font-bold px-3 py-1 rounded-full mb-4">
                    SPONSORSHIP
                  </div>
                  <h3 className="text-2xl font-bold mb-4">企業スポンサー様へ</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    当チームの活動は、多くの企業様のご支援によって成り立っています。未来のエンジニア育成と、貴社のＰＲにつながるスポンサーシップをご検討いただけないでしょうか。
                  </p>
                </div>
                <Link 
                  to="/sponsors" 
                  className="relative z-10 bg-white text-slate-900 hover:bg-slate-100 font-bold py-3 px-6 rounded-lg text-center transition-colors flex items-center justify-center gap-2"
                >
                  支援について詳しく見る <ChevronRight size={18} />
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
