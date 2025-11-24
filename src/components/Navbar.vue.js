import { ref } from 'vue';
import logo from '@/assets/ST-logo.png'; // atau '../assets/ST-logo.png' tergantung lokasi file
const mobileMenuOpen = ref(false);
const navItems = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Produk', href: '#produk' },
    { name: 'Kontak', href: '#kontak' }
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsics.nav, __VLS_intrinsics.nav)({
    ...{ class: "bg-white shadow-lg fixed w-full top-0 z-50" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex justify-between items-center h-16" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex items-center" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.img)({
    src: (__VLS_ctx.logo),
    alt: "Sahabat Tani",
    ...{ class: "h-10 w-auto mr-3" },
});
// @ts-ignore
[logo,];
__VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "text-2xl font-bold text-gray-800" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "hidden md:flex space-x-8" },
});
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.navItems))) {
    // @ts-ignore
    [navItems,];
    __VLS_asFunctionalElement(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        key: (item.name),
        href: (item.href),
        ...{ class: "text-gray-700 hover:text-green-600 font-medium transition duration-300" },
    });
    (item.name);
}
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.mobileMenuOpen = !__VLS_ctx.mobileMenuOpen;
            // @ts-ignore
            [mobileMenuOpen, mobileMenuOpen,];
        } },
    ...{ class: "md:hidden text-gray-700" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fas fa-bars text-2xl" },
});
if (__VLS_ctx.mobileMenuOpen) {
    // @ts-ignore
    [mobileMenuOpen,];
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "md:hidden bg-white border-t" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "px-2 pt-2 pb-3 space-y-1" },
    });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.navItems))) {
        // @ts-ignore
        [navItems,];
        __VLS_asFunctionalElement(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.mobileMenuOpen))
                        return;
                    __VLS_ctx.mobileMenuOpen = false;
                    // @ts-ignore
                    [mobileMenuOpen,];
                } },
            key: (item.name),
            href: (item.href),
            ...{ class: "block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md" },
        });
        (item.name);
    }
}
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['top-0']} */ ;
/** @type {__VLS_StyleScopedClasses['z-50']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-7xl']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:px-8']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['h-16']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['h-10']} */ ;
/** @type {__VLS_StyleScopedClasses['w-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['md:flex']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-8']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-green-600']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['md:hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['fas']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-bars']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['md:hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['border-t']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-1']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-green-50']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-green-600']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-md']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
//# sourceMappingURL=Navbar.vue.js.map