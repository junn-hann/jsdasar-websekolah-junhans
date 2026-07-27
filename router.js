import { HomePage } from "./pages/HomePage.js";
import { AboutPage } from "./pages/AboutPage.js";
import { KontakPage } from "./pages/KontakPage.js";
// "Daftar rute": pemetaan dari path ke class Page yang sesuai
export const routes = {
"/home": HomePage,
"/about": AboutPage,
"/kontak": KontakPage,
};
export function router() {
// Ambil path saat ini dari hash URL, contoh: "#/about" -> "/about"
let path = window.location.hash.replace("#", "");
// Kalau kosong (baru buka web), default arahkan ke "/home"
if (path === "") {
path = "/home";
}
// Cari class Page yang cocok, kalau tidak ketemu tampilkan halaman "/home"
const PageClass = routes[path] || HomePage;
// Buat instance dari class Page tersebut, lalu render ke #app
const page = new PageClass();
document.getElementById("app").innerHTML = page.render(); }
