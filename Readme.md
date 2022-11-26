# Email with AJAX

This is a sample project using AJAX to handle mail submission. It's implemented with async / await and imported into the main JavaScript file as a module / component.

There's a (very) simple form that sends a user's first name, last name, email and message to an API endpoint; it has some extremely simple success / failure handling.

# Written plan

main.js

Added the required code part in processMailFailure() & processMailSuccess
Added a new function to app to use it for updating status of email. showEmailStatus()

Index.html
Added a new div for the status as appropriate position on page.

send.php
Whole API needed to be created and checked online.

------
Other challenges: -
Getting appropriate status for each missing field
Adding email validation on the backend
Checking the working of API as it was not possible on localhost (but extensions like thunderclient from VSCODE helped me in it)