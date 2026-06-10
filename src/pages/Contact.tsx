import { Mail, Instagram, Twitter, ExternalLink } from 'lucide-react';

export function Contact() {
  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">お問い合わせ</h1>
        <p className="text-slate-600 mb-12">Contact Us</p>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">連絡先</h2>
              <p className="text-slate-600 mb-4">
                新入生の入部相談、スポンサーシップに関するお問い合わせ、見学のご希望などは、以下のアドレスまでお気軽にご連絡ください。
              </p>
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                <Mail className="text-blue-600" size={24} />
                <a href="mailto:contact@example.com" className="text-lg font-mono text-slate-800 hover:text-blue-600 transition-colors">
                  contact-formula@example.com
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">SNSリンク</h2>
              <div className="space-y-3">
                <a href="#" className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100 hover:bg-slate-100 transition-colors group">
                  <div className="flex items-center gap-3">
                    <Twitter className="text-[#1DA1F2]" size={24} />
                    <span className="font-bold text-slate-700">公式X (Twitter)</span>
                  </div>
                  <ExternalLink size={18} className="text-slate-400 group-hover:text-slate-600" />
                </a>
                <a href="#" className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100 hover:bg-slate-100 transition-colors group">
                  <div className="flex items-center gap-3">
                    <Instagram className="text-[#E1306C]" size={24} />
                    <span className="font-bold text-slate-700">公式Instagram</span>
                  </div>
                  <ExternalLink size={18} className="text-slate-400 group-hover:text-slate-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Map/Location (Optional styling) */}
          <div className="bg-slate-100 rounded-2xl p-8 flex flex-col justify-center items-center text-center">
            <h3 className="font-bold text-slate-900 mb-2">活動場所（ガレージ）</h3>
            <p className="text-slate-600 text-sm mb-6">
              〇〇大学 〇〇キャンパス<br />
              工作センター横 第1ガレージ
            </p>
            <div className="w-full aspect-square bg-slate-200 rounded-lg border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400">
              [ キャンパスマップ埋め込み ]
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
