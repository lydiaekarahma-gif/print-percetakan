import React from 'react';
import { 
  Printer, 
  Smartphone, 
  CreditCard, 
  Zap, 
  Clock, 
  MapPin, 
  Files, 
  Wifi,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { ServiceCard } from './components/ServiceCard';
import { ChatWidget } from './components/ChatWidget';

const services = [
  {
    id: '1',
    title: 'Print & Percetakan',
    description: 'Cetak dokumen hitam putih atau warna. Kualitas tajam untuk tugas sekolah, skripsi, atau dokumen kantor.',
    icon: <Printer size={28} />
  },
  {
    id: '2',
    title: 'Fotocopy',
    description: 'Layanan fotocopy cepat dan murah. Bisa perbesar/perkecil dokumen sesuai kebutuhan Anda.',
    icon: <Files size={28} />
  },
  {
    id: '3',
    title: 'Paket Data & Pulsa',
    description: 'Isi ulang kuota internet semua operator dan pulsa reguler. Tersedia berbagai nominal.',
    icon: <Wifi size={28} />
  },
  {
    id: '4',
    title: 'E-Wallet & Bank',
    description: 'Topup saldo Gopay, ShopeePay, Dana, dan transfer ke berbagai bank dengan biaya admin rendah.',
    icon: <Smartphone size={28} />
  },
  {
    id: '5',
    title: 'Pembayaran Tagihan',
    description: 'Bayar tagihan Listrik (PLN), Air (PDAM), dan tagihan bulanan lainnya dalam satu tempat.',
    icon: <Zap size={28} />
  },
  {
    id: '6',
    title: 'Lain-Lain',
    description: 'Berbagai layanan digital lainnya untuk memudahkan kebutuhan harian Anda.',
    icon: <CreditCard size={28} />
  }
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-brand-500 selection:text-white overflow-x-hidden">
      
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[128px]"></div>
      </div>

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center backdrop-blur-sm sticky top-0 z-40 border-b border-white/5">
          <div className="font-display font-bold text-2xl tracking-tighter text-white">
            Digital<span className="text-brand-500">Center</span>.
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#services" className="hover:text-white transition-colors">Layanan</a>
            <a href="#about" className="hover:text-white transition-colors">Tentang</a>
            <a href="#contact" className="hover:text-white transition-colors">Kontak</a>
          </div>
          <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors border border-white/10">
            Hubungi Kami
          </button>
        </nav>

        {/* Hero Section */}
        <section className="px-6 md:px-12 py-20 md:py-32 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wide"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Buka Sekarang
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold leading-[0.9] text-white"
            >
              WE ARE <br />
              <span className="text-brand-500 inline-block">OPEN</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-400 max-w-md leading-relaxed"
            >
              Solusi satu atap untuk kebutuhan percetakan, pembayaran digital, dan paket data. Cepat, mudah, dan terpercaya.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#services" className="bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2">
                Lihat Layanan <ChevronRight size={18} />
              </a>
              <div className="flex items-center gap-4 px-6 py-4 bg-slate-800/50 rounded-xl border border-slate-700">
                <Clock className="text-brand-400" />
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 uppercase font-bold">Jam Operasional</span>
                  <span className="font-bold text-white">07:00 AM - 09:00 PM</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 w-full relative">
            {/* Visual Abstract Representation of the Shop */}
            <div className="relative aspect-square md:aspect-[4/3] w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-purple-600 rounded-3xl opacity-20 blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern Printing Shop" 
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl border border-white/10 z-10 hover:scale-[1.02] transition-transform duration-500"
              />
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-700 p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
              >
                <div className="bg-green-500/20 p-2 rounded-lg text-green-500">
                  <Wifi size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Internet Kencang</div>
                  <div className="text-xs text-slate-400">Tersedia Paket Data</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="px-6 md:px-12 py-24 bg-slate-900/50 relative">
           <div className="max-w-7xl mx-auto">
             <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Layanan Kami</h2>
               <p className="text-slate-400 max-w-2xl mx-auto">Apa saja yang bisa kami bantu hari ini? Dari cetak dokumen hingga bayar tagihan, semua ada.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {services.map((service, index) => (
                 <ServiceCard 
                    key={service.id}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    delay={index * 0.1}
                 />
               ))}
             </div>
           </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 md:px-12 py-24 max-w-5xl mx-auto text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-600/10 rounded-3xl blur-3xl -z-10"></div>
          <div className="bg-slate-800/30 border border-slate-700 p-12 rounded-3xl backdrop-blur-md">
             <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Butuh Bantuan Cepat?</h2>
             <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
               Gunakan fitur chat AI kami di pojok kanan bawah untuk menanyakan harga, ketersediaan layanan, atau informasi lainnya secara instan.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
               <button 
                  onClick={() => {
                    const chatButton = document.querySelector('button[aria-label="chat"]') as HTMLElement;
                    if (chatButton) chatButton.click();
                  }}
                  className="bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors"
               >
                 Tanya Sekarang
               </button>
               <button className="border border-slate-600 hover:border-white text-white px-8 py-3 rounded-xl font-medium transition-colors">
                 Lokasi Kami
               </button>
             </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-slate-950 border-t border-white/5 py-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="font-display font-bold text-xl text-white">
                Digital<span className="text-brand-500">Center</span>.
              </div>
              <p className="text-slate-500 text-sm">
                Melayani sepenuh hati untuk kebutuhan digital dan percetakan Anda.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Layanan</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>Percetakan</li>
                <li>Fotocopy</li>
                <li>Pembayaran Online</li>
                <li>Topup E-Wallet</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Kontak</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1 shrink-0"/> 
                  <span>Bonggan RT 01/RW 09, Salatiga</span>
                </li>
                <li className="flex items-center gap-2">
                  <Smartphone size={16}/> 
                  <span>08812853770</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Jam Buka</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex justify-between"><span>Senin - Minggu</span> <span>07:00 - 21:00</span></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-slate-600 text-sm">
            © {new Date().getFullYear()} Digital Center. All rights reserved.
          </div>
        </footer>

        {/* AI Chat Widget */}
        <ChatWidget />
      </div>
    </div>
  );
}

export default App;