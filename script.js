function toggleTheme() {
  document.body.classList.toggle('light');
}

const dalilArray = [
  "Tuntutlah ilmu dari buaian hingga ke liang lahat. – KH. Hasyim Asy’ari",
  "Agama tanpa ilmu bagaikan lentera di tangan bayi. – Buya Hamka",
  "Jadilah manusia yang bermanfaat bagi sesama. – KH. Ahmad Dahlan",
  "Berbuat baiklah kepada siapa pun, tanpa memandang siapa dia. – KH. Abdurrahman Wahid (Gus Dur)",
  "Islam datang untuk memuliakan manusia. – KH. Mustofa Bisri (Gus Mus)",
  "Kesabaran adalah kunci dari segala keberhasilan. – Syekh Nawawi al-Bantani",
  "Jangan pernah lelah mencintai tanah air. – KH. Wahid Hasyim",
  "Ilmu tanpa amal adalah sia-sia. – KH. Zainuddin MZ",
  "Perbedaan adalah rahmat, bukan alasan untuk bermusuhan. – Buya Syafii Maarif",
  "Bangsa yang besar adalah bangsa yang menghargai ulama dan gurunya. – KH. Maimoen Zubair",
  "Hidup itu harus memberi manfaat, bukan sekadar mencari selamat. – KH. Ali Maksum",
  "Jangan pernah berhenti belajar dan mengajar. – Nyai Hj. Badriyah Fayumi",
  "Islam itu ramah, bukan marah. – KH. Mustofa Bisri (Gus Mus)",
  "Cinta tanah air adalah sebagian dari iman. – KH. Wahab Hasbullah",
  "Keadilan adalah pondasi utama dalam bermasyarakat. – KH. Ahmad Dahlan",
  "Jangan takut berbeda, selama benar dan bermanfaat. – KH. Abdurrahman Wahid (Gus Dur)",
  "Kesederhanaan adalah kemuliaan. – Buya Hamka",
  "Jangan menunda kebaikan, lakukan hari ini juga. – KH. Hasyim Muzadi",
  "Beragama itu memanusiakan manusia. – KH. Said Aqil Siradj",
  "Berjuanglah dengan ilmu dan akhlak. – KH. Agus Salim"
];

let lastIndex = -1;

function getRandomDalilIndex() {
  let idx;
  do {
    idx = Math.floor(Math.random() * dalilArray.length);
  } while (dalilArray.length > 1 && idx === lastIndex);
  lastIndex = idx;
  return idx;
}

document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('generate-dalil-btn');
  if (btn) {
    btn.onclick = function() {
      const idx = getRandomDalilIndex();
      document.getElementById('dalil-list').innerHTML = `<div style="margin-bottom:8px">${dalilArray[idx]}</div>`;
      this.textContent = "Tampilkan Dalil Lain";
    };

    btn.click();
  }
});

const tokohList = [
  {
    nama: "KH. Wahid Hasyim",
    foto: "Assets/tokoh/wahidhasyim.png",
    bio: "Putra KH. Hasyim Asy’ari, Menteri Agama RI pertama, pejuang kemerdekaan dan pembaharu pendidikan pesantren.",
    wilayah: "Jawa Timur, Nasional",
    karya: "Pembaharuan kurikulum pesantren, penguatan pendidikan agama di sekolah umum.",
    peran: "Mengintegrasikan pendidikan agama dan umum, memperjuangkan moderasi Islam di Indonesia."
  },
  {
    nama: "KH. Ahmad Dahlan",
    foto: "Assets/tokoh/darwis.png",
    bio: "Pendiri Muhammadiyah, tokoh pembaharu Islam dan pendidikan di Indonesia.",
    wilayah: "Yogyakarta, Jawa Tengah",
    karya: "Pendirian Muhammadiyah, sekolah-sekolah modern, rumah sakit, dan amal usaha.",
    peran: "Membawa pembaruan pendidikan dan sosial, memperkuat dakwah Islam modern."
  },
  {
    nama: "KH. Hasyim Asy’ari",
    foto: "Assets/tokoh/hasyimasyari.png",
    bio: "Pendiri Nahdlatul Ulama (NU), ulama besar dan pejuang kemerdekaan.",
    wilayah: "Jombang, Jawa Timur",
    karya: "Pendirian NU, kitab-kitab keislaman, pesantren Tebuireng.",
    peran: "Menguatkan tradisi pesantren dan Islam moderat di Indonesia."
  },
  {
    nama: "KH. Abdurrahman Wahid (Gus Dur)",
    foto: "Assets/tokoh/gusdur.png",
    bio: "Presiden RI ke-4, tokoh pluralisme dan demokrasi, cucu KH. Hasyim Asy’ari.",
    wilayah: "Nasional, Internasional",
    karya: "Buku-buku pemikiran Islam, gerakan sosial, reformasi NU.",
    peran: "Mempromosikan toleransi, demokrasi, dan hak asasi manusia."
  },
  {
    nama: "KH. Ahmad Bahauddin Nursalim (Gus Baha)",
    foto: "Assets/tokoh/gusbaha.png",
    bio: "Ulama muda kharismatik, ahli tafsir Al-Qur’an, dan pengasuh Pondok Pesantren Tahfidzul Qur’an LP3IA Narukan, Rembang.",
    wilayah: "Rembang, Jawa Tengah, Nasional",
    karya: "Ceramah-ceramah tafsir Al-Qur’an, pengajaran tahfidz, dan kajian keislaman.",
    peran: "Menyebarkan pemahaman Islam yang moderat, mendalam, dan membumi melalui kajian tafsir dan dakwah digital."
},
  {
    nama: "Buya Hamka",
    foto: "Assets/tokoh/buyahamka.png",
    bio: "Ulama, sastrawan, dan Ketua MUI pertama.",
    wilayah: "Sumatera Barat, Nasional",
    karya: "Tafsir Al-Azhar, novel Tenggelamnya Kapal Van Der Wijck.",
    peran: "Mengembangkan dakwah melalui sastra dan tafsir Al-Qur’an."
  },
  {
    nama: "KH. Mustofa Bisri (Gus Mus)",
    foto: "Assets/tokoh/gusmus.png",
    bio: "Ulama, budayawan, penyair, dan pengasuh Pesantren Raudlatut Thalibin.",
    wilayah: "Rembang, Jawa Tengah",
    karya: "Kumpulan puisi, ceramah, buku keislaman.",
    peran: "Menyebarkan Islam ramah, cinta damai, dan budaya literasi."
},
  {
    nama: "KH. Syafii Maarif",
    foto: "Assets/tokoh/syafii.png",
    bio: "Cendekiawan muslim, mantan Ketua Umum PP Muhammadiyah.",
    wilayah: "Sumatera Barat, Nasional",
    karya: "Buku pemikiran Islam, artikel, dan pendidikan.",
    peran: "Mendorong Islam inklusif, toleran, dan pembaruan pemikiran Islam."
  },
  {
    nama: "KH. Quraish Shihab",
    foto: "Assets/tokoh/shihab.png",
    bio: "Ulama tafsir, penulis, dan pendiri Pusat Studi Al-Qur’an.",
    wilayah: "Nasional",
    karya: "Tafsir Al-Mishbah, buku-buku tafsir dan keislaman.",
    peran: "Mengembangkan pemahaman Al-Qur’an yang moderat dan kontekstual."
  },
  {
    nama: "Prof. Dr. Nasaruddin Umar, MA",
    foto: "Assets/tokoh/nasaruddinumar.png",
    bio: "Imam Besar Masjid Istiqlal, cendekiawan muslim, dan mantan Wakil Menteri Agama RI.",
    wilayah: "Nasional",
    karya: "Buku-buku tafsir, pengembangan Masjid Istiqlal, ceramah nasional.",
    peran: "Mempromosikan Islam moderat, dialog antaragama, dan penguatan peran masjid di Indonesia."
  },
  {
    nama: "KH. Zainuddin MZ",
    foto: "Assets/tokoh/zainudin.png",
    bio: "Dikenal sebagai Dai Sejuta Umat, ulama dan penceramah kondang yang sangat populer di Indonesia.",
    wilayah: "Nasional",
    karya: "Ceramah-ceramah, rekaman dakwah, buku keislaman.",
    peran: "Menyebarkan dakwah Islam secara luas melalui media massa dan ceramah di berbagai daerah."
},
  {
    nama: "KH. Maimoen Zubair",
    foto: "Assets/tokoh/maimunzubair.png",
    bio: "Ulama kharismatik, pengasuh Pondok Pesantren Al-Anwar Sarang, dikenal luas sebagai tokoh NU dan panutan ulama Indonesia.",
    wilayah: "Rembang, Jawa Tengah, Nasional",
    karya: "Pengembangan pesantren, kitab-kitab keislaman, pembinaan santri dan masyarakat.",
    peran: "Menguatkan tradisi pesantren, peran ulama dalam masyarakat, dan memperjuangkan Islam moderat di Indonesia."
}
];

function renderTokohCards() {
  const container = document.getElementById('tokoh-cards');
  if (!container) return;
  container.innerHTML = '';
  tokohList.forEach((tokoh, i) => {
    const card = document.createElement('div');
    card.className = 'tokoh-card';
    card.style = 'background:var(--card-bg,#fff);color:var(--text,#111);border-radius:10px;padding:1rem 1.2rem;min-width:180px;max-width:200px;box-shadow:0 2px 8px rgba(0,0,0,0.07);cursor:pointer;transition:transform 0.15s; text-align:center;';
    card.innerHTML = `<b>${tokoh.nama}</b>`;
    card.onclick = () => showTokohModal(tokoh);
    container.appendChild(card);
  });
}

function renderTokohCards() {
  const container = document.getElementById('tokoh-cards');
  if (!container) return;
  container.innerHTML = '';
  tokohList.forEach((tokoh, i) => {
    const card = document.createElement('div');
    card.className = 'tokoh-card';
    card.innerHTML = `
      <img src="${tokoh.foto}" alt="Foto ${tokoh.nama}" class="tokoh-img">
      <b>${tokoh.nama}</b>
    `;
    card.onclick = () => showTokohModal(tokoh);
    container.appendChild(card);
  });
}

function showTokohModal(tokoh) {
  document.getElementById('modal-nama').textContent = tokoh.nama;
  document.getElementById('modal-bio').textContent = tokoh.bio;
  document.getElementById('modal-wilayah').textContent = tokoh.wilayah;
  document.getElementById('modal-karya').textContent = tokoh.karya;
  document.getElementById('modal-peran').textContent = tokoh.peran;
  document.getElementById('modal-foto').src = tokoh.foto;
  document.getElementById('tokoh-modal').style.display = 'flex';
}

function showTokohModal(tokoh) {
  document.getElementById('modal-nama').textContent = tokoh.nama;
  document.getElementById('modal-bio').textContent = tokoh.bio;
  document.getElementById('modal-wilayah').textContent = tokoh.wilayah;
  document.getElementById('modal-karya').textContent = tokoh.karya;
  document.getElementById('modal-peran').textContent = tokoh.peran;
  document.getElementById('tokoh-modal').style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', function() {
  renderTokohCards();
  document.getElementById('close-tokoh-modal').onclick = function() {
    document.getElementById('tokoh-modal').style.display = 'none';
  };
  document.getElementById('tokoh-modal').onclick = function(e) {
    if (e.target === this) this.style.display = 'none';
  };
});

const quizQuestions = [
  {
    q: "Siapakah pendiri Nahdlatul Ulama (NU)?",
    options: ["KH. Ahmad Dahlan", "KH. Hasyim Asy’ari", "Buya Hamka", "KH. Abdurrahman Wahid"],
    answer: 1
  },
  {
    q: "Siapakah pendiri Muhammadiyah?",
    options: ["KH. Ahmad Dahlan", "KH. Hasyim Asy’ari", "KH. Mustofa Bisri", "KH. Quraish Shihab"],
    answer: 0
  },
  {
    q: "Siapakah Presiden RI ke-4 yang dikenal sebagai Gus Dur?",
    options: ["KH. Ahmad Dahlan", "KH. Abdurrahman Wahid", "KH. Maimoen Zubair", "KH. Zainuddin MZ"],
    answer: 1
  },
  {
    q: "Siapakah ulama yang dikenal sebagai Dai Sejuta Umat?",
    options: ["KH. Zainuddin MZ", "KH. Quraish Shihab", "KH. Mustofa Bisri", "Buya Hamka"],
    answer: 0
  },
  {
    q: "Apa karya terkenal Buya Hamka di bidang tafsir?",
    options: ["Tafsir Al-Mishbah", "Tafsir Al-Azhar", "Kitab Kuning", "Tafsir Jalalain"],
    answer: 1
  },
  {
    q: "Siapakah pengasuh Pondok Pesantren Al-Anwar Sarang?",
    options: ["KH. Ahmad Dahlan", "KH. Maimoen Zubair", "KH. Mustofa Bisri", "KH. Wahid Hasyim"],
    answer: 1
  },
  {
    q: "Siapakah tokoh yang dikenal sebagai Gus Baha?",
    options: ["KH. Ahmad Bahauddin Nursalim", "KH. Mustofa Bisri", "KH. Quraish Shihab", "KH. Syafii Maarif"],
    answer: 0
  },
  {
    q: "Apa organisasi yang didirikan KH. Ahmad Dahlan?",
    options: ["NU", "Muhammadiyah", "ICMI", "MUI"],
    answer: 1
  },
  {
    q: "Siapakah penulis Tafsir Al-Mishbah?",
    options: ["KH. Quraish Shihab", "KH. Mustofa Bisri", "KH. Ahmad Dahlan", "Buya Hamka"],
    answer: 0
  },
  {
    q: "Siapakah Imam Besar Masjid Istiqlal saat ini?",
    options: ["KH. Quraish Shihab", "Prof. Dr. Nasaruddin Umar, MA", "KH. Maimoen Zubair", "KH. Wahid Hasyim"],
    answer: 1
  },
  {
    q: "Siapakah tokoh yang dikenal sebagai Gus Mus?",
    options: ["KH. Mustofa Bisri", "KH. Ahmad Dahlan", "KH. Wahid Hasyim", "KH. Zainuddin MZ"],
    answer: 0
  },
  {
    q: "Apa peran utama KH. Wahid Hasyim dalam sejarah Indonesia?",
    options: ["Pendiri Muhammadiyah", "Menteri Agama RI pertama", "Ketua MUI", "Presiden RI ke-4"],
    answer: 1
  },
  {
    q: "Siapakah tokoh yang dikenal sebagai cendekiawan muslim dan mantan Ketua Umum PP Muhammadiyah?",
    options: ["KH. Quraish Shihab", "KH. Syafii Maarif", "KH. Ahmad Dahlan", "KH. Mustofa Bisri"],
    answer: 1
  },
  {
    q: "Apa karya sastra terkenal Buya Hamka?",
    options: ["Tenggelamnya Kapal Van Der Wijck", "Laskar Pelangi", "Siti Nurbaya", "Ayat-Ayat Cinta"],
    answer: 0
  },
  {
    q: "Siapakah tokoh yang aktif dalam dialog antaragama dan penguatan peran masjid di Indonesia?",
    options: ["KH. Quraish Shihab", "KH. Ahmad Dahlan", "Prof. Dr. Nasaruddin Umar, MA", "KH. Mustofa Bisri"],
    answer: 2
  },
  {
    q: "Apa nama organisasi intelektual muslim yang berdiri tahun 1990-an?",
    options: ["ICMI", "NU", "Muhammadiyah", "MUI"],
    answer: 0
  },
  {
    q: "Siapakah tokoh yang dikenal sebagai penggerak Islam moderat dan pluralisme?",
    options: ["KH. Abdurrahman Wahid", "KH. Ahmad Dahlan", "KH. Mustofa Bisri", "KH. Quraish Shihab"],
    answer: 0
  },
  {
    q: "Siapakah tokoh yang dikenal sebagai pengasuh Pesantren Tebuireng dan aktivis HAM?",
    options: ["KH. Salahuddin Wahid (Gus Sholah)", "KH. Ahmad Dahlan", "KH. Mustofa Bisri", "KH. Wahid Hasyim"],
    answer: 0
  },
  {
    q: "Siapakah tokoh perempuan yang dikenal sebagai ulama dan aktivis perempuan Indonesia?",
    options: ["Nyai Hj. Badriyah Fayumi", "KH. Mustofa Bisri", "KH. Ahmad Dahlan", "KH. Quraish Shihab"],
    answer: 0
  },
  {
    q: "Apa peran utama KH. Hasyim Asy’ari dalam sejarah Islam Indonesia?",
    options: ["Pendiri NU", "Pendiri Muhammadiyah", "Ketua MUI", "Imam Besar Masjid Istiqlal"],
    answer: 0
  }
];

let quizIndex = 0;
let quizScore = 0;
let quizTimeout = null;

function showQuizQuestion() {
  const q = quizQuestions[quizIndex];
  document.getElementById('quiz-question').innerHTML = `<b>Soal ${quizIndex + 1}:</b> ${q.q}`;
  document.getElementById('quiz-options').innerHTML = q.options.map((opt, i) =>
    `<button class="quiz-opt" onclick="selectQuizAnswer(${i})">${opt}</button>`
  ).join("<br>");
  document.getElementById('quiz-progress').textContent = `Soal ${quizIndex + 1} dari ${quizQuestions.length}`;
  document.getElementById('quiz-score').textContent = "";
  document.getElementById('quiz-next').style.display = "none";
}

window.selectQuizAnswer = function(idx) {
  const q = quizQuestions[quizIndex];
  const buttons = document.querySelectorAll('.quiz-opt');
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.style.background = "#4caf50";
    if (i === idx && i !== q.answer) btn.style.background = "#e74c3c";
  });
  if (idx === q.answer) {
    quizScore++;
    document.getElementById('quiz-score').textContent = "Jawaban benar!";
  } else {
    document.getElementById('quiz-score').textContent = `Jawaban salah! Jawaban benar: ${q.options[q.answer]}`;
  }
  document.getElementById('quiz-next').style.display = "inline-block";

  // Otomatis next setelah 3 detik
  if (quizTimeout) clearTimeout(quizTimeout);
  quizTimeout = setTimeout(() => {
    document.getElementById('quiz-next').click();
  }, 3000);
};

document.getElementById('quiz-next').onclick = function() {
  if (quizTimeout) clearTimeout(quizTimeout);
  quizIndex++;
  if (quizIndex < quizQuestions.length) {
    showQuizQuestion();
  } else {
    document.getElementById('quiz-question').innerHTML = `Selesai! Skor kamu: <b>${quizScore} / ${quizQuestions.length}</b>`;
    document.getElementById('quiz-options').innerHTML = "";
    document.getElementById('quiz-progress').textContent = "";
    document.getElementById('quiz-score').textContent = "";
    document.getElementById('quiz-next').style.display = "none";
    document.getElementById('quiz-restart').style.display = "inline-block";
  }
};

document.getElementById('quiz-next').onclick = function() {
  quizIndex++;
  if (quizIndex < quizQuestions.length) {
    showQuizQuestion();
  } else {
    document.getElementById('quiz-question').innerHTML = `Selesai! Skor kamu: <b>${quizScore} / ${quizQuestions.length}</b>`;
    document.getElementById('quiz-options').innerHTML = "";
    document.getElementById('quiz-progress').textContent = "";
    document.getElementById('quiz-score').textContent = "";
    document.getElementById('quiz-next').style.display = "none";
    document.getElementById('quiz-restart').style.display = "inline-block";
  }
};

document.getElementById('quiz-restart').onclick = function() {
  quizIndex = 0;
  quizScore = 0;
  this.style.display = "none";
  showQuizQuestion();
};

if (document.getElementById('quiz-app')) showQuizQuestion();

document.addEventListener('DOMContentLoaded', function() {

  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('sidebar-toggle');
  let overlay = document.getElementById('sidebar-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'sidebar-overlay';
    document.body.appendChild(overlay);
  }

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (toggleBtn) {
    toggleBtn.onclick = openSidebar;
  }
  overlay.onclick = closeSidebar;

  window.addEventListener('resize', function() {
    if (window.innerWidth > 900) closeSidebar();
  });
});