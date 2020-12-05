  function activeParentTabLinks(el) {
    if(!el.classList.contains("tablinks"))
      return
    const parent = el.parentElement;
    if(parent.parentElement.parentElement.parentElement.classList.contains("buttons-foo"))
      parent.classList.add("parent-tab-active");
  }
  function disableParentTabLinks(el) {
    if(!el.classList.contains("tablinks"))
      return
    const parent = el.parentElement;
    parent.classList.remove("parent-tab-active");
  }

  function activeSmallProfile() {
    const profile = document.querySelector("div.profile");
    profile.classList.add("small-profile");
  }

  function closeTab() {
    var tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    const tabActive = document.querySelector(".tablinks.active");
    debugger
    if(tabActive === null)
      return
    tabActive.classList.remove("active");
    disableParentTabLinks(tabActive);
    //tablinks = document.getElementsByClassName("tablinks");
    /*for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
      disableParentTabLinks(tablinks[i]);
    }*/
  }

  function openPage(evt,pageName) {
    /*var tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
      disableParentTabLinks(tablinks[i]);
    }*/
    closeTab();
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.classList.add("active");
    activeParentTabLinks(evt.currentTarget);
    activeSmallProfile();

  }


  // Get the element with id="defaultOpen" and click on it
  //document.getElementById("defaultOpen").click();

