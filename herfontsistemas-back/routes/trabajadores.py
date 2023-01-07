from flask import  Flask,Blueprint, jsonify, current_app,render_template,request,url_for,redirect,flash
from sqlalchemy.orm import sessionmaker,Session
from models.trabajadores import trabajadores,Trabajadores,Encoder
from sqlalchemy import Integer, insert,Column,String, true
from werkzeug.utils import secure_filename
from utils.db import engine,db
import os
import json
from datetime import datetime


trabajadores=Blueprint('trabajadores',__name__)

@trabajadores.route("/herfontsistemas-back/trabajadores")
def trabajadoresList():
    SessionListar=sessionmaker(bind=engine)
    session=SessionListar()
    result=session.query(Trabajadores).all()
    jsonTrabaj=json.dumps(result, cls=Encoder, indent=4)
    print(type(jsonTrabaj))
    print(jsonTrabaj)
    return jsonTrabaj
@trabajadores.route("/herfontsistemas-back/nuevoTrabajador",methods=['POST'])
def nuevoTrabajador():
    print("ENTRA")
    _nom_trabajador=request.json['nom_trabajador']
    _primer_ape_trabajador=request.json['primer_ape_trabajador']
    _segundo_ape_trabajador=request.json['segundo_ape_trabajador']
    _dni_trabajador=request.json['dni_trabajador']
    _fecha_nacimiento_trabajador=request.json['fecha_nacimiento_trabajador']
    _direccion_trabajador=request.json['direccion_trabajador']
    _poblacion_trabajador=request.json['poblacion_trabajador']
    _correo_trabajador=request.json['correo_trabajador']
    _codigo_postal_trabajador=request.json['codigo_postal_trabajador']
    _tel_fijo_trabajador=request.json['tel_fijo_trabajador']
    _tel_movil_personal=request.json['tel_movil_personal']
    _tel_movil_empresa=request.json['tel_movil_empresa']
    _persona_emergencias=request.json['persona_emergencias']
    _tel_emergencias=request.json['tel_emergencias']
    _banco=request.json['banco']
    _iban=request.json['iban']
    _bic=request.json['bic']

    print("Lo que recoge:")
    print(_nom_trabajador,_primer_ape_trabajador,_segundo_ape_trabajador,_dni_trabajador,_fecha_nacimiento_trabajador,_direccion_trabajador,
     _poblacion_trabajador,_correo_trabajador,_codigo_postal_trabajador,_tel_fijo_trabajador,_tel_movil_personal,_tel_movil_empresa,_persona_emergencias,
    _tel_emergencias,_banco,_iban,_bic)

    newTrabajador=Trabajadores(_nom_trabajador,_primer_ape_trabajador,_segundo_ape_trabajador,_dni_trabajador,_fecha_nacimiento_trabajador,_direccion_trabajador,_poblacion_trabajador,_correo_trabajador,_codigo_postal_trabajador,_tel_fijo_trabajador,_tel_movil_personal,_tel_movil_empresa,_persona_emergencias,_tel_emergencias,_banco,_iban,_bic)
    with Session(engine) as session:
        user_exist=session.query(Trabajadores).filter_by(correo_trabajador = _correo_trabajador).first() is not None
        if user_exist:
            error={"errorDuplicado":"El trabajador ya existe"}
            # devolverError=json.dumps(error, cls=Encoder, indent=4)
            print(error)
            print(type(error))
            return jsonify(error)
        else:
            session.add(newTrabajador)
            session.commit()
            flash("¡Trabajador añadido sactifactoriamente!")
            jsonTrabajInsertado=json.dumps(newTrabajador, cls=Encoder, indent=4)
            return jsonTrabajInsertado

@trabajadores.route("/herfontsistemas-back/borrarTrabajador/<id>",methods=['DELETE'])
def borrarTrabajador(id):
    with Session(engine) as session:
        trabajador=session.query(Trabajadores).get(id)
        session.delete(trabajador)
        session.commit()
    jsonTrabajBorrado=json.dumps(trabajador, cls=Encoder, indent=4)
    return jsonTrabajBorrado

@trabajadores.route("/herfontsistemas-back/modificarTrabajador/<id>",methods=['PUT'])
def modificarTrabajador(id):
    with Session(engine) as session:
        if request.method == 'PUT':
            trabajador=session.query(Trabajadores).get(id)
            trabajador.nom_trabajador=request.json['nom_trabajador']
            trabajador.primer_ape_trabajador=request.json['primer_ape_trabajador']
            trabajador.segundo_ape_trabajador=request.json['segundo_ape_trabajador']
            trabajador.dni_trabajador=request.json['dni_trabajador']
            trabajador.fecha_nacimiento_trabajador=request.json['fecha_nacimiento_trabajador']
            trabajador.direccion_trabajador=request.json['direccion_trabajador']
            trabajador.poblacion_trabajador=request.json['poblacion_trabajador']
            trabajador.correo_trabajador=request.json['correo_trabajador']
            trabajador.codigo_postal_trabajador=request.json['codigo_postal_trabajador']
            trabajador.tel_fijo_trabajador=request.json['tel_fijo_trabajador']
            trabajador.tel_movil_personal=request.json['tel_movil_personal']
            trabajador.tel_movil_empresa=request.json['tel_movil_empresa']
            trabajador.persona_emergencias=request.json['persona_emergencias']
            trabajador.tel_emergencias=request.json['tel_emergencias']
            trabajador.banco=request.json['banco']
            trabajador.iban=request.json['iban']
            trabajador.bic=request.json['bic']
        session.commit()

        trabajador=session.query(Trabajadores).get(id)
    flash("¡Trabajador modificado sactifactoriamente!")
    jsonTrabajModificado=json.dumps(trabajador, cls=Encoder, indent=4)
    print(type(jsonTrabajModificado))
    print(jsonTrabajModificado)
    #return render_template("modificarUsuario.html",usuario=usuario)
    return jsonTrabajModificado