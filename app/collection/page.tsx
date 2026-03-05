"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CollectionPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data, error } = await supabase
          .from('fish')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching fish:', error.message);
        } else if (data) {
          setProducts(data);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-28 animate-fade-in relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
          <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px] mb-8 block bg-accent/10 py-2 px-6 rounded-full w-fit mx-auto">Our Entire Vault</span>
          <h1 className="text-5xl md:text-8xl mb-8 leading-tight font-serif uppercase tracking-tighter">
            The Full <span className="italic text-accent">Collection</span>
          </h1>
          <p className="text-muted max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Explore our complete gallery of premium Betta fish specimens. 
            Each one is hand-selected for its unique beauty and vitality.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20 text-muted animate-pulse font-serif uppercase tracking-widest">
            Unveiling Collection...
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20 text-muted italic">
            Our vault is currently empty. Please check back later for new arrivals.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className="group animate-fade-in flex flex-col"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="aspect-[3/4] bg-secondary overflow-hidden rounded-[2.5rem] border-2 border-white/5 relative mb-6 transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-[0_20px_60px_rgba(251,129,34,0.2)]">
                  <img 
                    src={product.image_url} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src = 'https://placehold.co/600x800/1a1a1a/ffffff?text=Premium+Betta';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {product.is_featured && (
                    <div className="absolute top-5 left-5 bg-accent text-[9px] px-3 py-1.5 text-white uppercase font-black tracking-widest rounded-full shadow-2xl">
                      Featured
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-serif mb-2 tracking-tight group-hover:text-accent transition-colors">{product.name}</h3>
                <div className="flex justify-between items-center mt-auto">
                  <p className="text-accent font-black text-lg">{product.price}</p>
                  {product.shopee_link && (
                    <a 
                      href={product.shopee_link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[9px] text-white/40 hover:text-accent uppercase font-black tracking-widest transition-colors"
                    >
                      Shop →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
