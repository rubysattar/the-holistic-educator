# The Holistic Educator - front end application

- The final version of this project will be an application that: 
1. Tracks connections teachers make with students (i.e. a teacher would be able to see who she/he/they has checked in with or not 'today').
2. Informs teachers of the supports needed to fulfill social-emotional needs (key word filters would suggest books or web resources).
- This project is near and dear to me as a huge advocate for social-emotional learning in schools. This application is a tool that many teachers who are tracking their connections with students will find helpful to ensure that they are reaching every student. 

## How does it work?

- A teacher signs in, selects the Student Roster tab.
- A teacher can index all of her/his/their students to see relevant data about each of her/his/their students.
- A teacher can then choose to update or delete an existing student and/or create a new student.

## Important Links

- [API Repo](https://github.com/rubysattar/the-holistic-educator-api)
- [Deployed API](https://whispering-anchorage-25173.herokuapp.com/)
- [Deployed Client](https://rubysattar.github.io/the-holistic-educator/)

## Planning Story

[Results from my teacher poll conducted on instagram](https://imgur.com/dVmMwMG)

- The first step in my planning process was to conduct market research. I asked other teachers about tools they wished to have in the classroom. Most teachers polled said they would like a way to keep track of the students with whom they have had check-ins.
- Next, I broke down my application into several versions and focused on the first approachable version, which would require just one resource to which I'd apply CRUD actions - a student roster (including an option for a single note to be added to each student.)
- Starting with the back-end API, I routed my user and student resources, wrote curl scripts, and tested their accuracy in the development server. 
- Upon success using CRUD actions on these resources in the back-end, I moved onto connecting my back-end to a front-end client server, using Handlebars to display the most relevant data for the user to apply CRUD actions through the front-end. 

### User Stories

- As a teacher, I want to sign in/up
- As a teacher, I want to Create a new student in my roster.
- As a teacher, I want to Read multiple student names.
- As a teacher, I want to Read a single note for a student.
- As a teacher, I want to Update a student I own in my roster.
- As a teacher, I want to Delete a student I own in my roster.
- As a teacher, I want to Create a check-in note for each student.
- As a teacher, I want to Read a check-in note for each student. 
- As a teacher, I want to Read multiple check-in notes for each student.
- As a teacher, I want to Update a check-in note for each student.
- As a teacher, I want to Delete a check-in note for each student.
- As a teacher, I want to see which students have had check-ins (notes added).
- As a teacher, I want to see which students have not had check-ins (no notes added).

### Technologies Used

- jQuery
- HTML/CSS
- Bootstrap
- Javascript

### Unsolved Problems

- My problem-solving strategy was to console log everything I assumed I knew about my code to be sure my code represented what I thought it did. I also used breakpoints in Dev Tools to trace functions that were running up to a certain point in my code. In addition, I tried features in other branches before merging them into the master. 

- Still need to ... have deletions apply dynamically in the UI (If I'm deleting a student while indexing all of them, I want to see that the deleted student has immediately disappeared without re-indexing) and have success and failure feedback messages not linger.
- Would like to eventually .... sort student list alphabetically and add other tabs for other features. 
1. A tab for "check-in status", for example, would render options for a teacher to "view who I have checked-in with today" and "who I have not checked-in with today". 
2. Another tab for "suggested resources" would allow a teacher to select ant student to render a displayed list of suggested social-emotional learning resources.
3. A final tab for a "user profile" that displays user email and number of students associated with this user. This tab could also include a  "view my roster" button that would be an alternative to indexing the way the application is currently built. 


## Images

#### Wireframe:
- [updated application wireframe](https://imgur.com/viNGzwH)
- [initial landing page wireframe](https://imgur.com/HANqQFv)
- [initial application wireframe](https://imgur.com/fbpXkYj)
---

#### ERD:
[Initial Entity Relationship Diagram](https://imgur.com/zWtIKUa)