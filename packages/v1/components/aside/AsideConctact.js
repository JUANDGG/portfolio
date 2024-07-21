function AsideConctact(conctactData){
    
    let mail =conctactData["emails"]["email1"];
    let phoneNumber =conctactData["phones"]["phone1"];


    return`
        <div class="conctact">
            <h2>
                Conctacto
            </h2>
            <ul>
                <li>
                    Correo   :<a href="mailto:${mail}">${mail}</a>
                </li>
                <li>
                    Telefono : <a href="tel:${phoneNumber}">${phoneNumber}</a>
                </li>            
            </ul>

        </div>

    `
}


export default AsideConctact;