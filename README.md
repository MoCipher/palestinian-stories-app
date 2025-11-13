# Palestinian Stories App

## Overview
The Palestinian Stories App is a platform designed to allow users to share their personal stories, experiences, and cultural heritage through text, photos, and videos. The application aims to represent and celebrate Palestinian culture, providing a space for voices to be heard and stories to be told.

## Features
- **User Authentication**: Users can sign up and sign in to share their stories.
- **Story Submission**: Users can post stories with accompanying photos and videos.
- **Timeline**: A visual timeline to showcase the stories shared by users.
- **Admin Panel**: An admin interface for managing users and stories, ensuring a safe and respectful community.

## Tech Stack
- **Backend**: Python with FastAPI for building the RESTful API.
- **Frontend**: React with TypeScript for building the user interface.
- **Database**: SQLAlchemy for ORM to manage database interactions.

## Project Structure
```
palestinian-stories-app
├── backend
│   ├── app
│   │   ├── __init__.py
│   │   ├── main.py
│   │   ├── models.py
│   │   ├── routes
│   │   │   ├── auth.py
│   │   │   ├── stories.py
│   │   │   └── admin.py
│   │   ├── schemas.py
│   │   ├── database.py
│   │   └── utils.py
│   ├── requirements.txt
│   └── README.md
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── assets
│   │   │   └── styles.css
│   │   ├── components
│   │   │   ├── Auth.tsx
│   │   │   ├── StoryForm.tsx
│   │   │   ├── Timeline.tsx
│   │   │   └── AdminPanel.tsx
│   │   ├── pages
│   │   │   ├── Home.tsx
│   │   │   ├── StoryPage.tsx
│   │   │   └── AdminPage.tsx
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── README.md
```

## Getting Started

### Backend
1. Navigate to the `backend` directory.
2. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```
3. Run the backend application:
   ```
   uvicorn app.main:app --reload
   ```

### Frontend
1. Navigate to the `frontend` directory.
2. Install the required dependencies:
   ```
   npm install
   ```
3. Start the frontend application:
   ```
   npm start
   ```

## Contribution
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.