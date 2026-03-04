export default function Footer() {
  return (
    <footer className="bg-black py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 md:gap-8">
        <div className="animate-fade-in">
          <h3 className="text-2xl font-serif mb-6 text-white">David's <span className="text-accent">Betta Care</span></h3>
          <p className="text-muted text-sm leading-relaxed max-w-xs mb-8">
            The Philippines' premier source for high-quality, competition-grade Betta fish. 
            Directly from Paete's finest breeders.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/Davidsbettacare" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-accent transition-colors">
              <span className="text-xs">FB</span>
            </a>
            <a href="https://shopee.ph/davidstalisayonline" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-accent transition-colors">
              <span className="text-xs">SP</span>
            </a>
          </div>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-accent mb-8">Location</h4>
          <p className="text-muted text-sm leading-relaxed">
            Paete Town Bridge, <br />
            9F7H+HMF, Paete, Laguna <br />
            Philippines
          </p>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-accent mb-8">Contact</h4>
          <p className="text-muted text-sm mb-4">Messenger: David's Betta Care</p>
          <p className="text-muted text-sm mb-4">Available via Shopee for secure checkout.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-[10px] text-center text-muted uppercase tracking-[0.5em]">
        © 2026 David's Betta Care Paete. All Rights Reserved.
      </div>
    </footer>
  );
}
