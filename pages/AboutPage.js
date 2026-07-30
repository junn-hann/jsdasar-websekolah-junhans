// import { Component } from "../components/Components.js";
// import { Navbar } from "../components/Navbar.js";
// import { Footer } from "../components/Footer.js";
// export class AboutPage extends Component {
// render() {
// const navbar = new Navbar({ activePage: "about", namaSekolah: this.props.namaSekolah }).render();
// const footer = new Footer({ namaSekolah: this.props.namaSekolah }).render();
// return `
// ${navbar}
// <main>
// <h1>Tentang Sekolah</h1>
// <p>${this.props.namaSekolah} berdiri sejak tahun 1990, berkomitmen
// mencetak generasi yang cerdas dan berkarakter.</p>
// </main>
// ${footer}
// `;
// }
// }

import { Page } from "../components/Page.js";
 
export class AboutPage extends Page {renderContent() {
  return `
  <main>
  <h1>Tentang Sekolah</h1>
  <p> SMK YADIKA SOREANG berdiri sejak tahun 1990, berkomitmen
  mencetak generasi yang cerdas dan berkarakter.</p>
  </main>
`;
}
}