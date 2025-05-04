document.addEventListener('DOMContentLoaded', function () {
  // Check if the form exists and add an event listener to it
  const form = document.getElementById('profileForm');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting the traditional way

      // Get form values
      const nama = document.getElementById('nama').value;
      const email = document.getElementById('email').value;
      const pass = document.getElementById('pass').value;
      const alamat = document.getElementById('alamat').value;
      const telepon = document.getElementById('telepon').value;
      const jk = document.querySelector('input[name="jk"]:checked').value;

      // Collect hobbies
      const hobi = [];
      if (document.getElementById('hobi1').checked) hobi.push('Membaca');
      if (document.getElementById('hobi2').checked) hobi.push('Olahraga');
      if (document.getElementById('hobi3').checked) hobi.push('Menulis');

      const deskripsi = document.getElementById('deskripsi').value;
      const foto = document.getElementById('foto').files[0]; // Optionally save file reference

      // Store data in localStorage
      localStorage.setItem('nama', nama);
      localStorage.setItem('email', email);
      localStorage.setItem('pass', pass);  // You may choose not to store password in localStorage for security
      localStorage.setItem('alamat', alamat);
      localStorage.setItem('telepon', telepon);
      localStorage.setItem('jk', jk);
      localStorage.setItem('hobi', hobi.join(', ')); // Join array into a comma-separated string
      localStorage.setItem('deskripsi', deskripsi);

      // Redirect to About Me page
      window.location.href = 'about_me.html';
    });
  }
});
