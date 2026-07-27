export class Component {
constructor(props = {}) {
// "props" = data yang dikirim dari luar ke component ini.
// Konsep ini PERSIS sama dengan "props" di Vue!
this.props = props;
}
// Method render() WAJIB di-override (ditimpa) oleh anak (subclass).
// Tugasnya: mengembalikan potongan HTML dalam bentuk string.
render() {
throw new Error("Method render() belum dibuat di class turunannya!");
}
}

