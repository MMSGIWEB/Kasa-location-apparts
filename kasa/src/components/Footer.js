import React from "react";

function Footer ({img, copyRights}) {
    return(
        <div className="footer">
            <img src={img} className="footerLogo"/>
            <h3 className="footerCopyRights">{copyRights}</h3>
        </div>
    )
}

 export default Footer;