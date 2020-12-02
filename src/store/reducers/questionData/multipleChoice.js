const question = [
  {
    type: "MULTIPLE_CHOICE",
    questions:
      "Diantara angka-angka dibawah ini. Angka mana yang paling besar diantara semuanya?<br/>12.020, 54.210, 53.110, 10.333, 69.420.",
    assets: [],
    choices: {
      1: "12.020",
      2: "54.210",
      3: "69.420",
      4: "53.110",
    },
    answer: {
      3: "69.420",
    },
  },
  {
    type: "MULTIPLE_CHOICE",
    questions: "Berapakah jumlah itik yang ada di foto ini?",
    assets: [
      {
        src: "",
        repeat: 8,
        alt: "Foto itik",
      },
    ],
    choices: {
      1: "6",
      2: "2",
      3: "8",
      4: "3",
    },
    answer: {
      3: "8",
    },
  },
  {
    type: "MULTIPLE_CHOICE",
    questions:
      "Diantara hewan-hewan ini, hewan manakah yang tidak termasuk kedalam jenis yang sama?",
    assets: [
      {
        src: "",
        repeat: 1,
        alt: "Foto kuda",
      },
      {
        src: "",
        repeat: 1,
        alt: "Foto ayam",
      },
      {
        src: "",
        repeat: 1,
        alt: "Foto buaya",
      },
      {
        src: "",
        repeat: 1,
        alt: "Foto Kucing",
      },
    ],
    choices: {
      1: "Kuda",
      2: "Ayam",
      3: "Buaya",
      4: "Kucing",
    },
    answer: {
      2: "Ayam",
      3: "Buaya",
    },
  },
  {
    type: "MULTIPLE_CHOICE",
    questions: "Apa yang kamu lihat di gambar ini?",
    assets: [
      {
        src:
          "https://4.bp.blogspot.com/-LOAraMviBN8/UJCWKRLpknI/AAAAAAAAA3I/5ejYqrdFiMc/s1600/youngorold.jpg",
        repeat: 1,
        alt: "Gambar Ilusi",
      },
    ],
    choices: {
      1: "Nenek-nenek",
      2: "Wanita muda",
    },
    answer: {
      1: "Nenek-nenek",
      2: "Wanita muda",
    },
  },
];

export default question;
