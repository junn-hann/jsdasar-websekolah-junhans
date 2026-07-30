// import { Component } from "../components/Components.js";
// import { Navbar } from "../components/Navbar.js";
// import { Footer } from "../components/Footer.js";
// export class HomePage extends Component {
// render() {
// const navbar = new Navbar({ activePage: "home", namaSekolah: this.props.namaSekolah }).render();
// const footer = new Footer({ namaSekolah: this.props.namaSekolah }).render();
// return `
// ${navbar}
// <main>
// <h1>Selamat Datang di Website Sekolah ${this.props.namaSekolah}</h1>
// <p>Ini adalah halaman utama (Home) dari website sekolah kami.</p>
// </main>
// ${footer}
// `;
// }
// }

import { Page } from "../components/Page.js";
 
export class HomePage extends Page {renderContent() {
  return `
  <main>
  <h1>Selamat Datang di Website Sekolah SMK YADIKA SOREANG</h1>
  <p>Ini adalah halaman utama (Home) dari website sekolah kami.</p>
  </main>
`;
}
  // TODO: override method renderContent() SAJA (bukan render()),
  // kembalikan (return) potongan HTML, contoh:
  // <main><h1>Selamat Datang di Website Sekolah</h1><p>...</p></main>
}


