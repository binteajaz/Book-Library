import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { initializeApp, getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
apiKey: "AIzaSyA8aV998ApaPujzQTkCoD4E50sx0s60xyM",
authDomain: "fir-project-b174a.firebaseapp.com",
projectId: "fir-project-b174a",
storageBucket: "fir-project-b174a.appspot.com",
messagingSenderId: "923392808645",
appId: "1:923392808645:web:29ad01061df8b0df4c42ac",
measurementId: "G-XQLV1F1DQ6"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

//   search btn

searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle("active");
    console.log("search form");
}

// Log out logics and greet logics

let UserInfo = JSON.parse(sessionStorage.getItem("user-info"));
let GreetHead = document.getElementById('greet');
let SignoutBtn = document.getElementById('signout');

if (UserInfo && UserInfo.fullname) {
    GreetHead.innerText = `${UserInfo.fullname}!`;
} else {

    SignoutBtn.style.display = 'none';
}

let SignOut = () => {
    sessionStorage.removeItem("user-creds");
    sessionStorage.removeItem("user-info");
    window.location.href = "index.html";
}

SignoutBtn.addEventListener('click', SignOut);


// Add book section
document.addEventListener('DOMContentLoaded', function () {
    var addNowBtn = document.getElementById('addNowBtn');
    var addedBooksDiv = document.getElementById('addedBooks');
    var UserInfo = JSON.parse(sessionStorage.getItem("user-info"));

    addNowBtn.addEventListener('click', function () {
        if (UserInfo && UserInfo.fullname) {
            var bookTitle = prompt('Enter the book title:');
            var bookAuthor = prompt('Enter the book author:');
            var bookImage = prompt('Enter the book image URL:');

            if (bookTitle && bookAuthor && bookImage) {
                var addedBookDiv = document.createElement('div');
                addedBookDiv.innerHTML = `
                    <div class="book-details">
                        <img src="${bookImage}" alt="${bookTitle}" style="max-width: 100px; max-height: 150px;">
                        <p><strong>Title:</strong> ${bookTitle}</p>
                        <p><strong>Author:</strong> ${bookAuthor}</p>
                    </div>
                `;

                addedBooksDiv.appendChild(addedBookDiv);
            } else {
                alert('Please enter book title, author, and image URL.');
            }
        } else {
            var confirmRegister = confirm('You need to be signed in to add books. Do you want to register now?');
            
            if (confirmRegister) {
                window.location.href = "registrationFiles/register.html";
            }
        }
    });
});

//     home section

var swipper= new Swiper('.books-list' , {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1040: {
            slidesPerView: 3
        },
    },
});

//      featured section

varswiper = new Swiper(".featured-slider",{
    spaceBetween:10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        450: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1040: {
            slidesPerView: 4
        },
    },
});
      
// 

var swiper= new Swiper('.books-list' , {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1040: {
            slidesPerView: 3
        },
    },
});

//      featured section

var swiper = new Swiper(".featured-slider",{
    spaceBetween:10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        450: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1040: {
            slidesPerView: 4
        },
    },
});
