const question = [
  {
    type: "TEXTBOX",
    questions: "Berapakah hasil dari penjumlahan dari operasi ini? <br/> 2 + 2 * 4",
    assets: [],
    placeholder: "Masukkan hasil perhitungan disini...",
    answer: {
      1: "10",
    },
  },
  {
    type: "TEXTBOX",
    questions: "Apa hasil dari angka selanjutnya dari deret angka dibawah ini? <br/> 1 1 2 3 5 ...",
    assets: [],
    placeholder: "Masukkan hasil perhitungan disini...",
    answer: {
      1: "8",
    },
  },
  {
    type: "TEXTBOX",
    questions:
      "Sebutkan kata-kata dibawah ini yang terdapat kesalahan ejaan?<br/>Pengggaris, Pencsil, Buku, Menulis, Tinta",
    assets: [],
    placeholder: "Tuliskan jawaban dengan ',' di tiap jawabannya",
    answer: {
      1: "Pengggaris,Pencsil",
    },
  },
  {
    type: "TEXTBOX",
    questions: "Berapakah hasil dari penjumlahan dari operasi ini? <br/> (1 + 3) / 2 * 2",
    assets: [],
    placeholder: "Masukkan hasil perhitungan disini...",
    answer: {
      1: "4",
    },
  },
  {
    type: "TEXTBOX",
    questions: "Siapakah bapak proklamasi Indonesia?",
    assets: [
      {
        src:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Soekarno.jpg/220px-Soekarno.jpg",
        repeat: 1,
        alt: "Foto pahlawan",
      },
    ],
    placeholder: "Masukkan hasil jawaban disini...",
    answer: {
      1: "Soekarno",
    },
  },
  {
    type: "TEXTBOX",
    questions:
      "Jika kamu mengikuti lomba lari dan kamu berada di posisi 4, berapa banyak posisi yang harus kamu balap untuk mendapatkan posisi ke-2?",
    assets: [],
    placeholder: "Masukkan hasil jawaban disini...",
    answer: {
      1: "2",
    },
  },
];

export default question;
