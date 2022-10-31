from flask import  Flask,Blueprint, current_app,render_template,request,url_for,redirect,flash
from sqlalchemy.orm import sessionmaker,Session
from models.productos import productos,Productos
from models.trabajadores import trabajadores,Trabajadores
from sqlalchemy import Integer, insert,Column,String, true
from werkzeug.utils import secure_filename
from utils.db import engine,db
import os

trabajadores=Blueprint('trabajadores',__name__)

@trabajadores.route("/trabajadores")
def trabajadoresList():
    SessionListar=sessionmaker(bind=engine)
    session=SessionListar()
    result=session.query(Trabajadores).all()
    return render_template('trabajadores.html',result=result)

@trabajadores.route("/nuevoTrabajador",methods=['POST'])
def nuevoTrabajador():
    print("ENTRA")
    _nom_trabajador=request.form['nom_trabajador']
    _primer_ape_trabajador=request.form['primer_ape_trabajador']
    _segundo_ape_trabajador=request.form['segundo_ape_trabajador']
    _dni_trabajador=request.form['dni_trabajador']
    _fecha_nacimiento_trabajador=request.form['fecha_nacimiento_trabajador']
    _direccion_trabajador=request.form['direccion_trabajador']
    _poblacion_trabajador=request.form['poblacion_trabajador']
    _correo_trabajador=request.form['correo_trabajador']
    _codigo_postal_trabajador=request.form['codigo_postal_trabajador']
    _tel_fijo_trabajador=request.form['tel_fijo_trabajador']
    _tel_movil_personal=request.form['tel_movil_personal']
    _tel_movil_empresa=request.form['tel_movil_empresa']
    _persona_emergencias=request.form['persona_emergencias']
    _tel_emergencias=request.form['tel_emergencias']
    _banco=request.form['banco']
    _iban=request.form['IBAN']
    _bic=request.form['BIC']

    print("Lo que recoge:")
    print(_nom_trabajador,_primer_ape_trabajador,_segundo_ape_trabajador,_dni_trabajador,_fecha_nacimiento_trabajador,_direccion_trabajador,
     _poblacion_trabajador,_correo_trabajador,_codigo_postal_trabajador,_tel_fijo_trabajador,_tel_movil_personal,_tel_movil_empresa,_persona_emergencias,
    _tel_emergencias,_banco,_iban,_bic)

    newTrabajador=Trabajadores(_nom_trabajador,_primer_ape_trabajador,_segundo_ape_trabajador,_dni_trabajador,_fecha_nacimiento_trabajador,_direccion_trabajador,_poblacion_trabajador,_correo_trabajador,_codigo_postal_trabajador,_tel_fijo_trabajador,_tel_movil_personal,_tel_movil_empresa,_persona_emergencias,_tel_emergencias,_banco,_iban,_bic)
    with Session(engine) as session:
        session.add(newTrabajador)
        session.commit()
        flash("¡trabajador añadido sactifactoriamente!")
        return redirect("/trabajadores")

@trabajadores.route("/borrarTrabajador/<id>")
def borrarTrabajador(id):
    with Session(engine) as session:
        trabajador=session.query(Trabajadores).get(id)
        session.delete(trabajador)
        session.commit()
    flash("¡trabajador eliminado sactifactoriamente!")
    return redirect("/trabajadores")

@trabajadores.route("/modificarTrabajador/<id>",methods=['POST', 'GET'])
def modificarTrabajador(id):
    with Session(engine) as session:
        if request.method == 'POST':
            trabajador=session.query(Trabajadores).get(id)
            trabajador.nom_trabajador=request.form['nom_trabajador']
            trabajador.primer_ape_trabajador=request.form['primer_ape_trabajador']
            trabajador.segundo_ape_trabajador=request.form['segundo_ape_trabajador']
            trabajador.dni_trabajador=request.form['dni_trabajador']
            trabajador.fecha_nacimiento_trabajador=request.form['fecha_nacimiento_trabajador']
            trabajador.direccion_trabajador=request.form['direccion_trabajador']
            trabajador.poblacion_trabajador=request.form['poblacion_trabajador']
            trabajador.correo_trabajador=request.form['correo_trabajador']
            trabajador.codigo_postal_trabajador=request.form['codigo_postal_trabajador']
            trabajador.tel_fijo_trabajador=request.form['tel_fijo_trabajador']
            trabajador.tel_movil_personal=request.form['tel_movil_personal']
            trabajador.tel_movil_empresa=request.form['tel_movil_empresa']
            trabajador.persona_emergencias=request.form['persona_emergencias']
            trabajador.tel_emergencias=request.form['tel_emergencias']
            trabajador.banco=request.form['banco']
            trabajador.iban=request.form['IBAN']
            trabajador.bic=request.form['BIC']
            session.commit()
            return redirect("/trabajadores")
        trabajador=session.query(Trabajadores).get(id)
    flash("¡Trabajador modificado sactifactoriamente!")
    
    return render_template("modificarTrabajador.html",trabajador=trabajador)