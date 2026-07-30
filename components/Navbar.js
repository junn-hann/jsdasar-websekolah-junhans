import { Component } from "./Component.js";
export class Navbar extends Component {
render() {
// this.props.activePage berisi info halaman mana yang sedang aktif
const active = this.props.activePage;
const namasekolah = this.props.namaSekolah;
// Fungsi kecil untuk menambahkan class "active" pada menu yang sedang dibuka
const linkClass = (page) => (page === active ? "active" : "");
return `
<nav>
<h2>${namasekolah}</h2>
<a class="${linkClass('home')}" href="#/home">Home</a> |
<a class="${linkClass('about')}" href="#/about">About</a> |
<a class="${linkClass('kontak')}" href="#/kontak">Kontak</a> |
<a class="${linkClass('eskul')}" href="#/eskul">Ekstrakurikuler</a>
</nav>
`;
}
}
