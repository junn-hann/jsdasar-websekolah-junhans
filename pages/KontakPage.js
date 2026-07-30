// import { Component } from "../components/Components.js";
// import { Navbar } from "../components/Navbar.js";
// import { Footer } from "../components/Footer.js";
// export class KontakPage extends Component {
// render() {
// const navbar = new Navbar({ activePage: "kontak", namaSekolah: this.props.namaSekolah }).render();
// const footer = new Footer({ namaSekolah: this.props.namaSekolah }).render();
// return `
// ${navbar}
// <main>
// <h1>Hubungi Kami ${this.props.namaSekolah}</h1>
// <p>Email: info@smaharapanbangsa.sch.id</p>
// <p>Telepon: (021) 123-4567</p>
// </main>
// ${footer}
// `;
// }
// }

import { Page } from "../components/Page.js";
export class KontakPage extends Page {
  renderContent() {
    return `
      <main>
        <h1>Hubungi Kami</h1>
        <p>Email: info@smaharapanbangsa.sch.id</p>
        <p>Telepon: (021) 123-4567</p>
      </main>
    `;
  }
}