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
    const id = document.querySelector(".modal input[type='text']").value;
    const pass = document.querySelector(".modal input[type='password']").value;

    if (id === "" || pass === "") {
        alert("Enter ID & Password");
        return;
    }

    const name = "Employee " + id;
    const time = new Date().toLocaleString();

    document.getElementById("empName").innerText = name;
    document.getElementById("loginTime").innerText = time;

    // ✅ Show menu
    document.getElementById("menuBtn").style.display = "flex";

    // ✅ Replace LOGIN with PROFILE only
    document.getElementById("userSection").innerHTML = `
        <button class="user-btn" onclick="toggleProfile()">PROFILE</button>
    `;

    // ✅ Hide profile initially
    document.getElementById("profileBox").style.display = "none";

    document.getElementById("loginModal").style.display = "none";
}

function toggleProfile() {
    const box = document.getElementById("profileBox");
    box.style.display = box.style.display === "none" ? "block" : "none";
}
function logout() {
    location.reload(); // simple reset
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
localStorage.setItem("username", name);