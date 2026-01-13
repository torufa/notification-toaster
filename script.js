let toasterContainer = document.createElement("div");
toasterContainer.className = "flex flex-col text-white fixed";
document.body.appendChild(toasterContainer);


function createToaster(config){
    return function(notification){
        let toaster = document.createElement("div");
        toaster.className = "p-2.5 rounded shadow-blue-500/50 shadow-lg mb-3";
        toaster.textContent = notification;
        toasterContainer.appendChild(toaster);

        if(config.theme === "dark"){
            toaster.classList.add("bg-blue-600");
            document.body.className = "bg-gray-900";
        } else{
            toaster.classList.remove("bg-blue-600", "shadow-blue-500/50");
            toaster.classList.add("bg-purple-600", "shadow-purple-500/50");
            document.body.className = "bg-white";
        }

        if(config.positionX === "right"){
            toasterContainer.classList.remove("right-5");
            toasterContainer.classList.add("right-5");
        } else if(config.positionX === "left"){
            toasterContainer.classList.remove("left-5");
            toasterContainer.classList.add("left-5");
        }

        if(config.positionY === "bottom"){
            toasterContainer.classList.add("bottom-5");
        } else if(config.positionY === "top"){
            toasterContainer.classList.add("top-5");
        }

        setTimeout(() => {
            toaster.remove();
        }, config.duration * 1000);

    }
}

let toaster = createToaster({
    positionX : "left",
    positionY : "bottom",
    theme : "dark",
    duration : 3
});

toaster("Success!");
setTimeout(() => {
    toaster("go to the dashboard");
}, 4000);
setTimeout(() => {
    toaster("Error occurred");
}, 2000);