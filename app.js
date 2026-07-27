import { router } from "./router.js";
// Jalankan router setiap kali hash di URL berubah (user klik menu)
window.addEventListener("hashchange", router);
// Jalankan router pertama kali saat halaman pertama dibuka
window.addEventListener("DOMContentLoaded", router);
