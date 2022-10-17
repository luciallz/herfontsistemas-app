from flask import Blueprint,render_template
from sqlalchemy.orm import sessionmaker
from models.usuarios import usuarios
from utils.db import engine
contacts=Blueprint('contacts',__name__)

@contacts.route("/")
def home():
 SessionListar=sessionmaker(bind=engine)
 session=SessionListar()
 result=session.query(usuarios).all()
 return render_template('index.html',result=result)

@contacts.route("/new")
def new():
    return {"prueba": ["prueba1","prueba2","prueba3"]}

@contacts.route("/update")
def update():
    return "modificando un contacto"

@contacts.route("/delete")
def delete():
    return "eliminando un contacto"

@contacts.route("/about")
def about():
    return render_template('about.html')