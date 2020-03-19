const electron = require("electron");
const {app, BrowserWindow} = electron;
const path = require("path");

app.on("ready", () => {
	let win = new BrowserWindow({
		width: 1015,
		height: 700,
		icon: path.join(__dirname, "/app/icons/icon.png"),
		webPreferences: {
			partition: "persist:NuPrice"
		}
	});
	win.loadURL(`file://${__dirname}/app/index.html`)
});