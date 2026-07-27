import { Component } from "../components/Components.js";
import { Navbar } from "../components/Navbar.js";
import { Footer } from "../components/Footer.js";
export class HomePage extends Component {
render() {
const navbar = new Navbar({ activePage: "home" }).render();
const footer = new Footer().render();
return `
${navbar}
<main>
<h1>Selamat Datang di Website Sekolah</h1>
<p>Ini adalah halaman utama (Home) dari website sekolah kami.</p>
</main>
${footer}
`;
}
}