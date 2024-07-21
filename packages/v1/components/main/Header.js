function Header(title,role){
    const newTitle = title.split(" ");
    return`
        <header>
            <h1>
                <span>
                    ${newTitle[0]}
                </span>
                
                ${newTitle[1]}
            </h1>
            <em>${role}</em>
        </header>
    `

}


export default Header;