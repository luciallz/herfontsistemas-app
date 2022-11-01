from flask_marshmallow import Marshmallow
from flask import  Flask,Blueprint, jsonify,render_template,request,url_for,redirect,flash
from sqlalchemy.orm import sessionmaker,Session
from models.pedidos import pedidos,Pedidos,Encoder
from sqlalchemy import Integer, insert,Column,String, true
from utils.db import engine,db
import json

pedidos = Blueprint('pedidos', __name__)

@pedidos.route("/")
def pedidosList():
    SessionListar = sessionmaker(bind=engine)
    session=SessionListar()
    result=session.query(pedidos).all()