const tarotCards = [
  {
    "title": "The Fool",
    "image": "images/the-fool.svg",
    "zodiac": "Rasi: Kucing Arcana Mayor",
    "meaning": "Awal baru yang manis. Hari ini kamu boleh melangkah ringan seperti anak kucing mengejar bintang."
  },
  {
    "title": "The Magician",
    "image": "images/the-magician.svg",
    "zodiac": "Rasi: Kucing Arcana Mayor",
    "meaning": "Kamu punya pesona yang bisa mengubah hari biasa jadi ajaib. Bahkan kucing-kucing kosmik ikut terpukau."
  },
  {
    "title": "The High Priestess",
    "image": "images/the-high-priestess.svg",
    "zodiac": "Rasi: Kucing Arcana Mayor",
    "meaning": "Intuisimu sedang kuat. Kalau hatimu bilang ingin dimanja, berarti itu wahyu resmi dari bulan."
  },
  {
    "title": "The Empress",
    "image": "images/the-empress.svg",
    "zodiac": "Rasi: Kucing Arcana Mayor",
    "meaning": "Energi kamu hari ini lembut, cantik, dan berharga. Kamu pantas dirawat seperti ratu kecil semesta."
  },
  {
    "title": "The Emperor",
    "image": "images/the-emperor.svg",
    "zodiac": "Rasi: Kucing Arcana Mayor",
    "meaning": "Kamu punya sisi kuat yang bikin dunia terasa lebih tertata. Tapi tetap boleh minta pelukan."
  },
  {
    "title": "The Hierophant",
    "image": "images/the-hierophant.svg",
    "zodiac": "Rasi: Kucing Arcana Mayor",
    "meaning": "Hari ini semesta mengajarkan: kebahagiaan kecil juga perlu dirayakan dengan serius."
  },
  {
    "title": "The Lovers",
    "image": "images/the-lovers.svg",
    "zodiac": "Rasi: Kucing Arcana Mayor",
    "meaning": "Ada cinta yang hangat di sekitarmu. Clue-nya: seseorang sampai membuat tarot kucing ini."
  },
  {
    "title": "The Chariot",
    "image": "images/the-chariot.svg",
    "zodiac": "Rasi: Kucing Arcana Mayor",
    "meaning": "Kamu sedang bergerak maju. Pelan juga tidak apa-apa, yang penting tetap menuju hal baik."
  },
  {
    "title": "Strength",
    "image": "images/strength.svg",
    "zodiac": "Rasi: Kucing Arcana Mayor",
    "meaning": "Kekuatanmu tidak selalu keras. Kadang bentuknya sabar, lembut, dan tetap tersenyum."
  },
  {
    "title": "The Hermit",
    "image": "images/the-hermit.svg",
    "zodiac": "Rasi: Kucing Arcana Mayor",
    "meaning": "Saat ingin tenang, ambil waktu untuk diri sendiri. Kucing bulan akan menjaga mimpimu."
  },
  {
    "title": "Wheel of Fortune",
    "image": "images/wheel-of-fortune.svg",
    "zodiac": "Rasi: Kucing Arcana Mayor",
    "meaning": "Keberuntungan sedang berputar. Semoga berhenti di makanan enak, kabar baik, dan perhatian manis."
  },
  {
    "title": "Justice",
    "image": "images/justice.svg",
    "zodiac": "Rasi: Kucing Arcana Mayor",
    "meaning": "Kartu ini memutuskan: hari ini kamu berhak mendapat perlakuan paling manis."
  },
  {
    "title": "The Hanged Man",
    "image": "images/the-hanged-man.svg",
    "zodiac": "Rasi: Kucing Arcana Mayor",
    "meaning": "Coba lihat hari ini dari sudut berbeda. Mungkin dunia sedang menyiapkan kejutan kecil."
  },
  {
    "title": "Death",
    "image": "images/death.svg",
    "zodiac": "Rasi: Kucing Arcana Mayor",
    "meaning": "Bukan akhir yang menyeramkan. Ini tanda perubahan lucu: versi baru kamu yang makin bersinar."
  },
  {
    "title": "Temperance",
    "image": "images/temperance.svg",
    "zodiac": "Rasi: Kucing Arcana Mayor",
    "meaning": "Campuran terbaik hari ini: tenang, bahagia, sedikit manja, dan banyak disayang."
  },
  {
    "title": "The Devil",
    "image": "images/the-devil.svg",
    "zodiac": "Rasi: Kucing Arcana Mayor",
    "meaning": "Godaan hari ini mungkin snack, rebahan, atau minta perhatian ekstra. Semesta tidak menghakimi."
  },
  {
    "title": "The Tower",
    "image": "images/the-tower.svg",
    "zodiac": "Rasi: Kucing Arcana Mayor",
    "meaning": "Kalau ada hal menyebalkan, biarkan runtuh. Nanti dibangun lagi dengan bantal, teh, dan cinta."
  },
  {
    "title": "The Star",
    "image": "images/the-star.svg",
    "zodiac": "Rasi: Kucing Arcana Mayor",
    "meaning": "Harapanmu sedang menyala lembut. Para kucing bintang mengirimkan keberuntungan kecil."
  },
  {
    "title": "The Moon",
    "image": "images/the-moon.svg",
    "zodiac": "Rasi: Kucing Arcana Mayor",
    "meaning": "Malam mungkin penuh misteri, tapi kamu tetap bersinar. Bahkan bulan iri sedikit."
  },
  {
    "title": "The Sun",
    "image": "images/the-sun.svg",
    "zodiac": "Rasi: Kucing Arcana Mayor",
    "meaning": "Kartu paling cerah. Hari ini kamu wajib bahagia, makan enak, dan merasa dicintai."
  },
  {
    "title": "Judgement",
    "image": "images/judgement.svg",
    "zodiac": "Rasi: Kucing Arcana Mayor",
    "meaning": "Panggilan semesta: saatnya menerima bahwa kamu memang spesial."
  },
  {
    "title": "The World",
    "image": "images/the-world.svg",
    "zodiac": "Rasi: Kucing Arcana Mayor",
    "meaning": "Siklus indah selesai dan yang baru dimulai. Tahun ini semoga duniamu makin hangat."
  },
  {
    "title": "Ace of Wands",
    "image": "images/ace-of-wands.svg",
    "zodiac": "Rasi: Wands Cat Constellation",
    "meaning": "Awal baru sedang datang membawa semangat kecil yang menyala seperti ekor kucing terkena cahaya bintang. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Two of Wands",
    "image": "images/two-of-wands.svg",
    "zodiac": "Rasi: Wands Cat Constellation",
    "meaning": "Pilihan lembut sedang datang membawa semangat kecil yang menyala seperti ekor kucing terkena cahaya bintang. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Three of Wands",
    "image": "images/three-of-wands.svg",
    "zodiac": "Rasi: Wands Cat Constellation",
    "meaning": "Kebersamaan sedang datang membawa semangat kecil yang menyala seperti ekor kucing terkena cahaya bintang. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Four of Wands",
    "image": "images/four-of-wands.svg",
    "zodiac": "Rasi: Wands Cat Constellation",
    "meaning": "Ketenangan sedang datang membawa semangat kecil yang menyala seperti ekor kucing terkena cahaya bintang. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Five of Wands",
    "image": "images/five-of-wands.svg",
    "zodiac": "Rasi: Wands Cat Constellation",
    "meaning": "Tantangan kecil sedang datang membawa semangat kecil yang menyala seperti ekor kucing terkena cahaya bintang. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Six of Wands",
    "image": "images/six-of-wands.svg",
    "zodiac": "Rasi: Wands Cat Constellation",
    "meaning": "Kenangan manis sedang datang membawa semangat kecil yang menyala seperti ekor kucing terkena cahaya bintang. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Seven of Wands",
    "image": "images/seven-of-wands.svg",
    "zodiac": "Rasi: Wands Cat Constellation",
    "meaning": "Mimpi dan harapan sedang datang membawa semangat kecil yang menyala seperti ekor kucing terkena cahaya bintang. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Eight of Wands",
    "image": "images/eight-of-wands.svg",
    "zodiac": "Rasi: Wands Cat Constellation",
    "meaning": "Gerak maju sedang datang membawa semangat kecil yang menyala seperti ekor kucing terkena cahaya bintang. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Nine of Wands",
    "image": "images/nine-of-wands.svg",
    "zodiac": "Rasi: Wands Cat Constellation",
    "meaning": "Rasa cukup sedang datang membawa semangat kecil yang menyala seperti ekor kucing terkena cahaya bintang. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Ten of Wands",
    "image": "images/ten-of-wands.svg",
    "zodiac": "Rasi: Wands Cat Constellation",
    "meaning": "Pencapaian sedang datang membawa semangat kecil yang menyala seperti ekor kucing terkena cahaya bintang. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Page of Wands",
    "image": "images/page-of-wands.svg",
    "zodiac": "Rasi: Wands Cat Constellation",
    "meaning": "Pesan lucu sedang datang membawa semangat kecil yang menyala seperti ekor kucing terkena cahaya bintang. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Knight of Wands",
    "image": "images/knight-of-wands.svg",
    "zodiac": "Rasi: Wands Cat Constellation",
    "meaning": "Energi berani sedang datang membawa semangat kecil yang menyala seperti ekor kucing terkena cahaya bintang. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Queen of Wands",
    "image": "images/queen-of-wands.svg",
    "zodiac": "Rasi: Wands Cat Constellation",
    "meaning": "Aura cantik sedang datang membawa semangat kecil yang menyala seperti ekor kucing terkena cahaya bintang. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "King of Wands",
    "image": "images/king-of-wands.svg",
    "zodiac": "Rasi: Wands Cat Constellation",
    "meaning": "Kekuatan tenang sedang datang membawa semangat kecil yang menyala seperti ekor kucing terkena cahaya bintang. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Ace of Cups",
    "image": "images/ace-of-cups.svg",
    "zodiac": "Rasi: Cups Cat Constellation",
    "meaning": "Awal baru sedang datang membawa perasaan hangat, perhatian manis, dan hati yang sedang berbunga. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Two of Cups",
    "image": "images/two-of-cups.svg",
    "zodiac": "Rasi: Cups Cat Constellation",
    "meaning": "Pilihan lembut sedang datang membawa perasaan hangat, perhatian manis, dan hati yang sedang berbunga. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Three of Cups",
    "image": "images/three-of-cups.svg",
    "zodiac": "Rasi: Cups Cat Constellation",
    "meaning": "Kebersamaan sedang datang membawa perasaan hangat, perhatian manis, dan hati yang sedang berbunga. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Four of Cups",
    "image": "images/four-of-cups.svg",
    "zodiac": "Rasi: Cups Cat Constellation",
    "meaning": "Ketenangan sedang datang membawa perasaan hangat, perhatian manis, dan hati yang sedang berbunga. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Five of Cups",
    "image": "images/five-of-cups.svg",
    "zodiac": "Rasi: Cups Cat Constellation",
    "meaning": "Tantangan kecil sedang datang membawa perasaan hangat, perhatian manis, dan hati yang sedang berbunga. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Six of Cups",
    "image": "images/six-of-cups.svg",
    "zodiac": "Rasi: Cups Cat Constellation",
    "meaning": "Kenangan manis sedang datang membawa perasaan hangat, perhatian manis, dan hati yang sedang berbunga. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Seven of Cups",
    "image": "images/seven-of-cups.svg",
    "zodiac": "Rasi: Cups Cat Constellation",
    "meaning": "Mimpi dan harapan sedang datang membawa perasaan hangat, perhatian manis, dan hati yang sedang berbunga. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Eight of Cups",
    "image": "images/eight-of-cups.svg",
    "zodiac": "Rasi: Cups Cat Constellation",
    "meaning": "Gerak maju sedang datang membawa perasaan hangat, perhatian manis, dan hati yang sedang berbunga. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Nine of Cups",
    "image": "images/nine-of-cups.svg",
    "zodiac": "Rasi: Cups Cat Constellation",
    "meaning": "Rasa cukup sedang datang membawa perasaan hangat, perhatian manis, dan hati yang sedang berbunga. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Ten of Cups",
    "image": "images/ten-of-cups.svg",
    "zodiac": "Rasi: Cups Cat Constellation",
    "meaning": "Pencapaian sedang datang membawa perasaan hangat, perhatian manis, dan hati yang sedang berbunga. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Page of Cups",
    "image": "images/page-of-cups.svg",
    "zodiac": "Rasi: Cups Cat Constellation",
    "meaning": "Pesan lucu sedang datang membawa perasaan hangat, perhatian manis, dan hati yang sedang berbunga. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Knight of Cups",
    "image": "images/knight-of-cups.svg",
    "zodiac": "Rasi: Cups Cat Constellation",
    "meaning": "Energi berani sedang datang membawa perasaan hangat, perhatian manis, dan hati yang sedang berbunga. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Queen of Cups",
    "image": "images/queen-of-cups.svg",
    "zodiac": "Rasi: Cups Cat Constellation",
    "meaning": "Aura cantik sedang datang membawa perasaan hangat, perhatian manis, dan hati yang sedang berbunga. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "King of Cups",
    "image": "images/king-of-cups.svg",
    "zodiac": "Rasi: Cups Cat Constellation",
    "meaning": "Kekuatan tenang sedang datang membawa perasaan hangat, perhatian manis, dan hati yang sedang berbunga. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Ace of Swords",
    "image": "images/ace-of-swords.svg",
    "zodiac": "Rasi: Swords Cat Constellation",
    "meaning": "Awal baru sedang datang membawa pikiran jernih, intuisi tajam, dan keberanian berkata jujur. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Two of Swords",
    "image": "images/two-of-swords.svg",
    "zodiac": "Rasi: Swords Cat Constellation",
    "meaning": "Pilihan lembut sedang datang membawa pikiran jernih, intuisi tajam, dan keberanian berkata jujur. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Three of Swords",
    "image": "images/three-of-swords.svg",
    "zodiac": "Rasi: Swords Cat Constellation",
    "meaning": "Kebersamaan sedang datang membawa pikiran jernih, intuisi tajam, dan keberanian berkata jujur. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Four of Swords",
    "image": "images/four-of-swords.svg",
    "zodiac": "Rasi: Swords Cat Constellation",
    "meaning": "Ketenangan sedang datang membawa pikiran jernih, intuisi tajam, dan keberanian berkata jujur. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Five of Swords",
    "image": "images/five-of-swords.svg",
    "zodiac": "Rasi: Swords Cat Constellation",
    "meaning": "Tantangan kecil sedang datang membawa pikiran jernih, intuisi tajam, dan keberanian berkata jujur. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Six of Swords",
    "image": "images/six-of-swords.svg",
    "zodiac": "Rasi: Swords Cat Constellation",
    "meaning": "Kenangan manis sedang datang membawa pikiran jernih, intuisi tajam, dan keberanian berkata jujur. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Seven of Swords",
    "image": "images/seven-of-swords.svg",
    "zodiac": "Rasi: Swords Cat Constellation",
    "meaning": "Mimpi dan harapan sedang datang membawa pikiran jernih, intuisi tajam, dan keberanian berkata jujur. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Eight of Swords",
    "image": "images/eight-of-swords.svg",
    "zodiac": "Rasi: Swords Cat Constellation",
    "meaning": "Gerak maju sedang datang membawa pikiran jernih, intuisi tajam, dan keberanian berkata jujur. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Nine of Swords",
    "image": "images/nine-of-swords.svg",
    "zodiac": "Rasi: Swords Cat Constellation",
    "meaning": "Rasa cukup sedang datang membawa pikiran jernih, intuisi tajam, dan keberanian berkata jujur. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Ten of Swords",
    "image": "images/ten-of-swords.svg",
    "zodiac": "Rasi: Swords Cat Constellation",
    "meaning": "Pencapaian sedang datang membawa pikiran jernih, intuisi tajam, dan keberanian berkata jujur. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Page of Swords",
    "image": "images/page-of-swords.svg",
    "zodiac": "Rasi: Swords Cat Constellation",
    "meaning": "Pesan lucu sedang datang membawa pikiran jernih, intuisi tajam, dan keberanian berkata jujur. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Knight of Swords",
    "image": "images/knight-of-swords.svg",
    "zodiac": "Rasi: Swords Cat Constellation",
    "meaning": "Energi berani sedang datang membawa pikiran jernih, intuisi tajam, dan keberanian berkata jujur. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Queen of Swords",
    "image": "images/queen-of-swords.svg",
    "zodiac": "Rasi: Swords Cat Constellation",
    "meaning": "Aura cantik sedang datang membawa pikiran jernih, intuisi tajam, dan keberanian berkata jujur. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "King of Swords",
    "image": "images/king-of-swords.svg",
    "zodiac": "Rasi: Swords Cat Constellation",
    "meaning": "Kekuatan tenang sedang datang membawa pikiran jernih, intuisi tajam, dan keberanian berkata jujur. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Ace of Pentacles",
    "image": "images/ace-of-pentacles.svg",
    "zodiac": "Rasi: Pentacles Cat Constellation",
    "meaning": "Awal baru sedang datang membawa kenyamanan, rezeki kecil, makanan enak, dan hal-hal yang membuat aman. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Two of Pentacles",
    "image": "images/two-of-pentacles.svg",
    "zodiac": "Rasi: Pentacles Cat Constellation",
    "meaning": "Pilihan lembut sedang datang membawa kenyamanan, rezeki kecil, makanan enak, dan hal-hal yang membuat aman. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Three of Pentacles",
    "image": "images/three-of-pentacles.svg",
    "zodiac": "Rasi: Pentacles Cat Constellation",
    "meaning": "Kebersamaan sedang datang membawa kenyamanan, rezeki kecil, makanan enak, dan hal-hal yang membuat aman. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Four of Pentacles",
    "image": "images/four-of-pentacles.svg",
    "zodiac": "Rasi: Pentacles Cat Constellation",
    "meaning": "Ketenangan sedang datang membawa kenyamanan, rezeki kecil, makanan enak, dan hal-hal yang membuat aman. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Five of Pentacles",
    "image": "images/five-of-pentacles.svg",
    "zodiac": "Rasi: Pentacles Cat Constellation",
    "meaning": "Tantangan kecil sedang datang membawa kenyamanan, rezeki kecil, makanan enak, dan hal-hal yang membuat aman. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Six of Pentacles",
    "image": "images/six-of-pentacles.svg",
    "zodiac": "Rasi: Pentacles Cat Constellation",
    "meaning": "Kenangan manis sedang datang membawa kenyamanan, rezeki kecil, makanan enak, dan hal-hal yang membuat aman. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Seven of Pentacles",
    "image": "images/seven-of-pentacles.svg",
    "zodiac": "Rasi: Pentacles Cat Constellation",
    "meaning": "Mimpi dan harapan sedang datang membawa kenyamanan, rezeki kecil, makanan enak, dan hal-hal yang membuat aman. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Eight of Pentacles",
    "image": "images/eight-of-pentacles.svg",
    "zodiac": "Rasi: Pentacles Cat Constellation",
    "meaning": "Gerak maju sedang datang membawa kenyamanan, rezeki kecil, makanan enak, dan hal-hal yang membuat aman. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Nine of Pentacles",
    "image": "images/nine-of-pentacles.svg",
    "zodiac": "Rasi: Pentacles Cat Constellation",
    "meaning": "Rasa cukup sedang datang membawa kenyamanan, rezeki kecil, makanan enak, dan hal-hal yang membuat aman. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Ten of Pentacles",
    "image": "images/ten-of-pentacles.svg",
    "zodiac": "Rasi: Pentacles Cat Constellation",
    "meaning": "Pencapaian sedang datang membawa kenyamanan, rezeki kecil, makanan enak, dan hal-hal yang membuat aman. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Page of Pentacles",
    "image": "images/page-of-pentacles.svg",
    "zodiac": "Rasi: Pentacles Cat Constellation",
    "meaning": "Pesan lucu sedang datang membawa kenyamanan, rezeki kecil, makanan enak, dan hal-hal yang membuat aman. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Knight of Pentacles",
    "image": "images/knight-of-pentacles.svg",
    "zodiac": "Rasi: Pentacles Cat Constellation",
    "meaning": "Energi berani sedang datang membawa kenyamanan, rezeki kecil, makanan enak, dan hal-hal yang membuat aman. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "Queen of Pentacles",
    "image": "images/queen-of-pentacles.svg",
    "zodiac": "Rasi: Pentacles Cat Constellation",
    "meaning": "Aura cantik sedang datang membawa kenyamanan, rezeki kecil, makanan enak, dan hal-hal yang membuat aman. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  },
  {
    "title": "King of Pentacles",
    "image": "images/king-of-pentacles.svg",
    "zodiac": "Rasi: Pentacles Cat Constellation",
    "meaning": "Kekuatan tenang sedang datang membawa kenyamanan, rezeki kecil, makanan enak, dan hal-hal yang membuat aman. Untuk hari ulang tahunmu, ini tanda kecil bahwa kamu pantas bahagia."
  }
];

const cardsEl = document.getElementById("cards");
const resultEl = document.getElementById("result");
const resetBtn = document.getElementById("resetBtn");

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function renderCards() {
  cardsEl.innerHTML = "";
  resultEl.innerHTML = "<p>🐾 Kartu belum dibuka. Para kucing bintang masih berunding...</p>";

  shuffle(tarotCards).slice(0, 3).forEach((card, index) => {
    const cardEl = document.createElement("article");
    cardEl.className = "card";
    cardEl.innerHTML = `
      <div class="card-inner">
        <div class="face front">
          <div class="card-symbol">✦<span>CARD ${index + 1}</span></div>
        </div>
        <div class="face back">
          <img class="tarot-img" src="${card.image}" alt="${card.title}">
          <h3>${card.title}</h3>
          <p class="meaning">${card.meaning}</p>
          <p class="zodiac">${card.zodiac}</p>
        </div>
      </div>
    `;

    cardEl.addEventListener("click", () => {
      cardEl.classList.toggle("open");
      resultEl.innerHTML = `
        <p><strong>${card.title}</strong></p>
        <p>${card.meaning}</p>
      `;
    });

    cardsEl.appendChild(cardEl);
  });
}

resetBtn.addEventListener("click", renderCards);
renderCards();
