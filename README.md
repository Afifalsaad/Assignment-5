Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll - 

1.
getElementById is used for find a element by it's specific ID name.ID name has to be unique[Preferrd].
getElementsByClassName is used for find a element by it's class name.Many elements may have same class name.Class name not necessary to be unique.
querySelector works kind of getElementById.People use querySelector for find a element by it's ID and Class name both , but it returns only the first matched element.
querySelectorAll works same as the querySelector.Difference is querySelectorAll returns all matched class name in a document.

2.
Well i can do that by using this line of code ( document.createElement('div') ).
Here's "document" is the whole html file and "createElement('div')" method is useing for creatinf for a new div element.
Then i have to specify the parent element where i'm going to append the new div element. Here's the code - (document.getElementById('div-parent').appendChild(div))

3.
Event Bubbling is related the html structure.If i click a button inside a div which is inside body , it means i clicked all three element.
Cause they are located inside each other. This process starts from in which element i add event listener.After click , the process is done by incresing a step.

4.
Event Delegation is the idea of insted adding event listener in every element we can add listenar in parent div.
If we have many buttons then insted adding a listenar for each buttons , we can add the listener in it's parent.This is how we can easily handle listener and can keep our code clear.

5.
preventDefault() is used to prevent the default action of a event, such as preventing a form from submitting.
stopPropagation() is used to stop the event from going up to parent elements, preventing any parent event handlers from being executed.
