const navigation = document.querySelector('nav');

/* list of links we want in the navigation bar */
const links = {
  "Home": "index.html",
  "Introduction": "intro.html",
  "Early Developement": "developement.html",
  "Types": "types.html",
  "Preparation": "preparation.html",
  "Terminology": "terms.html",
  "About Us": "about.html",
};

let i = 0;
for (const link in links) {
  /* creates an <a> element */
  const link_elem = document.createElement('a');
  /* sets the text the link will have */
  link_elem.textContent = link;
  /* sets the href attribute to be the html file the link will go to */
  link_elem.setAttribute('href', links[link]);
  /* nav-item class for Afifi to do things */
  link_elem.setAttribute('class', 'nav-item');

  /* adds a separator between links, but not at the end or at the start */
  if ((i != links.legth - 1) && (i != 0)) {
    const separator = document.createTextNode(" — ")
    navigation.appendChild(separator);
  }

  /* adds the final <a> element to the <nav> tag */
  navigation.appendChild(link_elem);
  ++i;
}
