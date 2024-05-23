document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini engeller

    // Kullanıcı adı ve şifreyi al
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var messageElement = document.getElementById("message");

    // Kullanıcı bilgilerini localStorage'dan al
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Kullanıcı adı ve şifrenin doğru olup olmadığını kontrol et
    var authenticatedUser = users.find(function(user) {
        return user.username === username && user.password === password;
    });

    if (authenticatedUser) {
        localStorage.setItem("username", username);
        messageElement.innerHTML = "Succesful!";
        messageElement.style.color = "#5cb85c";
        // Başarılı giriş durumunda başka bir sayfaya yönlendirme yapabilirsiniz
        window.location.href = "../home.html"; // Yönlendirilecek sayfanın URL'sini belirtin
    } else {
        messageElement.innerHTML = "Wrong username or password. Please try again.";
        messageElement.style.color = "#d9534f";
    }
});