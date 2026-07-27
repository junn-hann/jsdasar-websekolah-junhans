import { Component } from "./Components.js";
export class Navbar extends Component {
render() {
// this.props.activePage berisi info halaman mana yang sedang aktif
const active = this.props.activePage;
// Fungsi kecil untuk menambahkan class "active" pada menu yang sedang dibuka
const linkClass = (page) => (page === active ? "active" : "");
return `
<nav>
<h2>SMA Negeri Harapan Bangsa</h2>
<a class="${linkClass('home')}" href="#/home">Home</a> |
<a class="${linkClass('about')}" href="#/about">About</a> |
<a class="${linkClass('kontak')}" href="#/kontak">Kontak</a>
</nav>
<hr/>
`;
}
}
