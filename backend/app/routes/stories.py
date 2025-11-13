from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import Story
from ..schemas import StoryCreate, StoryResponse

router = APIRouter()

@router.post("/stories/", response_model=StoryResponse)
def create_story(story: StoryCreate, db: Session = Depends(get_db)):
    db_story = Story(**story.dict())
    db.add(db_story)
    db.commit()
    db.refresh(db_story)
    return db_story

@router.get("/stories/", response_model=list[StoryResponse])
def read_stories(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    stories = db.query(Story).offset(skip).limit(limit).all()
    return stories

@router.get("/stories/{story_id}", response_model=StoryResponse)
def read_story(story_id: int, db: Session = Depends(get_db)):
    story = db.query(Story).filter(Story.id == story_id).first()
    if story is None:
        raise HTTPException(status_code=404, detail="Story not found")
    return story

@router.put("/stories/{story_id}", response_model=StoryResponse)
def update_story(story_id: int, story: StoryCreate, db: Session = Depends(get_db)):
    db_story = db.query(Story).filter(Story.id == story_id).first()
    if db_story is None:
        raise HTTPException(status_code=404, detail="Story not found")
    for key, value in story.dict().items():
        setattr(db_story, key, value)
    db.commit()
    db.refresh(db_story)
    return db_story

@router.delete("/stories/{story_id}")
def delete_story(story_id: int, db: Session = Depends(get_db)):
    db_story = db.query(Story).filter(Story.id == story_id).first()
    if db_story is None:
        raise HTTPException(status_code=404, detail="Story not found")
    db.delete(db_story)
    db.commit()
    return {"detail": "Story deleted"}