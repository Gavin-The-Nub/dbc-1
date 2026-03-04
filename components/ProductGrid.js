const products = [
  { id: 1, name: "Super Red Halfmoon", price: "₱1,200", img: "/1.jpg" },
  { id: 2, name: "Avatar Crowntail", price: "₱1,500", img: "/2.jpg" },
  { id: 3, name: "Blue Rim Plakat", price: "₱2,000", img: "/3.jpg" },
  { id: 4, name: "Koi Galaxy Nemo", price: "₱1,800", img: "/6.jpg" },
];

export default function ProductGrid() {
  return (
    <section id="collection" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16 animate-fade-in">
        <div>
          <h2 className="text-3xl md:text-5xl mb-4">Featured Collection</h2>
          <p className="text-muted">Hand-picked competition grade specimens.</p>
        </div>
        <button className="hidden md:block text-accent uppercase tracking-widest text-sm font-semibold border-b border-accent pb-1">
          View All Collection
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {products.map((product, index) => (
          <div 
            key={product.id} 
            className="group animate-fade-in"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="aspect-square bg-white/5 overflow-hidden border border-white/5 relative mb-4">
              <img 
                src={product.img} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-accent text-[10px] px-2 py-1 text-white uppercase font-bold tracking-tighter">
                Sale
              </div>
            </div>
            <h3 className="text-sm md:text-base font-serif mb-1 tracking-wider">{product.name}</h3>
            <p className="text-accent font-bold text-sm">{product.price}</p>
          </div>
        ))}
      </div>
      
      <button className="md:hidden w-full mt-10 border border-white/20 py-4 uppercase tracking-[0.2em] text-xs">
        View All Collection
      </button>
    </section>
  );
}
