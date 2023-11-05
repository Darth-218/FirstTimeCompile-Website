const navigation = document.querySelector('div');

/* list of links we want in the navigation bar */
const links = {
  "Home": "../Home.html",
  "Introduction": "../../Afifi/afifi's_page1.html",
  "Developement": "../Development of programming languages.html",
  "Types": "../../Zein/types.html",
  "Preparation": "../../Abd El-maaboud/preparation.html",
  "Terminology": "../../Abd El-maaboud/terms.html",
  "What to Learn?": "../../Youssef/youssef1.html",
  "About Us": "../about.html",
};

let i = 0;
for (const link in links) {
  const div_wrapper = document.createElement('div');
  div_wrapper.setAttribute('class', 'button');

  /* creates an <a> element */
  const link_elem = document.createElement('a');
  /* sets the text the link will have */
  link_elem.textContent = link;
  /* sets the href attribute to be the html file the link will go to */
  link_elem.setAttribute('href', links[link]);
  link_elem.setAttribute('target', '_top');

  /* adds a separator between links, but not at the end or at the start */
  if ((i != links.legth - 1) && (i != 0)) {
    // const separator = document.createTextNode(" — ")
    const separator = document.createElement('span')
    separator.setAttribute('class', 'verticalSerparator');
    navigation.appendChild(separator);
  }

  /* adds the final <a> element to the <nav> tag */
  // div_wrapper.appendChild(link_elem);
  // navigation.appendChild(div_wrapper);
  navigation.appendChild(link_elem);
  ++i;
}
