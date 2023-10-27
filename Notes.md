# Notes

## Navigation Bar

```html
<nav>
    <a href="index.html">Home</a> &nbsp; — &nbsp;
    <a href="idk.html">IDK</a> &nbsp; — &nbsp;
    <a href="you_get_the_idea.html">You Get it</a>
</nav>
```

```css
nav {
    font-size: 24px;     /* for example */
    line-heigt: 3;
    letter-spacing: 1px;
    text-align: center;  /* only real important attribute here */
    color: #FFFFFF;      /* we'll figure out a colour later */
}
```

## Style
Here is some css taken from a project I worked on a while back called
`std::cout` (which is supposed to be pronounced "Study Character Output"), with
some comments added on things we'll need to change.

```css
html {
    font-size: 10px;
    font-family: 'Roboto', sans-serif; /* change font to Verdana */
    background-color: #140510;         /* change colour */
}

body {
    width: 1080px;              /* can change if we want */
    margin: 0 auto;
    background-color: #5e2750;  /* change colour */
    padding: 0 20px 20px 20px;
    border: 5px solid black;
}

h1 {    /* this looks really nice, we shouldn't change it much */
    font-size: 60px;
    text-align: center;
    margin: 0;
    padding: 20px 0;
    color: #F4D6EC; /* change colour */
    text-shadow: 3px 3px 1px black;
}

/* etc */
```
Here's how it looks like: ![Screenshot of website](https://github.com/Darth-218/FirstTimeCompile/blob/main/Screenshot%201.png)
