var fileInput = document.getElementById('fileInput');
var submitButton = document.getElementById('submitButton');
var errorMessage = document.getElementById('errorMessage');
var allowedExtensions = /(\.jpg|\.png)$/i;

fileInput.addEventListener('change', function() {
    if (fileInput.files.length > 0) {
        var fileSize = fileInput.files[0].size; // Ukuran file dalam byte
        var fileName = fileInput.files[0].name;
        var fileSizeMB = fileSize / (1024 * 1024); // Konversi ukuran file ke MB
        if (!allowedExtensions.exec(fileName)) {
            errorMessage.textContent = "File harus dalam format JPG atau PNG.";
            errorMessage.style.display = 'block';
            fileInput.value = '';
            submitButton.disabled = true; // Menonaktifkan tombol kirim
        } else if (fileSizeMB > 10) {
            errorMessage.textContent = "Ukuran file tidak boleh lebih dari 10 MB.";
            errorMessage.style.display = 'block';
            fileInput.value = '';
            submitButton.disabled = true; // Menonaktifkan tombol kirim
        } else {
            errorMessage.style.display = 'none';
            submitButton.disabled = false; // Mengaktifkan tombol kirim
        }
    }
});
