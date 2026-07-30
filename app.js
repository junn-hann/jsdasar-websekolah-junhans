import { Navbar } from "./components/Navbar.js";
import { Footer } from "./components/Footer.js";
const navbar = new Navbar({ activePage: "home" }).render();
const footer = new Footer().render();
// Tempel dua component ini berurutan ke #app
document.getElementById("app").innerHTML = navbar + footer;

import { router } from './router.js';

//	Jalankan	router	setiap	kali	hash	di	URL	berubah	(user	klik	menu)
window.addEventListener("hashchange",	router);
//	Jalankan	router	pertama	kali	saat	halaman	pertama	dibuka
window.addEventListener("DOMContentLoaded",	router)