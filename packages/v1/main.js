//componet App
import App from "./components/App.js";

const ROOT =document.querySelector("#root");

const root_main =async ()=>{
    ROOT.innerHTML =await App();
}

root_main()

