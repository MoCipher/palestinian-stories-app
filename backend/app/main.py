from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import auth, stories, admin
from app.database import init_db

app = FastAPI()

# CORS middleware to allow cross-origin requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update this to restrict origins in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize the database
init_db()

# Include the routes
app.include_router(auth.router)
app.include_router(stories.router)
app.include_router(admin.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Palestinian Stories API"}