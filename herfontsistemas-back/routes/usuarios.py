from flask_marshmallow import Marshmallow
from flask import  Flask,Blueprint, jsonify,render_template,request,url_for,redirect,flash,abort
from sqlalchemy.orm import sessionmaker,Session
from models.usuarios import usuarios,Usuarios,Encoder
from sqlalchemy import Integer, insert,Column,String, true
from utils.db import engine,db,session
from flask_bcrypt import Bcrypt
import json
from flask_login import LoginManager,login_user,logout_user,login_required



usuarios=Blueprint('usuarios',__name__)
bcrypt=Bcrypt(None)
login_manager_app=LoginManager(usuarios)
# @login_manager_app.user_loader
# def load_user(id):
#     cursor=engine.connect()
#     sql="SELECT correo FROM Usuarios WHERE id = {]".form
#     return ModelUser.get_by_id(db,id)
@usuarios.route("/")
def usuariosList():
 SessionListar=sessionmaker(bind=engine)
 session=SessionListar()
 result=session.query(Usuarios).all()

 jsonUsers=json.dumps(result, cls=Encoder, indent=4)
 print(type(jsonUsers))
 print(jsonUsers)

 return jsonUsers
@usuarios.route("/login",methods=['POST'])
def login():
    if request.method=="POST":
        correoLog=request.json['correo']
        contrasenaLog=request.json['contrasena']
        print(correoLog)
        print(contrasenaLog)
        # with Session(engine) as session:
        correo_exist=session.query(Usuarios).filter_by(correo = correoLog).first() is not None
        if correo_exist is None:
            errorLog={"errorLog":"Ese correo no existe"}
            print(errorLog)
            return jsonify(errorLog)
        contrasenaCogida=session.query(Usuarios.contrasena).where(Usuarios.correo==correoLog)
        print("contrasena: ")
        for row in contrasenaCogida:
            dictContrasenaCorrecta=dict(row)
            print(dictContrasenaCorrecta)

        print( dictContrasenaCorrecta["contrasena"])
        print(type(dictContrasenaCorrecta))
        contrasenaCorrecta=str(dictContrasenaCorrecta["contrasena"])
        pw_hass=bcrypt.generate_password_hash(contrasenaCorrecta)
        print(pw_hass)
        print(type(pw_hass))
        print("Contraseña a del form: ")
        print(contrasenaLog)
        print(type(contrasenaLog))
        if not bcrypt.check_password_hash(pw_hass,contrasenaLog):
            errorLog={"errorLog":"Contraseña incorrecta"}
            return jsonify(errorLog)

        print(correoLog)
        print(type(correoLog))
        print(type(session))
        usuarioLog=session.query(Usuarios.nombre,Usuarios.correo).where(Usuarios.correo==correoLog)
        for row in usuarioLog:
            userLog=Usuarios(row[0],None,row[1],None,None,None,None,None,None,None,None)
        login_user(userLog)
        print(userLog)
        # session["email"]=correoLog
        # return jsonify({
        #     "id":Usuarios.id,
        #     "correo":Usuarios.correo,
        #     "Mensaje":"Usted ha iniciado sesión correctamente"
        # })
        jsonUserLogeado=json.dumps(userLog, cls=Encoder, indent=4)
        return jsonUserLogeado
        return jsonify({"Mensaje":"Usted ha iniciado sesion"})

@usuarios.route("/logout")
def logout():
    logout_user()
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
    _admin=False

    nuevoUsuario=Usuarios(_nombre,_apellidos,_correo,_telefono,_contrasena,_direccion,_ciudad,_provincia,_codigo_postal,_descuento,_admin)
    print(nuevoUsuario)
    # with Session(engine) as session:
    user_exist=session.query(Usuarios).filter_by(correo = _correo).first() is not None
    if user_exist:
        error={"errorDuplicado":"El usuario ya existe"}
        # devolverError=json.dumps(error, cls=Encoder, indent=4)
        print(error)
        print(type(error))
        session["usuario_id"]=Usuarios.id
        return jsonify(error)
    else:
        session.add(nuevoUsuario)
        session.commit()
        flash("¡Usuario añadido sactifactoriamente!")
        jsonUsersInsertado=json.dumps(nuevoUsuario, cls=Encoder, indent=4)
        return jsonUsersInsertado



@usuarios.route("/borrar/<id>",methods=['DELETE'])
def borrar(id):
    # with Session(engine) as session:
    usuario=session.query(Usuarios).get(id)
    session.delete(usuario)
    session.commit()
    flash("¡Usuario eliminado sactifactoriamente!")
    jsonUsersBorrado=json.dumps(usuario, cls=Encoder, indent=4)
    return jsonUsersBorrado

@usuarios.route("/modificar/<id>",methods=['PUT'])
def modificar(id):
    print(id)
    #with Session(engine) as session:
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