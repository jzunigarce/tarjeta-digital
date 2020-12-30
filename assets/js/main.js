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

	String.prototype.toCapitalize = function() {
		return `${this.charAt(0).toUpperCase()}${this.slice(1)}`;
	}

	function createCustomShareButton({platform, text, url}) {
		return `<button data-sharer="${platform}" data-title="${text}" data-url="${url}"><i class="icon-${platform}"></i> ${platform.toCapitalize()}</button>`;
	}

	function getSharedOptionalTemplate(data) {
		const platforms = ['facebook', 'twitter', 'whatsapp', 'mail'];
		const buttons = platforms.map(p => createCustomShareButton({platform: p, ...data})).join('');
	return `<div class="share-dialog">${buttons}</div>`;
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

 function openCustomShareModal({title, text, url}) {
		const sharedContainer = document.querySelector("#Share");
		sharedContainer.innerHTML = getSharedOptionalTemplate({url, text});
		window.Sharer.init();

 }

	async function openNativeShareModal({title, text, url}) {
		try {
			await navigator.share({title, text, url});
		} catch(err) {
			console.log("Error to sharing");
		}
	}

 async function openPage(evt,pageName) {
    closeTab();
		
	 if(pageName === 'Share') {
			const title = "Compartir";
			const text = "Cambiar por mensaje que se desee";
			const url = "https://www.google.com.mx/";
			if(navigator.share !== undefined) {
				await openNativeShareModal({title, text, url});
				return;
			} else {
				openCustomShareModal({title, text, url});
			}
		}

    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.classList.add("active");
    activeParentTabLinks(evt.currentTarget);
    activeSmall();
    showCloseButton()
    document.querySelector(".content-card").classList.add("small");
    hideQrTab()
  }
