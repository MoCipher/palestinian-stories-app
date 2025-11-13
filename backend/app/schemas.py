from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class UserBase(BaseModel):
    username: str
    email: str

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    stories: List["Story"] = []

    class Config:
        orm_mode = True

class StoryBase(BaseModel):
    title: str
    content: str
    media_urls: List[str] = []
    created_at: datetime

class StoryCreate(StoryBase):
    pass

class Story(StoryBase):
    id: int
    user_id: int

    class Config:
        orm_mode = True

class AdminUser(BaseModel):
    username: str
    email: str
    role: str

class AdminUserCreate(AdminUser):
    password: str

class AdminUserResponse(AdminUser):
    id: int

    class Config:
        orm_mode = True