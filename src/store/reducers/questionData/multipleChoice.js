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
        src: "https://images-na.ssl-images-amazon.com/images/I/31iAToN2BEL._AC_SY400_.jpg",
        repeat: 6,
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
      1: "6",
    },
  },
  {
    type: "MULTIPLE_CHOICE",
    questions:
      "Diantara hewan-hewan ini, hewan manakah yang tidak termasuk kedalam jenis yang sama?",
    assets: [
      {
        src:
          "https://images.theconversation.com/files/250401/original/file-20181213-110249-1czg7z.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=200&h=200.0&fit=crop",
        repeat: 1,
        alt: "Foto kuda",
      },
      {
        src:
          "https://bloximages.newyork1.vip.townnews.com/gjsentinel.com/content/tncms/assets/v3/editorial/a/41/a41bb520-a1e3-5507-85e5-7c62c1fd0a64/5affb53017f82.image.jpg?resize=200%2C200",
        repeat: 1,
        alt: "Foto ayam",
      },
      {
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM24Ne_z5dLcWHwmRH8pjsmObokzDadDfNXA&usqp=CAU",
        repeat: 1,
        alt: "Foto buaya",
      },
      {
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU62Md2yC4lIg8Mt_ZUGEVBaoXR7apfYbWbQ&usqp=CAU",
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
