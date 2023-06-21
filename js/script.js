const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      serachBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

      modeSwitch.addEventListener("click", () =>{
        body.classList.toggle('dark')
      });

      toggle.addEventListener("click", ()=>{
        sidebar.classList.toggle("close");
      })