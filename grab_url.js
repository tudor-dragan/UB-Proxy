let changeUrl = document.getElementById("a");

changeUrl.addEventListener("click", async () => {
    updateUrl();
});

function updateUrl() {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        let prefix = url.slice(0,8);
        url = url.slice(8);
        let suffix = url.slice(url.indexOf("/"));
        url = url.substring(0, url.indexOf("/")).replaceAll(".", "-").concat(".proxy-ub.rug.nl");
        // use `url` here inside the callback because it's asynchronous!
        //console.log
        url = prefix.concat(url).concat(suffix);
        chrome.tabs.update({url: url});
        //https://ieeexplore.ieee.org/Xplore/home.jsp
        //https://www.springer.com/gp
    });  
}
