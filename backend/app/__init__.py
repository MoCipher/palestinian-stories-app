from fastapi import FastAPI

app = FastAPI()

from .routes import auth, stories, admin

app.include_router(auth.router)
app.include_router(stories.router)
app.include_router(admin.router)