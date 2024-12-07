# Blog Application - WellSpring

**Wellspring** is a modern blogging platform with advanced features like content generation powered by AI. This application provides a seamless user experience with robust backend support and an elegant frontend design.

## Table of Contents
    - Setup Instructions
    - Deployment Process
    - Architecture Overview

---

## Setup Instructions

### Prerequisites
    1. **Node.js**: Make sure Node.js (v16 or higher) is installed on your machine.
    2. **MongoDB**: Set up a MongoDB instance locally or use a cloud service like MongoDB Atlas.
    3. **Package Manager**: Ensure you have `npm`.

### Backend Setup

   1. git clone <repository-url>
    
   2. cd backend

   3. npm install

   4. Create .env file - 

   PORT=5000
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_secret_key>
   COHERE_API_KEY=<your_cohere_api_key>

   5. Start the backend server:

      npm start

### Frontend Setup

    1. Install Dependencies  -  
        run this command -  npm install   

    2. npm run dev

    3. Access - http://localhost:5173


### Deployment Process 
    
    ## Deploy Backend on Render Platform
      
        1. I Create Webservice 

        2. Connect git repo to render

        3. Set Environment Variable

    --- When successfully i deployed backend , i set backend link into services.js at Frontend ---


    ## Deploy Frontend on Netlify Platform
       
        1. I connected git repo to netlify

        2. Deploy frontend repo


### Architecture Overview

    ## Backend 

        The backend is built with Node.js and Express. It features:

            1. Authentication: Secure login, logout, and registration using jsonwebtoken.

            2. Database: MongoDB for storing user and blog data.

            3. Image Uploads: Implemented with multer to handle file uploads.

            4. Content Generation: Integrated with Cohere AI for generating blog content.

            5. RESTful APIs:

                    Auth APIs: Login, Logout, Register
                    Blog APIs: Create, Update, Delete, Get Blogs


    ## Frontend 

        The frontend is built using React and styled with Tailwind CSS. It includes:

            1. API Integration: Fully integrated with backend APIs for dynamic functionality.

            2. Routing: Managed with react-router-dom.

            3. UI Components: Responsive design with Tailwind CSS.

            4. Notifications:  react-hot-toast.

### Features

    1. User Authentication: Secure user login and session handling.

    2. Blog Management: Create, edit, delete, and view blogs.

    3. AI Content Generation: Generate blog content with Cohere AI.

    4. Responsive Design: Works seamlessly on all devices.       


 --------------------------------------- Git Repo -------------------------------------------------

 Backend - https://github.com/nadeemtadvi/blogapp-backend

 Frontend - https://github.com/nadeemtadvi/blogapp-frontend-vite

 ----------------------------------------- Deploy Link --------------------------------------------    

Live Link - https://wellspringblog.netlify.app/  

  When you sign up 
      
       set Password - type More Than 6 character

       Next Login 
