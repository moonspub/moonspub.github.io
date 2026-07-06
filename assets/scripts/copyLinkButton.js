if ("clipboard" in navigator) {
	const copyLinkButton = document.createElement("button");
	copyLinkButton.innerHTML = "Share";
	copyLinkButton.id = "shareButton";
	copyLinkButton.onclick = 
	function copyLink() {
			const currentLink = window.location.href;
			navigator.clipboard.writeText(currentLink);
			alert ("current blogpost link (" + currentLink + ") copied to clipboard.");
	}
	document.getElementById("copyLinkButton").appendChild(copyLinkButton);
	console.log("copy to clipboard button spawned");
} else {
	console.log("Your browser does not appear to support navigator.clipboard, so the clipboard button is disabled.");
}
