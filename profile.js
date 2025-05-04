document.getElementById("profileForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent the default form submission

  // Collect form data
  const name = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const alamat = document.getElementById("alamat").value;
  const telepon = document.getElementById("telepon").value;
  const jk = document.querySelector('input[name="jk"]:checked').value;
  const hobi = [];
  
  if (document.getElementById("hobi1").checked) hobi.push("Membaca");
  if (document.getElementById("hobi2").checked) hobi.push("Olahraga");
  if (document.getElementById("hobi3").checked) hobi.push("Menulis");

  const deskripsi = document.getElementById("deskripsi").value;
  
  // Save the hobbies as a comma-separated string in localStorage
  localStorage.setItem("hobi", hobi.join(', '));  // Save hobbies to localStorage

  // Save the data to localStorage (optional: saving full profile)
  localStorage.setItem("profileData", JSON.stringify({
    name, email, alamat, telepon, jk, hobi, deskripsi
  }));

  // Optionally, show a message to the user
  alert("Profile updated successfully!");
  
  // Optionally, redirect or update the page to reflect changes
  window.location.href = "about_me.html"; // Or wherever you want to go
});
