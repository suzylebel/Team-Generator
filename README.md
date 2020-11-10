# Unit 10 OOP Homework: Template Engine - Employee Summary

[Project link](https://github.com/suzylebel/Team-Generator) 
[Deployed Page]()

## Table Of Contents
  1. [About the Project-Template Enginer](#About-the-Project)
  2. [Getting Started](#Getting-Started) 
  3. [User-Story](#User-Story)
  4. [Tests](#Tests)
  6. [License](#License) 
  7. [Contact](#Contact)
  8. [Acknowledgements](#Acknowledgements)


## User Story 
```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```
## About the Project

 This app will run as a Node CLI to gather data and information about each employee and append it to the HTML file. 

 ![Command line Interface](./Assets/gif2.gif)



    The dependencies are Jest for running the provided tests, and inquirer for collecting input from the user.


## Tests 

Creating the classes for each .js file helped with running the tests. Below you can see that all the tests passed. 
![All Tests pass](./Assets/test.gif)


![HTML Final view](./Assets/screenshot-1.gif)

[Watch the command line interface video here](https://drive.google.com/file/d/1utFTAck3a-401kp4o6uLyu6SmGxp2nLl/view)



## Code 
These classes were crucial to making the command line interface without repeating too much code. 

The first class is an `Employee` parent class with the following properties and
methods:

  * name
  * id
  * email
  * getName()
  * getId()
  * getEmail()
  * getRole() // Returns 'Employee'

The Manager, Intern and Enginner class classes extend Employee.


    I was able to validate my data so each input by the user had to be different. If they selected a number that had already been used they would be notifid to select another number. This is important because no 2 employees will have the same id #. 

  ![Validate Data](./Assets/gif3.gif)


## License 

## Contact 
Suzy Le Bel 
suzy.lebel@gmail.com
[Git hub](https://github.com/suzylebel/)

[Project link](https://github.com/suzylebel/Team-Generator) 

## Contributions 
