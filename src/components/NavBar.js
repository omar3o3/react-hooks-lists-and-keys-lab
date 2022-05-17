import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const LinksElements = links.map((link) => {
    // console.log(link + ' link')
    return <a href= {'#' + link} key = {link} >{link}</a>
  })

  return (
  <nav>
    {LinksElements}
  </nav>);
}

export default NavBar;
