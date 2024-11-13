// page.js
import React from 'react';
import Layout from '../componen/layout';
import Card from '../componen/card'; // Import the Card component
import art1 from "./img/art1.jpg"

const Page = () => {
  const cardsData = [
    {
      image: art1.jpg,
      title: '5 Tips Sehat untuk Hidup Lebih Baik',
      description: 'Temukan cara mudah untuk meningkatkan kesehatan Anda dengan perubahan gaya hidup yang sederhana.',
      link: '#'
    },
    {
      image: 'art2.jpg',
      title: 'Pentingnya Pemeriksaan Kesehatan Rutin',
      description: 'Pemeriksaan rutin adalah kunci untuk mencegah penyakit dan mendeteksi masalah kesehatan lebih awal.',
      link: '#'
    },
    {
      image: 'art3.jpg',
      title: 'Bergabung dengan Program Fitness Kami',
      description: 'Ikuti program olahraga yang sesuai dengan tujuan kebugaran Anda dan rasakan manfaatnya.',
      link: '#'
    },
    {
      image: 'art4.jpg',
      title: 'Layanan Kesehatan 24 Jam',
      description: 'Kami menyediakan layanan kesehatan darurat dan konsultasi medis kapan saja Anda membutuhkannya.',
      link: '#'
    },
    {
      image: 'art5.jpg',
      title: 'Suplemen yang Diperlukan untuk Imunitas',
      description: 'Cari tahu suplemen terbaik untuk meningkatkan sistem kekebalan tubuh Anda.',
      link: '#'
    }
  ];

  return (
    <Layout>
      <div className="card-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Page;
