document.body.className = "bg-gray-900";
let toasterContainer = document.createElement("div");
toasterContainer.className = "flex flex-col items-start gap-6 m-3";
document.body.appendChild(toasterContainer);

let toaster = document.createElement("div");
toaster.className = "inline-block bg-blue-600 text-white p-2.5 rounded shadow-blue-500/50 shadow-lg";
toaster.innerHTML = "ℹ️  Info!";
toasterContainer.appendChild(toaster);

function createToaster(config){
    return function(notification){
        
    }
}