import React from "react";

export default function AboutDesc() {
  return (
    <>
      <p
        id="text"
        className="font-ghaly text-base pb-3 text-gray-600 dark:text-[#d3d4d6] "
      >
        Hai, Saya&apos;Ihsan Rafiq. Saya adalah mahasiswa dari sekolah tinggi teknologi indonesia tanjung pinang.{" "}
      </p>
      <p className="font-ghaly text-base pb-4 text-gray-600 dark:text-[#d3d4d6] ">
      Saya mulai belajar web development pada bulan Mei 2021, saya sudah pernah
      tertarik dengan cara kerja perangkat lunak dan cara menggunakannya untuk memecahkan masalah yang rumit
      permasalahan dan memberikan dampak positif terhadap kehidupan masyarakat. jadi saya
      memutuskan untuk menjadikan rekayasa perangkat lunak sebagai bidang profesional saya.
        <br />
        Awalnya, saya tidak punya pengalaman sebelumnya dalam pengembangan web, tapi saya punya
        bertekad untuk belajar dan mengasah keterampilan saya. Untuk mencapai ini, saya beralih ke
        berbagai sumber belajar seperti {" "}
        <span className="border-dotted font-semibold border-b-2 border-orange-500 hover:text-orange-500 dark:hover:text-orange-500">
          Youtube
        </span>{" "}
        dan{" "}
        <span className="border-dotted font-semibold border-b-2 border-blue-300 hover:text-blue-300 dark:hover:text-blue-300">
          Dari Kampus STT INDONESIA
        </span>{" "}
      </p>

      <p className="font-ghaly text-base pb-4 text-gray-600 dark:text-[#d3d4d6] ">
        {" "}
        Ada banyak hal dan teknologi yang bisa dipelajari di frontend
        developer dan itu memotivasi saya untuk mengeksplorasi lebih banyak tantangan. saya menikmati
        mempelajari sesuatu yang baru dan melakukan penelitian serta berkolaborasi.
      </p>
      <p className="font-ghaly text-base pb-4 text-gray-600 dark:text-[#d3d4d6] ">
        Di website ini saya akan menulis beberapa blog dan memamerkan proyek saya. Saya
        percaya bahwa menulis apa yang telah saya pelajari adalah cara terbaik untuk mengingat
        banyak hal, dan saya dapat berbagi pengetahuan saya selama ini. Jadi, hubungi saya dan
        Saya akan dengan senang hati membantu!
      </p>
    </>
  );
}
