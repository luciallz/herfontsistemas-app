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
    _nombre=request.json['nombre']
    _apellidos=request.json['apellidos']
    _correo=request.json['correo']
    _telefono=request.json['telefono']
    _contrasena=request.json['contrasena']
    _direccion=request.json['direccion']
    _ciudad=request.json['ciudad']
    _provincia=request.json['provincia']
    _codigo_postal=request.json['codigo_postal']
    _descuento=request.json['descuento']
    nuevoUsuario=Usuarios(_nombre,_apellidos,_correo,_telefono,_contrasena,_direccion,_ciudad,_provincia,_codigo_postal,_descuento)
    print(nuevoUsuario)
    with Session(engine) as session:
        session.add(nuevoUsuario)
        session.commit()
        flash("¡Usuario añadido sactifactoriamente!")
        jsonUsersInsertado=json.dumps(nuevoUsuario, cls=Encoder, indent=4)
        return jsonUsersInsertado



@usuarios.route("/borrar/<id>",methods=['DELETE'])
def borrar(id):
    with Session(engine) as session:
        usuario=session.query(Usuarios).get(id)
        session.delete(usuario)
        session.commit()
    flash("¡Usuario eliminado sactifactoriamente!")
    jsonUsersBorrado=json.dumps(usuario, cls=Encoder, indent=4)
    return jsonUsersBorrado

@usuarios.route("/modificar/<id>",methods=['PUT'])
def modificar(id):
    print(id)
    with Session(engine) as session:
        if request.method == 'PUT':
            usuario=session.query(Usuarios).get(id)
            print(usuario)
            usuario.nombre=request.json['nombre']
            usuario.apellidos=request.json['apellidos']
            usuario.correo=request.json['correo']
            usuario.telefono=request.json['telefono']
            usuario.contrasena=request.json['contrasena']
            usuario.direccion=request.json['direccion']
            usuario.ciudad=request.json['ciudad']
            usuario.provincia=request.json['provincia']
            usuario.codigo_postal=request.json['codigo_postal']
            usuario.descuento=request.json['descuento']
            
            print(usuario)
            session.commit()
        usuario=session.query(Usuarios).get(id)
        flash("¡Usuario modificado sactifactoriamente!")
        jsonUsersModificado=json.dumps(usuario, cls=Encoder, indent=4)
        print(type(jsonUsersModificado))
        print(jsonUsersModificado)
    #return render_template("modificarUsuario.html",usuario=usuario) 
    return jsonUsersModificado