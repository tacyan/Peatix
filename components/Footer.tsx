import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-gray py-8 text-xs text-text-gray border-t border-border-gray">
      <div className="max-w-[960px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          <div>
            <a href="https://peatix.com/organizer" className="text-primary hover:underline block mb-4 font-medium">Peatix でイベントを開催してみませんか?</a>
            <p className="mb-4">アプリでイベントをもっと楽しく! <a href="https://itunes.apple.com/jp/app/peatix/id536489961?mt=8" className="underline hover:text-text-dark">iPhone</a> <a href="https://play.google.com/store/apps/details?id=com.peatix.android.activity&hl=ja" className="underline hover:text-text-dark">Android</a></p>
            
            <div className="flex gap-4 mb-4 text-[20px] text-text-gray">
              <a href="https://instagram.com/peatix_jp" target="_blank" rel="noopener noreferrer" className="material-icons-outlined cursor-pointer hover:text-text-dark transition-colors">camera_alt</a> 
              <a href="https://twitter.com/PeatixJP" target="_blank" rel="noopener noreferrer" className="material-icons-outlined cursor-pointer hover:text-text-dark transition-colors">alternate_email</a> 
              <a href="https://www.facebook.com/PeatixJP" target="_blank" rel="noopener noreferrer" className="material-icons-outlined cursor-pointer hover:text-text-dark transition-colors">facebook</a>
              <a href="https://www.youtube.com/user/PeatixJP" target="_blank" rel="noopener noreferrer" className="material-icons-outlined cursor-pointer hover:text-text-dark transition-colors">ondemand_video</a> 
              <a href="https://blog.peatix.com/" target="_blank" rel="noopener noreferrer" className="material-icons-outlined cursor-pointer hover:text-text-dark transition-colors">library_music</a> 
            </div>
            
            <button className="flex items-center gap-1 hover:text-text-dark transition-colors">
               <span className="material-icons-outlined text-[16px]">expand_less</span> 日本語
            </button>
          </div>
          
          <div>
            <a href="https://help-attendee.peatix.com/ja-JP/support/home" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#dcdde1] text-text-dark font-bold py-3 px-8 rounded hover:bg-[#cfd0d4] transition-colors w-full md:w-auto text-sm text-center">
              ヘルプ
            </a>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 border-t border-gray-300 pt-4 text-[11px] md:text-xs">
          <a href="https://about.peatix.com/ja/legal/terms.html" target="_blank" className="hover:underline">利用規約</a>
          <a href="https://about.peatix.com/ja/legal/privacy.html" target="_blank" className="hover:underline">個人情報保護方針</a>
          <a href="https://about.peatix.com/ja/legal/privacy.html" target="_blank" className="hover:underline">プライバシーポリシー</a>
          <a href="https://about.peatix.com/ja/legal/specified-commercial-transactions.html" target="_blank" className="hover:underline">特定商取引法に基づく表記</a>
          <a href="https://about.peatix.com/ja/legal/dmca.html" target="_blank" className="hover:underline">DMCA</a>
          <a href="https://about.peatix.com/ja/legal/cookie-policy.html" target="_blank" className="hover:underline">クッキーポリシー</a>
          <span className="ml-auto text-text-gray">© 2026 Peatix Inc.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;