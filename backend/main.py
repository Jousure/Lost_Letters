from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import json
import random
import os

app = FastAPI(title="Lost Letters API – Tragic Love Edition")
    
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_PATH = os.path.join(BASE_DIR, "data", "lost_love_letters.json")

with open(DATA_PATH, encoding="utf-8") as f:
    letters = json.load(f)

@app.get("/")
def welcome():
    return {"message": "Welcome to Lost Letters API - Tragic Love Edition"}

@app.get("/letters/")
def get_letters(author: str = Query(None), keyword: str = Query(None)):
    results = letters
    if author:
        results = [l for l in results if author.lower() in l["author"].lower()]
    if keyword:
        results = [l for l in results if keyword.lower() in l["content"].lower()]
    return {"count": len(results), "letters": results}

@app.get("/random/")
def random_letter():
    return random.choice(letters)

@app.get("/letters/{letter_id}")
def get_letter(letter_id: int):
    for letter in letters:
        if letter["id"] == letter_id:
            return letter
    return {"error": "Letter not found"}, 404
