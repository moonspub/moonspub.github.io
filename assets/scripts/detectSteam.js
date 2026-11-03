var userAgentString = navigator.userAgent;
if (userAgentString.includes("Valve")) {
	console.log("[MP detectSteam] HTML MOTD or Steam Client IS detected.");
	console.log("[MP detectSteam] Removing target attribute from discord-link");
	document.getElementById("discord-link").removeAttribute("target");
	} else {
	console.log("[MP detectSteam] HTML MOTD or Steam Client NOT detected.");
}
