async function setLang(language) {
	const {ipcRenderer} = require('electron');
	const locale = await ipcRenderer.invoke('getLang', language);

	for (let string in locale) {
		if (document.getElementById(string)) {
			document.getElementById(string).innerHTML = locale[string];
		}
	}
}

//is automatically called
setLang();