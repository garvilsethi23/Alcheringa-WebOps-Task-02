gsap.registerPlugin(ScrollTrigger);
const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");
let issidebaropen = false;
let timecount;
document.addEventListener("mousemove", (e) => {
  if (e.clientX < 30 && !issidebaropen) {
    timecount = setTimeout(() => {
      document.body.classList.add("sidebaropen");
      issidebaropen = true;
    }, 250);
  } else {
    clearTimeout(timecount);
  }
});

sidebar.addEventListener("mouseenter", () => {
  document.body.classList.add("sidebaropen");
  issidebaropen = true;
});

const menu = document.getElementById("menu");
menu.addEventListener('click', () => {
    document.body.classList.toggle('sidebaropen');
    issidebaropen = !issidebaropen;
});

sidebar.addEventListener("mouseleave", () => {
  document.body.classList.remove("sidebaropen");
  issidebaropen = false;
});

const sideitems = document.querySelectorAll(".sideitems");

sideitems.forEach((item) => {
  item.addEventListener("click", () => {
    const target = document.getElementById(item.getAttribute("data-target"));
    target.classList.toggle("dropdown-open");
    const arrow = item.querySelector(".arrow i");
    if (target.classList.contains("dropdown-open")) {
      arrow.classList.remove("fa-caret-down");
      arrow.classList.add("fa-caret-up");
    } else {
      arrow.classList.remove("fa-caret-up");
      arrow.classList.add("fa-caret-down");
    }
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   const tableBody = document.querySelector("#userTable tbody");

//   async function fetchdata() {
//     try {
//       const response = await fetch("https://dummyjson.com/users");
//       const data = await response.json();
//       const users = data.users;
//       addrows(users);
//     } catch (error) {
//       console.error("data couldn't be fetched, error:", error);
//     }
//   }

//   function addrows(users) {
//     users.forEach((user) => {
//       const row = document.createElement("tr");

//       row.innerHTML = `<td>${user.firstName} ${user.maidenName} ${user.lastName}</td>
//             <td>${user.username}</td>
//             <td>${user.email}</td>
//             <td>
//                 <button class="edit"><i class="fa-regular fa-floppy-disk"></i>&nbsp; &nbsp;Edit</button>
//                 <button class="delete"><i class="fa-regular fa-floppy-disk"></i>&nbsp; &nbsp;Delete</button>
//             </td>`;

//       row.querySelector(".delete").addEventListener("click", () => {
//         row.remove();
//       });

//       tableBody.appendChild(row);
//     });
//   }

//   fetchdata();
// });

window.addEventListener("DOMContentLoaded", (event) => {
  if (window.innerWidth > 0) {
    gsap.fromTo(
      ".bigimage",
      {
        x: "-100vw",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      ".welcome",
      {
        y: "-10vh",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      ".bigusername",
      {
        x: "100vw",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
  }
});


document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("addUserModal");
    var btn = document.getElementById("adduser");
    var span = document.getElementsByClassName("close")[0];
    var cancelBtn = document.getElementById("cancelBtn");



    btn.onclick = function() {
        modal.style.display = "block";
        content.classList.add("blur");
    }
   
    span.onclick = function() {
        modal.style.display = "none";
        content.classList.remove("blur");
    }


    cancelBtn.onclick = function() {
        modal.style.display = "none";
        content.classList.remove("blur");
    }


    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            content.classList.remove("blur");
        }
    }

});


