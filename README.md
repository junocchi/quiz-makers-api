# Assessment API

This is an API for storing and serving quizzes. It is written in TypeScript, and
uses a number of libraries.

### Installation

1. Clone this repo
2. Install dependencies with `npm install`
3. Create a `.env` file in the root of the project, with the following
   variables:

   - `DB_URL` - The connection string for the database you would like to use
   - `TEST_DB_URL` - The connection string for the test database
   - `PORT` - The port on which the server will run

   (If you don't know what a `.env` file is, you can learn more
   [here](https://blog.bitsrc.io/a-gentle-introduction-to-env-files-9ad424cc5ff4))

4. Run the project with `npm run dev`

### Building for Production

You can build a production (JavaScript) version of the project with
`npm run build`. This will be created in the `/build` folder. This can then be
run with `npm run start`

### Tests

You can run tests with `npm run test`

### Usage

The server has a few endpoints, which can be accessed through HTTP requests:

- `GET /quizzes` - Lists all the quizzes

- `GET /quizzes/:quiz_id` - Returns details about a specific quiz

- `POST /quizzes/new` - Creates a new Quiz. Expects a JSON body in the shape:

  ```
  { title: string }
  ```

- `GET /questions` - List all questions in the database

- `POST /questions/new` - Create a new question, expects a JSON body in the
  shape:

  ```
  {
    question_text: string,
    is_correct: boolean,
    quiz_id: number
  }
  ```

- `GET /answers/:question_id` - Lists all the possible answers to a question.

- `GET /answers/:question_id/correct` - Returns the correct answer to a given
  question.
