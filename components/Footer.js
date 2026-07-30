import { Component } from "./Component.js";
export class Footer extends Component {
render() {
const tahun = new Date().getFullYear();
return `
<footer>
<small>&copy; ${tahun} SMK YADIKA SOREANG — Semua hak dilindungi.</small>
</footer>
`;
}
}
