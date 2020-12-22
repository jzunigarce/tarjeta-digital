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

	function getSharedOptionalTemplate() {
	return `<div class="share-dialog">
		<button data-sharer="facebook" data-title="Tarjeta digital" data-url="https://www.google.com.mx/"><i class="icon-facebook"></i> Facebook</button>
		<button data-sharer="twitter" data-title="Tarjeta digital" data-url="https://www.google.com.mx/"><i class="icon-twitter"></i> Twitter</button>
		<button data-sharer="whatsapp" data-title="Tarjeta digital" data-url="https://www.google.com.mx/"><i class="icon-whatsapp"></i> Whatsapp</button>
		<button data-sharer="email" data-title="Tarjeta digital" data-url="https://www.google.com.mx/"><i class="icon-mail"></i> Email</button>
	</div>`
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

	async function openShareModal() {
		const sharedContainer = document.querySelector("#Share");
		if(navigator.share === undefined) {
			sharedContainer.innerHTML = getSharedOptionalTemplate();
			window.Sharer.init();
			return;
		}
		try {
			const title = "Compartir";
			const text = "Cambiar por mensaje que se desee";
			const url = "https://www.google.com.mx/";
		
			await navigator.share({title, text, url});
		} catch(err) {
			console.log("Error to sharing");
		}
	}

 function openPage(evt,pageName) {
    closeTab();
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.classList.add("active");
    activeParentTabLinks(evt.currentTarget);
		if(pageName === 'Share') {
			openShareModal();
		}
    activeSmall();
    showCloseButton()
    document.querySelector(".content-card").classList.add("small");
    hideQrTab()
  }
