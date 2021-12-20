# Book Collection APP

This page consist of a list of books the user can click to get additional information such as author and ISBN. In addition the user can add more book titles and update the existing ones.

### Prerequisites 📋

```
To use this app you need to have Node JS installed in your PC
```

#### Installation 🔧

- Download this repository in zip format or clone it.
- Open terminal in the root folder of your repository.

**Run backend:**
Backend is located in `/src` folder

```
 @ root folder:
   · Run npm install.
   · After node modules is created run npm start or npm run dev ⚙️
 Backend will start at: http://localhost:4000
```

**Run frontend:**
Frontend is located in `/web` folder

```
  @ root folder:
    · Execute cd web in the terminal.
    · Run npm install.
  Frontend will start at: http://localhost:4000
```

To see an updated version of the page, everytime the `/web` folder has been edited you have to run

```
npm run publish
```

### Database 📋

The database implemented consists in two tables: authors and books:

|            | authors                    |
| ---------- | -------------------------- |
| id         | identificator (INTEGER)    |
| first_name | author's first name (TEXT) |
| last_name  | author's first name (TEXT) |

|        | books                              |
| ------ | ---------------------------------- |
| id     | identificator (INTEGER)            |
| name   | book title (TEXT)                  |
| isbn   | book ISBN code (TEXT)              |
| author | book author (foreign key, INTEGER) |

The endpoints implemented in the `index.js` file were:

- GET /books/ - Returns a list of books in the database in JSON format
- GET /book/{{id}}/ - Returns a detail view of the specified book id.
- GET /authors/ - Returns a list of authors in the database in JSON format
- GET /author/{{id}}/ - Returns a detail view of the specified author id
- POST /author/ - Creates a new author with the specified details
- POST /book/ - Creates a new book with the specified details
- PUT /book/{{id}} - Updates an existing book

### The project is deployed in Heroku 📚

Click [HERE](https://collection-of-books.herokuapp.com/#/) to visit the page (you have the link in the description of this repository as well)

### Tools used in this project 🛠️

<p align="left"> <a href="https://expressjs.com" target="_blank" title="expressjs"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" title="git"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://heroku.com" target="_blank" title="heroku"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" title="HTML5"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" title="nodejs"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank" title="postman"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" title="reactjs"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://sass-lang.com" target="_blank" title="sass"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a> <a href="https://www.sqlite.org/" target="_blank" title="sqlite"> <img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="sqlite" width="40" height="40"/></a></p>

### Licence 📄

This project uses MIT License [LICENSE](LICENSE)

#### Thank you for reading this far 🤗
