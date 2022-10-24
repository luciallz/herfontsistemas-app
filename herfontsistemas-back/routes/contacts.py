from flask import  Flask,Blueprint,render_template,request,url_for,redirect,flash
from sqlalchemy.orm import sessionmaker,Session
from models.usuarios import usuarios,Usuarios
from sqlalchemy import Integer, insert,Column,String
from utils.db import engine,db

contacts=Blueprint('contacts',__name__)

@contacts.route("/")
def usuarios():

 SessionListar=sessionmaker(bind=engine)
 session=SessionListar()
 result=session.query(Usuarios).all()
 return render_template('index.html',result=result)

@contacts.route("/new")
def new():
    return {"prueba": ["prueba1","prueba2","prueba3"]}

@contacts.route("/nuevo",methods=['POST'])
def nuevo():
    _nombre=request.form['nombre']
    _apellidos=request.form['apellidos']
    _correo=request.form['correo']
    _telefono=request.form['telefono']
    _contrasena=request.form['contrasena']
    _direccion=request.form['direccion']
    _ciudad=request.form['ciudad']
    _provincia=request.form['provincia']
    _codigo_postal=request.form['codigo_postal']
    _descuento=request.form['descuento']
    
    nuevoUsuario=Usuarios(_nombre,_apellidos,_correo,_telefono,_contrasena,_direccion,_ciudad,_provincia,_codigo_postal,_descuento)
    print(nuevoUsuario)
    with Session(engine) as session:
        session.add(nuevoUsuario)
        session.commit()
        flash("¡Usuario añadido sactifactoriamente!")
    return redirect("/")

@contacts.route("/borrar/<id>")
def borrar(id):
    with Session(engine) as session:
        usuario=session.query(Usuarios).get(id)
        session.delete(usuario)
        session.commit()
    flash("¡Usuario eliminado sactifactoriamente!")
    return redirect("/")

@contacts.route("/modificar/<id>",methods=['POST', 'GET'])
def modificar(id):
    with Session(engine) as session:
        if request.method == 'POST':
            usuario=session.query(Usuarios).get(id)
            usuario.nombre=request.form['nombre']
            usuario.apellidos=request.form['apellidos']
            usuario.correo=request.form['correo']
            usuario.telefono=request.form['telefono']
            usuario.contrasena=request.form['contrasena']
            usuario.direccion=request.form['direccion']
            usuario.ciudad=request.form['ciudad']
            usuario.provincia=request.form['provincia']
            usuario.codigo_postal=request.form['codigo_postal']
            usuario.descuento=request.form['descuento']
            print(usuario)
            session.commit()
            return redirect("/")
        usuario=session.query(Usuarios).get(id)
    flash("¡Usuario modificado sactifactoriamente!")
    
    return render_template("modificar.html",usuario=usuario)    