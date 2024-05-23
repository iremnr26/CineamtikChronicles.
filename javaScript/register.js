document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini engeller

    // Kullanıcı adı ve şifreleri al
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var messageElement = document.getElementById("message");

    // Şifrelerin eşleştiğini kontrol et
    if (password !== confirmPassword) {
        messageElement.innerHTML = "Passwords do not match!";
        messageElement.style.color = "red";
        return;
    }

    // Kullanıcı bilgilerini localStorage'dan al ve user array'ine ekle
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Kullanıcı adının zaten var olup olmadığını kontrol et
    var userExists = users.some(function(user) {
        return user.username === username;
    });

    if (userExists) {
        messageElement.innerHTML = "Username already exists!";
        messageElement.style.color = "red";
        return;
    }

    users.push({ username: username, password: password });
    localStorage.setItem("users", JSON.stringify(users));

    // Başarılı kayıt mesajı göster
    messageElement.innerHTML = "Registration successful!";
    messageElement.style.color = "green";

    // Kayıt sonrası login sayfasına yönlendirme yap
    setTimeout(function() {
        window.location.href = "../index.html";
    }, 2000);
});
