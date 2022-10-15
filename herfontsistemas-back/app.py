from flask import Flask
from routes.contacts import contacts
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from models.contact import meta

app = Flask(__name__)

engine=create_engine("mysql://root:lucia@localhost/herfontsistemasdb",echo=True)

meta.create_all(engine)

app.register_blueprint(contacts)


