from fastapi import FastAPI, APIRouter, HTTPException

from src.models.user import User
from src.db.connection import (
    create_user
)
from src.controller.chat_controller import (
    chat_completion
)

# an HTTP-specific exception class  to generate exception information
#Cross Origin(Protocol, domain, port) Recource Share : 
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

# React랑 연결
origins = [
    "http://localhost:3000",
]

from src.controller.user_controllers import signup_user

@app.post("/user", response_model=User)
async def post_user(user: User):
    response = await create_user(user.model_dump())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")

#mengzzii's part
@app.post("/user/signup", response_model=User)
async def post_user_signup(user: User):
    response = await signup_user(user)
    if response:
        return response
    raise HTTPException(200, "Failed to register user")
    

@app.post("/user/login", response_model=User)
async def post_user_signup(user: User):
    return 1

@app.post("/chat/new", response_model=User)
async def post_new_chat(user: User, message:str):
    response = await chat_completion(user, message)
    if response:
        return response
    raise HTTPException(500, "Smth went wrong ;)")