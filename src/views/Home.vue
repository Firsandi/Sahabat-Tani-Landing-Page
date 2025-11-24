<template>
  <main>
    <Hero :stats="stats" />
    <Features :features="features" />
    <Products :products="products" :categories="categories" />
    <Testimonials :testimonials="testimonials" />

    <section class="hero-gradient py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center text-white">
        <h2 class="text-4xl font-bold mb-6">Siap Meningkatkan Hasil Panen Anda?</h2>
        <p class="text-xl mb-8 text-green-50">Bergabunglah dengan ribuan petani yang sudah mempercayai kami</p>
        <a href="#kontak" class="inline-block bg-white text-green-600 px-10 py-4 rounded-lg font-semibold hover:bg-green-50 transition duration-300 shadow-xl text-lg">
          <i class="fas fa-phone mr-2"></i>Hubungi Kami Sekarang
        </a>
      </div>
    </section>

    <section id="kontak" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Hubungi Kami</h2>
          <p class="text-xl text-gray-600">Kami siap membantu kebutuhan pertanian Anda</p>
        </div>

        <div class="grid md:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo :contactInfo="contactInfo" />
        </div>
      </div>
    </section>

    <Footer />
  </main>
</template>

<script setup lang="ts">
import Hero from '../components/Hero.vue'
import Features from '../components/Features.vue'
import Products from '../components/Products.vue'
import Testimonials from '../components/Testimonials.vue'
import ContactForm from '../components/ContactForm.vue'
import ContactInfo from '../components/ContactInfo.vue'
import Footer from '../components/Footer.vue'

type Stat = { value: string; label: string }
type Feature = { icon: string; title: string; description: string }
type Product = { id: number; name: string; category: string; description: string; price: string; image: string }
type Testimonial = { name: string; location: string; avatar: string; text: string }
type Contact = { icon: string; title: string; info: string }

const stats: Stat[] = [
  { value: '10+', label: 'Tahun Berpengalaman' },
  { value: '5000+', label: 'Petani Terlayani' },
  { value: '100+', label: 'Produk Tersedia' }
]

const features: Feature[] = [
  { icon: 'fas fa-certificate', title: 'Produk Bersertifikat', description: 'Semua produk kami telah tersertifikasi dan terjamin kualitasnya oleh pemerintah' },
  { icon: 'fas fa-tags', title: 'Harga Terjangkau', description: 'Pupuk bersubsidi dengan harga terjangkau langsung dari distributor resmi' },
  { icon: 'fas fa-truck', title: 'Pengiriman Cepat', description: 'Layanan pengiriman cepat ke seluruh wilayah dengan jaminan produk aman' },
  { icon: 'fas fa-headset', title: 'Konsultasi Gratis', description: 'Tim ahli kami siap memberikan konsultasi gratis untuk kebutuhan pertanian Anda' },
  { icon: 'fas fa-shield-alt', title: 'Garansi Kualitas', description: 'Jaminan kualitas produk dengan garansi uang kembali jika tidak sesuai' },
  { icon: 'fas fa-clock', title: 'Buka 7 Hari', description: 'Toko kami buka setiap hari untuk melayani kebutuhan pertanian Anda' }
]

const categories = ['Semua Produk', 'Pupuk', 'Pestisida', 'Herbisida', 'Fungisida']

const products: Product[] = [
  { id:1, name:'Pupuk Urea Bersubsidi', category:'Pupuk', description:'Pupuk nitrogen untuk pertumbuhan vegetatif tanaman', price:'Rp 95.000/karung', image:'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=400&h=300&fit=crop' },
  { id:2, name:'Pupuk NPK Phonska', category:'Pupuk', description:'Pupuk majemuk lengkap untuk semua fase pertumbuhan', price:'Rp 120.000/karung', image:'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=300&fit=crop' },
  { id:3, name:'Pestisida Organik', category:'Pestisida', description:'Pengendali hama alami ramah lingkungan', price:'Rp 85.000/liter', image:'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop' },
  { id:4, name:'Herbisida Rumput', category:'Herbisida', description:'Pembasmi gulma efektif untuk lahan pertanian', price:'Rp 75.000/liter', image:'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop' },
  { id:5, name:'Fungisida Tanaman', category:'Fungisida', description:'Mencegah dan mengobati penyakit jamur pada tanaman', price:'Rp 90.000/liter', image:'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=400&h=300&fit=crop' },
  { id:6, name:'Pupuk Organik Kompos', category:'Pupuk', description:'Pupuk alami untuk memperbaiki struktur tanah', price:'Rp 45.000/karung', image:'https://images.unsplash.com/photo-1585746649913-6c4c67c74b70?w=400&h=300&fit=crop' }
]

const testimonials: Testimonial[] = [
  { name:'Pak Suharto', location:'Petani Padi, Jember', avatar:'https://i.pravatar.cc/150?img=12', text:'Pupuk dari Sahabat Tani kualitasnya terjamin. Hasil panen saya meningkat 30% sejak menggunakan produk mereka.' },
  { name:'Bu Sumiati', location:'Petani Sayur, Bondowoso', avatar:'https://i.pravatar.cc/150?img=45', text:'Pelayanannya sangat baik dan harga terjangkau. Pengiriman juga cepat, sangat membantu usaha pertanian saya.' },
  { name:'Pak Wahyudi', location:'Petani Jagung, Lumajang', avatar:'https://i.pravatar.cc/150?img=33', text:'Tim Sahabat Tani sangat membantu dengan konsultasi gratisnya. Produknya berkualitas dan harga bersahabat.' }
]

const contactInfo: Contact[] = [
  { icon:'fas fa-map-marker-alt', title:'Alamat', info:'Jl. Pertanian No. 123, Jember, Jawa Timur 68121' },
  { icon:'fas fa-phone', title:'Telepon', info:'(0331) 123-4567 / 0812-3456-7890' },
  { icon:'fas fa-envelope', title:'Email', info:'info@sahabattani.com' },
  { icon:'fas fa-clock', title:'Jam Operasional', info:'Senin - Minggu: 07:00 - 18:00 WIB' }
]
</script>
