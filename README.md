# ANZ Institutional Lending Backend Development Test

This project developed with React, Node JS and Express

In the project directory, you can run:

### `npm run dev` to start the client and the server

This project used `concurrently` to execute both client and server side code

Also the following commands can be excuted in this project.

1. `npm start` - run the server
2. `npm client` - run the client
3. `npm server` - run the server in dev mode

In this project there are two development dependencies used in the server side.

1. Nodemon
2. Concurrently

Also, the following third-party libraries used in this project to handle API calls, CSV to JSON conversion, Create Unique names, File uploading and so on.

1. `express-fileupload`
2. `csvtojson`
3. `uuid`
4. `axios`

## Project Execution

1. Download or clone the project and cd to the project file
2. Execute `npm install` to install all the dependencies
3. Execute `npm run dev` in the commandline (inside the project folder)
4. Go to http:localhost:3000 (Usually new tab will open with the localhost url after executing the above command)
5. Choose the CSV file and Click the `Upload` button on the page
6. If the file successfully uploaded to the server, page will display a success message
7. Then click the `Get Results` button to view the outputs
8. To check the converted JSON data, go to `http://localhost:5000/data`

## The development processes

This project divided into smaller tasks before the development processes

1.  Create a `React` front-end and `Node` back-end project for the entire tasks
2.  Develop File uploading feature
3.  Develop CSV to JSON convertion processes to handle the data and the relationship between the records
4.  Develop the business logic to handle the desired output values
5.  Develop the processes to pass data between server and client side and display the output to the user

## Known Issues and Incomplete areas

Because of the limitted time and need more learning in the following areas

1. I haven't implement any tests for this task
2. When upload the second CSV file, the new results will not be shown until user click the `Get Results` button again. Also the previous results will not be hidden after the new file upload (The new results will be shown after clicking the `Get Results` button again)

## The Challenges

As a novice developer in the web application area (Having 4 years of experience in IT in different areas), I have faced lot of challenges during the completion of this project.

1. Working with the full stack app was a challenge:
   I have completed few React and Node JS course and have knowledge in those areas seperately, when combine those areas to create a full stack application initially I faced little bit difficulty to run the combine project

   Sample Node JS API, I built during my Node JS learning before this task:
   https://github.com/sujanth21/devcamper_node_api

2. File Uploading Tasks:
   I have followed couple of tutorials and articles to achieve this task, during this development, I had issues with file names, when uploading the same file I have faced some issues with page reloads and lost the data which I need to pass. As a solution, I rename the file with UUID when file upload to make it unique.

3. Converting CSV to JSON:
   I wanted to create relationships between the records to do the calculation so I plan to convert the CSV data to JSON data then I can easily find the realtionships between the entities.
   But during this stage, I have face difficulties to create children nodes and also finding a proper third-party library from NPM was a challenge (I have tried csvtojson, csvparser, papaparse)

4. Business Logic: In the start, I was little bit afraid how I am going to find the business logic to handle the calculation from JSON objects, but eventually find ways to complete the tasks by doing lot of `console.log()` calls

Overall this project tasks are little bit challenge for me (as a novice web application developer) but it gives the joy and more confident to involve in the web development sector.

### Helpful Resources

1. Building a Tree structure in JavaScript Object (https://typeofnan.dev/an-easy-way-to-build-a-tree-with-object-references/)
2. React file uploading with express (https://www.youtube.com/watch?v=b6Oe2puTdMQ&t=1858s&ab_channel=TraversyMedia)
3. Express file upload (https://www.w3jar.com/node-file-upload-with-express-js/)
4. Semantic UI (https://semantic-ui.com/)
5. CSV to JSON (https://www.npmjs.com/package/csvtojson)

### Project Screenshots

1. Home screen
   ![home screen](https://github.com/sujanth21/persistent_system_code_challenge/blob/master/client/public/screenshots/2.PNG)

2. File upload
   ![file upload](https://github.com/sujanth21/persistent_system_code_challenge/blob/master/client/public/screenshots/3.PNG)

3. Final Output
   ![final output](https://github.com/sujanth21/persistent_system_code_challenge/blob/master/client/public/screenshots/4.PNG)

4. JSON data
   ![JSON data](https://github.com/sujanth21/persistent_system_code_challenge/blob/master/client/public/screenshots/5.PNG)

5. Input data
   ![Inputs](https://github.com/sujanth21/persistent_system_code_challenge/blob/master/client/public/screenshots/input.PNG)

## Thank you for this opportunity
