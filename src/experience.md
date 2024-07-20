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


## thinks to work on
* add the fivecon


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

### thinks to learn
* Learn about the ref in React
* Learn about the box shadow property in css
* Learn how to insert svg in the react 
* Learn about svg and how to style them 