from flask import  Flask,Blueprint,render_template,request
from sqlalchemy.orm import sessionmaker,Session
from models.usuarios import usuarios,Usuarios
from sqlalchemy import Integer, insert,Column,String
from utils.db import engine,db

contacts=Blueprint('contacts',__name__)

@contacts.route("/")
def home():
    return render_template('index.html')

@contacts.route("/usuarios")
def usuarios():

 SessionListar=sessionmaker(bind=engine)
 session=SessionListar()
 result=session.query(Usuarios).all()
 return render_template('usuarios.html',result=result)

@contacts.route("/new")
def new():
    return {"prueba": ["prueba1","prueba2","prueba3"]}

@contacts.route("/nuevo",methods=['POST'])
def nuevo():
    _id=request.form['id']
    _nombre=request.form['nombre']
    _apellidos=request.form['apellidos']
    _contrasena=request.form['contrasena']
    _correo=request.form['correo']
    _telefono=request.form['telefono']
    _direccion=request.form['direccion']
    _ciudad=request.form['ciudad']
    _provincia=request.form['provincia']
    _codigo_postal=request.form['codigo_postal']
    _descuento=request.form['descuento']
    nuevoUsuario=Usuarios(_id,_nombre,_apellidos,_contrasena,_correo,_telefono,_direccion,_ciudad,_provincia,_codigo_postal,_descuento)
    print(nuevoUsuario)
    with Session(engine) as session:
        session.add(nuevoUsuario)
        session.commit()
    return "nuevo contacto"

@contacts.route("/delete")
def delete():
    return "eliminando un contacto"

@contacts.route("/about")
def about():
    return render_template('about.html')