# Doctor LookUp

#### Look up a Doctor - January 18, 2019

#### By **Kaveh Saleminejad**

## Description

A simple app that takes the user issue or name of doctor as an input and displays a list of doctors related on his search in his/her area.

### Specs    

*A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.

*A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.

*If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, and whether or not the doctor is accepting new patients (the API provides this data).

*If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.

*If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)

## Setup/Installation Requirements

* Clone this repository: https://github.com/lCaveh/Doctor_Lookup.git

* Run NPM Install in cmd prompt
* Obtain API from https://developer.betterdoctor.com/
* Create .env file in root and add: API_KEY = [Insert API Key Here] to file


## Technologies Used
* C#
* HTML/CSS
* Jasmine/Karma Testing
* Node
* Wepack
* API

## Support and contact details

_Kaveh Saleminejad , lcaveh@gmail.com_

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2018 **Kaveh Saleminejad**
