from flask_marshmallow import Marshmallow
from flask import  Flask,Blueprint, jsonify,render_template,request,url_for,redirect,flash
from sqlalchemy.orm import sessionmaker,Session
from models.usuarios import usuarios,Usuarios,Encoder
from sqlalchemy import Integer, insert,Column,String, true
from utils.db import engine,db
import json
#from flask_cors import CORS,cross_origin


usuarios=Blueprint('usuarios',__name__)
#CORS(usuarios, resources={r"/*":{"origins":"http://localhost"}})


@usuarios.route("/")
def usuariosList():
 SessionListar=sessionmaker(bind=engine)
 session=SessionListar()
 result=session.query(Usuarios).all()

 jsonUsers=json.dumps(result, cls=Encoder, indent=4)
 print(type(jsonUsers))
 print(jsonUsers)

 return jsonUsers
 
@usuarios.route("/nuevo",methods=['POST'])
def nuevo():
    print("entra en usuario")
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


@usuarios.route("/borrar/<id>")
def borrar(id):
    with Session(engine) as session:
        usuario=session.query(Usuarios).get(id)
        session.delete(usuario)
        session.commit()
    flash("¡Usuario eliminado sactifactoriamente!")
    return redirect("/")

@usuarios.route("/modificar/<id>",methods=['PUT'])
def modificar(id):
    with Session(engine) as session:
        if request.method == 'PUT':
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
        # jsonUsersModificado=json.dumps(usuario, cls=Encoder, indent=4)
        # print(type(jsonUsersModificado))
        # print(jsonUsersModificado)
    #return jsonUsersModificado    NO FUNCIONA!
    return render_template("modificarUsuario.html",usuario=usuario) 