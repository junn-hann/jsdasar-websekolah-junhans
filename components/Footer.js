import { Component } from "./Components.js";
export class Footer extends Component {
render() {
const tahun = new Date().getFullYear();
return `
<hr/>
<footer>
<small>&copy; ${tahun} SMA Negeri Harapan Bangsa — Semua hak dilindungi.</small>
</footer>
`;
}
}
