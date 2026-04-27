let menuOpen = false;

function toggleMenu(event) {
    event.stopPropagation();

    const sidebar = document.getElementById("sideMenu");

    if (menuOpen) {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "280px";
    }

    menuOpen = !menuOpen;
}
// Prevent sidebar click from closing
document.getElementById("sideMenu").addEventListener("click", function(event) {
    event.stopPropagation();
});

// Dropdown Logic
const dropdown = document.getElementsByClassName("dropdown-btn");

for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function(event) {
        event.stopPropagation();

        this.classList.toggle("active");
        const dropdownContent = this.nextElementSibling;

        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}  // ✅ 🔥 THIS WAS MISSING

document.addEventListener("click", function(event) {
    const sidebar = document.getElementById("sideMenu");
    const menuBtn = document.getElementById("menuBtn");

    if (
        menuOpen &&
        !sidebar.contains(event.target) &&
        !menuBtn.contains(event.target)
    ) {
        sidebar.style.width = "0";
        menuOpen = false;
    }
});
function openLogin() {
    document.getElementById("loginModal").style.display = "block";
}
function login() {
    const empId = document.getElementById("empId").value;
    const pass = document.getElementById("password").value;

    if (empId === "" || pass === "") {
        alert("Enter ID & Password");
        return;
    }

    const time = new Date().toLocaleString();

    // ✅ Save to localStorage
    localStorage.setItem("username", empId);
    localStorage.setItem("loginTime", time);

    // ✅ Update UI
    showUser();

    // ✅ Close modal
    document.getElementById("loginModal").style.display = "none";
}

function toggleProfile() {
    const box = document.getElementById("profileBox");
    box.style.display = box.style.display === "none" ? "block" : "none";
}
function logout() {
    localStorage.clear();
    location.reload();
}
function changePassword() {
    const newPass = prompt("Enter New Password:");
    if (newPass) {
        alert("Password changed successfully");
    }
}
let isPaused = false;

document.getElementById("noticeBoard").addEventListener("click", function () {
    const container = document.getElementById("scrollContainer");

    if (isPaused) {
        container.style.animationPlayState = "running";
    } else {
        container.style.animationPlayState = "paused";
    }

    isPaused = !isPaused;
});
let slides = document.querySelectorAll(".slide");
let index = 0;
let interval;

function showSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");
}

function startSlider() {
    interval = setInterval(() => {
        index = (index + 1) % slides.length;
        showSlide(index);
    }, 3000); // 3 sec
}

function stopSlider() {
    clearInterval(interval);
}

document.getElementById("slider").addEventListener("click", function () {
    if (interval) {
        stopSlider(); // pause
        interval = null;
    } else {
        startSlider(); // resume
    }
});

startSlider();


function showUser() {
    const user = localStorage.getItem("username");

    if (user) {
        document.getElementById("userSection").innerHTML =
            `<button class="user-btn" onclick="toggleProfile()">👤 ${user}</button>`;

        document.getElementById("menuBtn").style.display = "flex";

        document.getElementById("empName").innerText = user;
        document.getElementById("loginTime").innerText =
            localStorage.getItem("loginTime");
    }
}
window.onload = function () {
    showUser();
};
