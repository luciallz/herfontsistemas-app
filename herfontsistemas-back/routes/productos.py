from flask import  Flask,Blueprint, current_app,render_template,request,url_for,redirect,flash,current_app
from sqlalchemy.orm import sessionmaker,Session
from models.productos import productos,Productos
from sqlalchemy import Integer, insert,Column,String, true
from werkzeug.utils import secure_filename
from utils.db import engine,db
import os
import logging
productos=Blueprint('productos',__name__)

@productos.route("/productos")
def productosList():
    SessionListar=sessionmaker(bind=engine)
    session=SessionListar()
    result=session.query(Productos).all()
    return render_template('productos.html',result=result)


@productos.route("/nuevoProducto",methods=['POST', 'GET'])
def nuevoProducto():
    print("444444444444444444444444")
    print(request.form['nomproducto'])
    _nom_producto="producto"
    #_nom_producto=request.form['nomproducto']
    _descripcion=request.form['descripcion']
    _cantidad=request.form['cantidad']
    _imagen_name=None
    print("aaaaa")

    if 'imagen' in request.files:
        _imagen=request.files['imagen']
        if _imagen.filename:
            imagen_name=secure_filename(_imagen.filename)
            print("rrrrrrrrr")
            print(imagen_name)

            current_app.config['imagenes']="./imagenes"
            imagen_dir=current_app.config['imagenes']
            print("uuuuuuuuuuuu")
            print(imagen_dir)

            os.makedirs(imagen_dir, exist_ok=True)
            imagen_path=os.path.join(imagen_dir,imagen_name)
            _imagen.save(imagen_path)
    _precio=request.form['precio']
    nuevoProducto=Productos(_nom_producto,_descripcion,_cantidad,_imagen_name,_precio)
    print(nuevoProducto)
    with Session(engine) as session:
        session.add(nuevoProducto)
        session.commit()
        flash("¡Producto añadido sactifactoriamente!")
        return redirect("/nuevoProducto")


@productos.route("/borrarProducto/<id>")
def borrar(id):
    with Session(engine) as session:
        producto=session.query(Productos).get(id)
        session.delete(producto)
        session.commit()
    flash("¡Producto eliminado sactifactoriamente!")
    return redirect("/")

@productos.route("/modificarProducto/<id>",methods=['POST', 'GET'])
def modificar(id):
    with Session(engine) as session:
        if request.method == 'POST':
            producto=session.query(Productos).get(id)
            producto.nombre=request.form['nombre']
            producto.descripcion=request.form['descripcion']
            producto.cantidad=request.form['cantidad']
            producto.imagen=request.form['imagen']
            producto.precio=request.form['precio']
            
            print(producto)
            session.commit()
            return redirect("/")
        producto=session.query(Productos).get(id)
    flash("¡Producto modificado sactifactoriamente!")
    
    return render_template("modificarProducto.html",producto=producto)