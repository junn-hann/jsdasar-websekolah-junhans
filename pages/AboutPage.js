import { Component } from "../components/Components.js";
import { Navbar } from "../components/Navbar.js";
import { Footer } from "../components/Footer.js";
export class AboutPage extends Component {
render() {
const navbar = new Navbar({ activePage: "about" }).render();
const footer = new Footer().render();
return `
${navbar}
<main>
<h1>Tentang Sekolah</h1>
<p>SMA Negeri Harapan Bangsa berdiri sejak tahun 1990, berkomitmen
mencetak generasi yang cerdas dan berkarakter.</p>
</main>
${footer}
`;
}
}
