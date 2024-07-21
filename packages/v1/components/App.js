//Import Components


import Aside from './aside/Aside.js';
import Main from './main/Main.js';

async function App(){
    const asideComponent = await Aside();
    const mainComponent = await Main();
    return`
        ${mainComponent}
        ${asideComponent}
    `
}

export default App;