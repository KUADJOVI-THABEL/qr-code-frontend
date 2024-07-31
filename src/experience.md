## What I learned
* il faut trouver un moyen de palcer les 
fichiers images et svg

* l'image ne voulais pas passé donc j'ai convertis 
le svg en un compoenet svg et c'est elle que j'ai 
display au finish

* Il y a certains type de svg qui ne peuvent pas se comporter entant que 
source dans la l'attribut src des images en JS.

link i'm trying to reproduce
https://www.qr-code-generator.com/


* Pour le cas de detailed menu le secret
réside dans la définition claire de ce que je voulais


* J'ai décourvert une autre maniere d'importer les svg dans le react
Sans passer par la création suplémentaires des components.
Il s'agit d'importer les svgs comme étant des component react

* On peut changer les propriétes du path d'un svg
* Je pense que dans le processus de design il faut penser aux autres 
elements une fois que l'accent est mis sur l'élement courant?
* Pour inclure les element de font télecharcher on peut utiliser
@font-face avec src attribute combiné avec l'url.

## thinks to work on
* add the fivecon
* above 303 px the design looks terrible maybe add another max-width or
think of a smooth design there.
* change Icons fill color on clicked to means it's choosen
* Add a login button

## Defining Cleary 

When i clicked the hambourger i can still se the menu
no problem on that

Now when i clicked the chevron i can show
the detailed menu.

then when i clicked the back icon rehshow the menu
Or when i click outside reshow the menu



When import svgs as react componenent I saw a little
change on the brand logo , that brand logos is changing his color 
and it seems to be affected by another style but what kind of style.

Ya the other style is comming from a class named sto in the actual css
right embedded into the svg itself , so i deleted this class and style it my self.

The only property used so far is fill: var(--btn-primary)

on clik an icon-text 
signal it to the user it's cliked by changing the fill color
of the icon

In order to achieve this i want to manipulate the icon strocke with
make it by default to 1.

It seems like may be i need to think about other properties than the stroke.

then displaying the according forms  above the svgs div named
selected form

My approch is to design a set off forms for each icons 
and renther a specif in a function call

I will need to add a state tracker , use state of a variable
wish will update the selected Form

Styling Check boxes and Radio buttons afraids me 
a little that were the first time i'm doing such a thing

I decided to learn more using this tuto
https://medium.com/@christinaroise/how-to-create-a-reusable-custom-radiobutton-in-react-with-typescript-3ae7fc704e09

When finishing this tuto i used their button code in this project


Now I want to know how to include the fonts i just dowload from  the internet 
into my project

Now that's how we can style the checkboxes
See this link
https://moderncss.dev/pure-css-custom-checkbox-style/
### thinks to learn
* Learn about the ref in React
* Learn about the box shadow property in css
* Learn how to insert svg in the react 
* Learn about svg and how to style them 