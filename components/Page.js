import { Component } from "./Component.js";
import { Navbar } from "./Navbar.js";
import { Footer } from "./Footer.js";
 
export class Page extends Component {
  render() {
    const navbar = new Navbar({ 
      activePage: this.props.activePage,
      namaSekolah: "SMK YADIKA SOREANG"

     }).render();
    const footer = new Footer().render();
    return `${navbar}${this.renderContent()}${footer}`;
  }
 
  // Sama seperti render() pada Component: WAJIB di-override oleh halaman turunannya
  renderContent() {
    throw new Error("Method renderContent() harus diimplementasikan oleh halaman turunannya!");
  }
}
