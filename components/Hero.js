export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-black">
      {/* YouTube Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-[177.78vh] h-[56.25vw] object-cover scale-150 opacity-40"
          src="https://www.youtube.com/embed/34MDwL-WkXg?autoplay=1&mute=1&loop=1&playlist=34MDwL-WkXg&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
          title="YouTube Video Background"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in">
        <span className="text-accent font-bold tracking-[0.4em] uppercase text-xs mb-6 block bg-accent/10 py-2 px-4 rounded-full w-fit mx-auto">
          PAETE'S FINEST BETTA FISH
        </span>
        <h1 className="text-5xl md:text-8xl leading-tight mb-8">
          Excellence in <br />
          <span className="italic text-accent">Every Scale</span>
        </h1>
        <p className="text-muted text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
          From the heart of the Philippines to the rest of the world. 
          Discover our curated collection of competition-grade Betta fish.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a href="#collection" className="btn-primary text-lg px-12 py-5 shadow-lg shadow-accent/20">Explore Collection</a>
          <a 
            href="https://shopee.ph/davidstalisayonline" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-12 py-5 border-2 border-white/10 rounded-[2rem] uppercase tracking-widest text-sm hover:border-accent hover:text-accent transition-all duration-300 font-semibold"
          >
            Shop Now
          </a>
        </div>
      </div>
      
      {/* Down arrow indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-[1px] h-12 bg-white"></div>
      </div>
    </section>
  );
}
