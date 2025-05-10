// Ambil elemen buku dari HTML berdasarkan ID
const interactiveBook = document.getElementById('interactiveBook');
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

musicBtn.addEventListener("click", function () {
    if (isPlaying) {
        music.pause();
        musicBtn.textContent = "music";
    } else {
        music.play();
        musicBtn.textContent = "Pause";
    }
    isPlaying = !isPlaying;
});

// Pastikan elemen buku ditemukan sebelum menambahkan event listener
if (interactiveBook) {
  // Tambahkan event listener untuk 'click' pada buku
  interactiveBook.addEventListener('click', () => {
    // Toggle (tambah/hapus) class 'open' pada elemen buku
    interactiveBook.classList.toggle('open');
  });
} else {
  console.error("Elemen dengan ID 'interactiveBook' tidak ditemukan.");
}