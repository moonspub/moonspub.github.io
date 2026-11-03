if (localStorage.getItem("localStorageEpoch") == null) {
	localStorage.setItem("localStorageEpoch", Date.now());
}
console.log("[MP cacheBuster] Performing AMW JavaScript cachebusting procedure");
console.log("[MP cacheBuster] Current UNIX Epoch in miliseconds is " + Date.now() +", checking localStorage value.");
if (localStorage.getItem("unixEpochUpdate") == null) {
	console.log("[MP cacheBuster] UNIX Epoch in miliseconds local storage not set, setting value now.");
	localStorage.setItem("unixEpochUpdate", Date.now());
	console.log("[MP cacheBuster] UNIX Epoch in miliseconds set to " + localStorage.getItem("unixEpochUpdate"));
} else {
	console.log("[MP cacheBuster] UNIX Epoch in miliseconds local storage value is " + localStorage.getItem("unixEpochUpdate"));
}
if (localStorage.getItem("unixEpochUpdate") != null) {
	var unixEpochLsVal = localStorage.getItem("unixEpochUpdate");
	var unixEpochVal = Date.now();
	var unixEpochAdd = 86400000;
	var unixEpochRefreshLimit = Number(unixEpochLsVal) + Number(unixEpochAdd);
	console.log("[MP cacheBuster] UNIX Epoch in miliseconds Refresh Limit is " + unixEpochRefreshLimit);
	console.log("[MP cacheBuster] Checking UNIX Epoch in miliseconds to see if 1 day has passed since last local storage update.");
	if (Number(unixEpochVal) > Number(unixEpochRefreshLimit)) {
		console.warn("[MP cacheBuster] 1 day has passed since UNIX Epoch in miliseconds value in local storage, updating local storage value and hard reloading site.");
		localStorage.setItem("unixEpochUpdate", Date.now());
		location.reload(true);
	} else {
		console.log("[MP cacheBuster] 1 day has not passed since UNIX Epoch in miliseconds value in local storage, the site will not reload and the local storage value has not been changed.");
	}
}