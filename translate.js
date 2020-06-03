async function setLang(language) {
	const {ipcRenderer} = require('electron');
	const locale = await ipcRenderer.invoke('getLang', language);
	document.getElementsByTagName("html").lang = language; //sets content language to whatever language is being used

	for (let string in locale) {
		if (document.getElementById(string)) {
			document.getElementById(string).innerHTML = locale[string];
		}
	}
}

//is automatically called
setLang();