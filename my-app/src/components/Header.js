import React from "react";

function Header(){
    const firstName = "Manuel";
    const lastName = "Carretero";

    return (
         //To write JS code inside JSX, we type it inside curly braces
        <header className="navbar">{firstName + " " + lastName}</header>
    )
}

export default Header;