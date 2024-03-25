
var notyf = new Notyf();

// Fungsi untuk menampilkan notifikasi
function showNotification(message, type) {
    notyf.open({
        type: error, // Jenis notifikasi (success, error, warning, info)
        message: anu // Pesan notifikasi
    });
}
