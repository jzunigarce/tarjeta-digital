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

  function activeSmall() {
    const containerProfile = document.querySelector(".container-profile");
    containerProfile.classList.add("small")
    const containerTabs = document.querySelector(".container-tabs");
    containerTabs.classList.add("small")
  }

  function disableSmall() {
    const containerProfile = document.querySelector(".container-profile");
    containerProfile.classList.remove("small")
    const containerTabs = document.querySelector(".container-tabs");
    containerTabs.classList.remove("small")
  }

  function closeTab() {
    var tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    const tabActive = document.querySelector(".tablinks.active");
    if(tabActive === null)
      return
    tabActive.classList.remove("active");
    disableParentTabLinks(tabActive);
    
  }

  function handleCloseTab() {
    //hideCloseButton()
    closeTab()
    showDefaultTab();
    disableSmall();
    ShowQrTab();
    document.querySelector(".content-card").classList.remove("small");
  }

  function showCloseButton() {
    const closeTabButton = document.querySelector(".close-tab-icon");
    closeTabButton.style.display = "block";
  }

  function ShowQrTab() {
    const floatbox = document.querySelector(".floatbox");
    floatbox.style.display = "table";
  }
 function hideQrTab() {
    const floatbox = document.querySelector(".floatbox");
    floatbox.style.display = "none";
  }

  function hideCloseButton() {
      const closeTabButton = document.querySelector(".close-tab-icon");
      closeTabButton.style.display = "none"
  }

  function showDefaultTab() {
    const defaultTab = document.querySelector(".default-tab");
    defaultTab.style.display = "block";
  }

  function openPage(evt,pageName) {
    closeTab();
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.classList.add("active");
    activeParentTabLinks(evt.currentTarget);
    activeSmall();
    showCloseButton()
    document.querySelector(".content-card").classList.add("small");
    hideQrTab()
  }

function onStartAnimatedCloseTabIcon(e) {
  //debugger
  //if(e.target.style.top === 0)
    //e.target.style.display = "none";
}

function onEndAnimatedCloseTabIcon(e) {
  //debugger
  //if(e.target.style.top === 0)
   // e.target.style.display = "none";
}



const closeTabIcon = document.querySelector(".close-tab-icon");
closeTabIcon.addEventListener("transitionstart", onStartAnimatedCloseTabIcon);
closeTabIcon.addEventListener("webkitTransitionStart", onStartAnimatedCloseTabIcon);
closeTabIcon.addEventListener("transitionend", onEndAnimatedCloseTabIcon);
closeTabIcon.addEventListener("webkitTransitionEnd", onEndAnimatedCloseTabIcon);

  // Get the element with id="defaultOpen" and click on it
  //document.getElementById("defaultOpen").click();

/*const closeTabIcon = document.querySelection(".close-tab-icon");

closeTabIcon.addEventListener("webkitAnimationEnd", myEndFunction);
closeTabIcon.addEventListener("animationend", myEndFunction);

closeTabIcon.addEventListener("webkitAnimationStart", myStartFunction);
closeTabIcon.addEventListener("animationstart", myStartFunction);*/