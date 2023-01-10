from flask_marshmallow import Marshmallow
from flask import Flask, Blueprint, jsonify, render_template, request, url_for, redirect, flash, abort
from sqlalchemy.orm import sessionmaker, Session
from models.usuarios import usuarios, Usuarios, Encoder
from sqlalchemy import Integer, insert, Column, String, true
from utils.db import engine, db, session
from flask_bcrypt import Bcrypt
import json
from flask_login import LoginManager, login_user, logout_user, login_required
from itsdangerous import URLSafeSerializer
from flask_mail import Message,Mail
from smtplib import SMTPException
from flask_cors import CORS, cross_origin



usuarios = Blueprint('usuarios', __name__)

bcrypt = Bcrypt(None)
login_manager_app = LoginManager(usuarios)
mail=Mail()
# @login_manager_app.user_loader
# def load_user(id):
#     cursor=engine.connect()
#     sql="SELECT correo FROM Usuarios WHERE id = {]".form
#     return ModelUser.get_by_id(db,id)


@usuarios.route("/herfontsistemas-back/usuarios")
def usuariosList():
    SessionListar = sessionmaker(bind=engine)
    session = SessionListar()
    result = session.query(Usuarios).all()
    jsonUsers = json.dumps(result, cls=Encoder, indent=4)
    print(type(jsonUsers))
    print(jsonUsers)
    return jsonUsers


@usuarios.route("/herfontsistemas-back/login", methods=['POST'])
def login():
    if request.method == "POST":
        correoLog = request.json['correo']
        contrasenaLog = request.json['contrasena']
        print(correoLog)
        print(contrasenaLog)
        # with Session(engine) as session:
        correo_exist = session.query(Usuarios).filter_by(
            correo=correoLog).first() is not None
        if correo_exist is None:
            errorLog = {"errorLog": "Ese correo no existe"}
            print(errorLog)
            return jsonify(errorLog)
        contrasenaCogida = session.query(
            Usuarios.contrasena).where(Usuarios.correo == correoLog)
        print("contrasena: ")
        for row in contrasenaCogida:
            dictContrasenaCorrecta = dict(row)
            print(dictContrasenaCorrecta)

        print(dictContrasenaCorrecta["contrasena"])
        print(type(dictContrasenaCorrecta))
        contrasenaCorrecta = str(dictContrasenaCorrecta["contrasena"])
        # pw_hass = bcrypt.generate_password_hash(contrasenaCorrecta)
        # print(pw_hass)

        if not bcrypt.check_password_hash(contrasenaCorrecta, contrasenaLog):
            errorLog = {"errorLog": "Contraseña incorrecta"}
            return jsonify(errorLog)

        print(correoLog)
        print(type(correoLog))
        print(type(session))
        usuarioLog = session.query(Usuarios.nombre, Usuarios.correo).where(
            Usuarios.correo == correoLog)
        for row in usuarioLog:
            userLog = Usuarios(row[0], None, row[1], None,
                               None, None, None, None, None, None, None)
        login_user(userLog)
        print(userLog)
        # session["email"]=correoLog
        # return jsonify({
        #     "id":Usuarios.id,
        #     "correo":Usuarios.correo,
        #     "Mensaje":"Usted ha iniciado sesión correctamente"
        # })
        jsonUserLogeado = json.dumps(userLog, cls=Encoder, indent=4)
        return jsonUserLogeado
        # return jsonify({"Mensaje":"Usted ha iniciado sesion"})


@usuarios.route("/herfontsistemas-back/logout")
def logout():
    logout_user()

def send_mail(user):
    print("ENTRO A FORGOTPSSWD SEND_MAIL")

    token=user.get_token()
    print(token)
    print("USUARIO CORREO "+ user.correo)
# {url_for('usuarios.reset_token',token=token,_external=True)}
# http://www.herfontsistemas.es/ChangePasswd/{token}
    msg=Message('Password Resset',recipients=[user.correo],sender='lleraszarzal@gmail.com')
    msg.body=f''' Para resetear tu contraseña, porfavor haz click en el siguiente enlaze.
    http://localhost:3000/ChangePasswd?token={token}
    
    '''
    print(msg)


    mail.send(msg)
    

@usuarios.route("/herfontsistemas-back/ForgotPsswd", methods=['POST'])
def forgotPsswd():
    print("ENTRO A FORGOTPSSWD")

    correoForm = request.json['correo']
    print(correoForm)

    correo_exist = session.query(Usuarios).filter_by(
        correo=correoForm).first()
    print("COOOOOORREEEEOOOO")
    print(correo_exist)
    if correo_exist: 
        try:
            send_mail(correo_exist)
            print({"correcto": "Correo enviado"})
            return jsonify({"correcto": "Correo enviado"})
        except:
            print({"errorForgotPsswd":"Error al enviar el correo"})
            return jsonify({"errorForgotPsswd":"Error al enviar el correo"})
    else:
        print({"errorForgotPsswd": "Correo inválido, no existe en nuestra base de datos."})
        return jsonify({"errorForgotPsswd": "Correo inválido, no existe en nuestra base de datos."})
    
    # jsonUserForgot = json.dumps(correo_exist, cls=Encoder, indent=4)
    # return jsonUserForgot
cors=CORS(usuarios)
@usuarios.route("/herfontsistemas-back/ChangePasswd", methods=['POST'])
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
def reset_token():
    print("ENTRO A FORGOTPSSWD TOKEN")
    data=request.json
    print(data)
    token= data['data']['token']
    contrasenaForm = data['data']['contrasena']
    print("TOKEN= "+token)
    print("CONTRASEÑA= "+contrasenaForm)
    user=Usuarios.verify_token(token)
    print("TOKEN USEEER: ")
    print(user)
    
    if user is None:
        print("ENTRO AL if")

        errorToken = {"errorToken": "Token invalido o ha expirado, porfavor vuelva a enviar el correo para cambiar la contraseña"}
        print(errorToken)
        return jsonify(errorToken)
    
    
    print("CONTRASEÑA COGIDA DE FORM:")
    print(contrasenaForm)
    
    
    pw_hass = bcrypt.generate_password_hash(contrasenaForm).decode('utf-8')
    # user.contrasena=pw_hass
    session.query(Usuarios).filter(Usuarios.id==user.id).update({"contrasena": pw_hass})
    print("CONTRASEÑA HASEADA:")
    print(pw_hass)
    print(user.contrasena)

    db.session.commit()
    success = {"success": "Contraseña cambiada correctamente"}
    print("SUSSCEEEEEEEEEEES")
    print(success)
    # return jsonify(success)
    # return render_template('ChangePasswd',token=token)
    # jsonToken = json.dumps(token, cls=Encoder, indent=4)
    return success

@usuarios.route("/herfontsistemas-back/nuevo", methods=['GET','POST'])
def nuevo():
    print("entra en usuario")
    _nombre = request.json['nombre']
    _apellidos = request.json['apellidos']
    _correo = request.json['correo']
    _telefono = request.json['telefono']
    _contrasena = request.json['contrasena']
    _direccion = request.json['direccion']
    _ciudad = request.json['ciudad']
    _provincia = request.json['provincia']
    _codigo_postal = request.json['codigo_postal']
    _descuento = request.json['descuento']
    _admin = False
    pw_hass = bcrypt.generate_password_hash(_contrasena).decode('utf-8')
    nuevoUsuario = Usuarios(_nombre, _apellidos, _correo, _telefono, pw_hass, _direccion, _ciudad, _provincia, _codigo_postal, _descuento, _admin)
    print(nuevoUsuario)
    # with Session(engine) as session:
    user_exist = session.query(Usuarios).filter_by(
        correo=_correo).first() is not None
    if user_exist:
        error = {"errorDuplicado": "El usuario ya existe"}
        # devolverError=json.dumps(error, cls=Encoder, indent=4)
        print(error)
        print(type(error))
        #session["usuario_id"]=Usuarios.id
        return jsonify(error)
    else:
        session.add(nuevoUsuario)
        session.commit()
        flash("¡Usuario añadido sactifactoriamente!")
        jsonUsersInsertado = json.dumps(nuevoUsuario, cls=Encoder, indent=4)
        return jsonUsersInsertado


@usuarios.route("/herfontsistemas-back/borrar/<id>", methods=['DELETE'])
def borrar(id):
    # with Session(engine) as session:
    usuario = session.query(Usuarios).get(id)
    session.delete(usuario)
    session.commit()
    flash("¡Usuario eliminado sactifactoriamente!")
    jsonUsersBorrado = json.dumps(usuario, cls=Encoder, indent=4)
    return jsonUsersBorrado


@usuarios.route("/herfontsistemas-back/modificar/<id>", methods=['PUT'])
def modificar(id):
    print(id)
    # with Session(engine) as session:
    if request.method == 'PUT':
        usuario = session.query(Usuarios).get(id)
        print(usuario)
        usuario.nombre = request.json['nombre']
        usuario.apellidos = request.json['apellidos']
        usuario.correo = request.json['correo']
        usuario.telefono = request.json['telefono']
        contrasenaForm = request.json['contrasena']
        pw_hass = bcrypt.generate_password_hash(contrasenaForm).decode('utf-8')
        # usuario.contrasena = request.json['contrasena']
        usuario.direccion = request.json['direccion']
        usuario.ciudad = request.json['ciudad']
        usuario.provincia = request.json['provincia']
        usuario.codigo_postal = request.json['codigo_postal']
        usuario.descuento = request.json['descuento']

        print(usuario)
    session.commit()
    usuario = session.query(Usuarios).get(id)
    session.query(Usuarios).filter(Usuarios.id==usuario.id).update({"contrasena": pw_hass})
    flash("¡Usuario modificado sactifactoriamente!")
    jsonUsersModificado = json.dumps(usuario, cls=Encoder, indent=4)
    print(type(jsonUsersModificado))
    print(jsonUsersModificado)
    # return render_template("modificarUsuario.html",usuario=usuario)
    return jsonUsersModificado
