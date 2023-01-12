import { Button } from "./components/Button";
import { Close } from "./components/Close";
import { Footer } from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Hero
        logo="SMUUTY"
        Headline="Rambut Kembali Lebat Dan Sehat Tanpa Perlu Ngeluarin Banyak Uang"
        paragraf="Jika Anda Mengalami Masalah Di Bawah Ini "
        image={`1.jpg`}
        Section="Selamat Kamu Berada Di Website Yang Tepat"
      />
      <div className="-mt-32">
        <Hero
          paragraf1="Sudah tidak diragukan lagi bahwa Kemiri, Sari Jahe, Minyak Argan dan Urang Aring dapat mencegah rambut rontok, memperbaiki rambut rusak, merangsang pertumbuhan rambut dan mampu menghilangkan uban. "
          paragraf2="Kabar baiknya kita kemas semua bahan herbal di atas menjadi satu produk SMUUTY Hair Treatment Untuk menyelesaikan masalah anda."
          image={`2.jpg`}
          Section="Ucapkan Selamat Tinggal rasa MALU karena BOTAK, KETOMBEAN DAN UBAN."
          Section1="dan anda akan jauh lebih PERCAYA DIRI dengan rambut yang lebih SEHAT dan LEBAT."
        />
      </div>
      <div className="-mt-32">
        <Hero
          paragraf3="'CUKUP HABISKAN 1 BOTOL LANGSUNG ADA PERUBAHAN'"
          paragraf1="Bekerja 7X Lebih Cepat"
          image={`9.webp`}
          Section="Mengatasi Kebotakan Parah"
        />
      </div>
      <div className="-mt-32">
        <Hero image={`8.webp`} Section="Menumbuhkan Kembali Anak Rambut" />
      </div>
      <div className="-mt-32">
        <Hero Section="Menghilangkan Uban Secara Permanen" image={`7.jpg`} />
      </div>
      <div className="-mt-32">
        <Hero
          paragraf1="Ribuan orang sudah mencoba dan buktikan sendiri khasiatnya"
          image={`10.webp`}
        />
      </div>
      <div className="-mt-32">
        <Hero image={`11.webp`} />
      </div>
      <div className="-mt-32">
        <Hero
          paragraf3="TENANG PRODUK KITA 100% HERBAL DAN SUDAN BPOM"
          image={`5.jpg`}
        />
      </div>
      <div className="-mt-24">
        <Close />
      </div>
      <div className="-mt-32">
        <Hero
          paragraf1="Cegah Sebelum Terlambat Hanya Menggunakan SMUUTY HAIR TREATMENT"
          image={`12.png`}
        />
      </div>
      <Button />
      <Footer />
    </div>
  );
}

export default App;
