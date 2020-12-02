import React from "react";

export default function BeforeQuizStart({ setStart, user }) {
  return (
    <>
      <h1 className="font-bold text-7xl my-8 text-gray-900">Hello {user}.</h1>
      <div className="shadow-lg p-16 my-5 w-3/5 bg-black font-bold text-gray-100">
        <h1 className="text-4xl underline">Before start the quiz.</h1>
        <br />
        <p className="text-xl">
          Total pertanyaan yang akan ditampilkan di quiz ini adalah sebanyak 10.
          Pertanyaan-pertanyaan tersebut akan terdiri dari pilihan ganda, pilihan ganda dengan 2
          jawaban benar, isian, dan pencocokkan gambar. <br />
          <br />
          Setelah mengisi semua pertanyaan yang ada, Anda akan berada di akhir quiz yang akan
          menampilkan hasil akhir dari quiz yang telah anda kerjakan dan juga akan mengupload hasil
          dari quiz yang sudah dikerjakan jika anda seorang registered user.
        </p>
        <br />
        <button
          onClick={() => setStart((prev) => !prev)}
          className="p-3 text-gray-900 text-xl font-bold bg-white hover:bg-gray-200"
        >
          Mulai quiznya.
        </button>
      </div>
    </>
  );
}
