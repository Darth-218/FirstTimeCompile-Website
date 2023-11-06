const navigation = document.querySelector('div');

/* list of links we want in the navigation bar */
const links = {
  "Home": "../yahia/Home.html",
  "Introduction": "../Afifi/afifi's_page1.html",
  "Examples": "../Afifi/afifi's_page2.html",
  "Developement": "../yahia/Development of programming languages.html",
  "Refinment": "../yahia/The Refinment of programming languages.html",
  "Types": "../Zein/types.html",
  "Preparation": "../Abd El-maaboud/preparation.html",
  "Terminology": "../Abd El-maaboud/terms.html",
  "What to Learn?": "../Youssef/youssef1.html",
  "About Us": "../about.html",
};

let i = 0;
for (const link in links) {
  /* Create a `div` element that will contain the link */
  const div_wrapper = document.createElement('div');
  /* Class for css */
  div_wrapper.setAttribute('class', 'button');

  /* Create an `a` element */
  const link_elem = document.createElement('a');
  /* Set the text the link will have */
  link_elem.textContent = link;
  /* sets the href attribute to be the html file the link will go to */
  link_elem.setAttribute('href', links[link]);

  /* Because the navigation bar is in an `iframe`, we have to set the target
   * to `_top` so that it switches the whole page and not just the frame
   */
  link_elem.setAttribute('target', '_top');

  /* adds a separator between links, but not at the end or at the start */
  if ((i != links.legth - 1) && (i != 0)) {
    const separator = document.createElement('span')
    separator.setAttribute('class', 'verticalSerparator');
    navigation.appendChild(separator);
  }

  navigation.appendChild(link_elem);
  ++i;
}
