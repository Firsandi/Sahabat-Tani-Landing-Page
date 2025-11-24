import Hero from '../components/Hero.vue';
import Features from '../components/Features.vue';
import Products from '../components/Products.vue';
import Testimonials from '../components/Testimonials.vue';
import ContactForm from '../components/ContactForm.vue';
import ContactInfo from '../components/ContactInfo.vue';
import Footer from '../components/Footer.vue';
const stats = [
    { value: '10+', label: 'Tahun Berpengalaman' },
    { value: '5000+', label: 'Petani Terlayani' },
    { value: '100+', label: 'Produk Tersedia' }
];
const features = [
    { icon: 'fas fa-certificate', title: 'Produk Bersertifikat', description: 'Semua produk kami telah tersertifikasi dan terjamin kualitasnya oleh pemerintah' },
    { icon: 'fas fa-tags', title: 'Harga Terjangkau', description: 'Pupuk bersubsidi dengan harga terjangkau langsung dari distributor resmi' },
    { icon: 'fas fa-truck', title: 'Pengiriman Cepat', description: 'Layanan pengiriman cepat ke seluruh wilayah dengan jaminan produk aman' },
    { icon: 'fas fa-headset', title: 'Konsultasi Gratis', description: 'Tim ahli kami siap memberikan konsultasi gratis untuk kebutuhan pertanian Anda' },
    { icon: 'fas fa-shield-alt', title: 'Garansi Kualitas', description: 'Jaminan kualitas produk dengan garansi uang kembali jika tidak sesuai' },
    { icon: 'fas fa-clock', title: 'Buka 7 Hari', description: 'Toko kami buka setiap hari untuk melayani kebutuhan pertanian Anda' }
];
const categories = ['Semua Produk', 'Pupuk', 'Pestisida', 'Herbisida', 'Fungisida'];
const products = [
    { id: 1, name: 'Pupuk Urea Bersubsidi', category: 'Pupuk', description: 'Pupuk nitrogen untuk pertumbuhan vegetatif tanaman', price: 'Rp 95.000/karung', image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=400&h=300&fit=crop' },
    { id: 2, name: 'Pupuk NPK Phonska', category: 'Pupuk', description: 'Pupuk majemuk lengkap untuk semua fase pertumbuhan', price: 'Rp 120.000/karung', image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=300&fit=crop' },
    { id: 3, name: 'Pestisida Organik', category: 'Pestisida', description: 'Pengendali hama alami ramah lingkungan', price: 'Rp 85.000/liter', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop' },
    { id: 4, name: 'Herbisida Rumput', category: 'Herbisida', description: 'Pembasmi gulma efektif untuk lahan pertanian', price: 'Rp 75.000/liter', image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop' },
    { id: 5, name: 'Fungisida Tanaman', category: 'Fungisida', description: 'Mencegah dan mengobati penyakit jamur pada tanaman', price: 'Rp 90.000/liter', image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=400&h=300&fit=crop' },
    { id: 6, name: 'Pupuk Organik Kompos', category: 'Pupuk', description: 'Pupuk alami untuk memperbaiki struktur tanah', price: 'Rp 45.000/karung', image: 'https://images.unsplash.com/photo-1585746649913-6c4c67c74b70?w=400&h=300&fit=crop' }
];
const testimonials = [
    { name: 'Pak Suharto', location: 'Petani Padi, Jember', avatar: 'https://i.pravatar.cc/150?img=12', text: 'Pupuk dari Sahabat Tani kualitasnya terjamin. Hasil panen saya meningkat 30% sejak menggunakan produk mereka.' },
    { name: 'Bu Sumiati', location: 'Petani Sayur, Bondowoso', avatar: 'https://i.pravatar.cc/150?img=45', text: 'Pelayanannya sangat baik dan harga terjangkau. Pengiriman juga cepat, sangat membantu usaha pertanian saya.' },
    { name: 'Pak Wahyudi', location: 'Petani Jagung, Lumajang', avatar: 'https://i.pravatar.cc/150?img=33', text: 'Tim Sahabat Tani sangat membantu dengan konsultasi gratisnya. Produknya berkualitas dan harga bersahabat.' }
];
const contactInfo = [
    { icon: 'fas fa-map-marker-alt', title: 'Alamat', info: 'Jl. Pertanian No. 123, Jember, Jawa Timur 68121' },
    { icon: 'fas fa-phone', title: 'Telepon', info: '(0331) 123-4567 / 0812-3456-7890' },
    { icon: 'fas fa-envelope', title: 'Email', info: 'info@sahabattani.com' },
    { icon: 'fas fa-clock', title: 'Jam Operasional', info: 'Senin - Minggu: 07:00 - 18:00 WIB' }
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsics.main, __VLS_intrinsics.main)({});
/** @type {[typeof Hero, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Hero, new Hero({
    stats: (__VLS_ctx.stats),
}));
const __VLS_1 = __VLS_0({
    stats: (__VLS_ctx.stats),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
// @ts-ignore
[stats,];
/** @type {[typeof Features, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(Features, new Features({
    features: (__VLS_ctx.features),
}));
const __VLS_6 = __VLS_5({
    features: (__VLS_ctx.features),
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
// @ts-ignore
[features,];
/** @type {[typeof Products, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(Products, new Products({
    products: (__VLS_ctx.products),
    categories: (__VLS_ctx.categories),
}));
const __VLS_11 = __VLS_10({
    products: (__VLS_ctx.products),
    categories: (__VLS_ctx.categories),
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
// @ts-ignore
[products, categories,];
/** @type {[typeof Testimonials, ]} */ ;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent(Testimonials, new Testimonials({
    testimonials: (__VLS_ctx.testimonials),
}));
const __VLS_16 = __VLS_15({
    testimonials: (__VLS_ctx.testimonials),
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
// @ts-ignore
[testimonials,];
__VLS_asFunctionalElement(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "hero-gradient py-20 px-4 sm:px-6 lg:px-8" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "max-w-4xl mx-auto text-center text-white" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
    ...{ class: "text-4xl font-bold mb-6" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "text-xl mb-8 text-green-50" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    href: "#kontak",
    ...{ class: "inline-block bg-white text-green-600 px-10 py-4 rounded-lg font-semibold hover:bg-green-50 transition duration-300 shadow-xl text-lg" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fas fa-phone mr-2" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    id: "kontak",
    ...{ class: "py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "max-w-7xl mx-auto" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "text-center mb-16" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
    ...{ class: "text-4xl font-bold text-gray-800 mb-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "text-xl text-gray-600" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "grid md:grid-cols-2 gap-12" },
});
/** @type {[typeof ContactForm, ]} */ ;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent(ContactForm, new ContactForm({}));
const __VLS_21 = __VLS_20({}, ...__VLS_functionalComponentArgsRest(__VLS_20));
/** @type {[typeof ContactInfo, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(ContactInfo, new ContactInfo({
    contactInfo: (__VLS_ctx.contactInfo),
}));
const __VLS_26 = __VLS_25({
    contactInfo: (__VLS_ctx.contactInfo),
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
// @ts-ignore
[contactInfo,];
/** @type {[typeof Footer, ]} */ ;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent(Footer, new Footer({}));
const __VLS_31 = __VLS_30({}, ...__VLS_functionalComponentArgsRest(__VLS_30));
/** @type {__VLS_StyleScopedClasses['hero-gradient']} */ ;
/** @type {__VLS_StyleScopedClasses['py-20']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:px-8']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
/** @type {__VLS_StyleScopedClasses['text-green-50']} */ ;
/** @type {__VLS_StyleScopedClasses['inline-block']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-green-600']} */ ;
/** @type {__VLS_StyleScopedClasses['px-10']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-green-50']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['fas']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-phone']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-20']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:px-8']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-50']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-7xl']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-16']} */ ;
/** @type {__VLS_StyleScopedClasses['text-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['md:grid-cols-2']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-12']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
//# sourceMappingURL=Home.vue.js.map