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

@productos.route("/nuevoProducto",methods=['POST'])
def nuevoProducto():
    print("ENTRA")
    _nom_producto=request.form['nomproducto']
    _descripcion=request.form['descripcion']
    _cantidad=request.form['cantidad']
    _precio=request.form['precio']
    if 'imagen' in request.files:
        print("TIENE IMAGENES")
        _imagen=request.files['imagen']
        if _imagen.filename:
            imagen_name=secure_filename(_imagen.filename)
            print("blablabla")
            print(imagen_name)

            current_app.config['imagenes']="./imagenes"
            imagen_dir=current_app.config['imagenes']
            print("uuuuuuuuuuuu")
            print(imagen_dir)

            os.makedirs(imagen_dir, exist_ok=True)
            imagen_path=os.path.join(imagen_dir,imagen_name)
            _imagen.save(imagen_path)
            print("PATH")
            print(imagen_path)
            nuevoProducto=Productos(_nom_producto,_descripcion,_cantidad,imagen_name,_precio)
    else:
        nuevoProducto=Productos(_nom_producto,_descripcion,_cantidad,'None',_precio)
    print(nuevoProducto)
    with Session(engine) as session:
        session.add(nuevoProducto)
        session.commit()
        flash("¡Producto añadido sactifactoriamente!")
        return redirect("/productos")

@productos.route("/borrarProducto/<id>")
def borrarProducto(id):
    with Session(engine) as session:
        producto=session.query(Productos).get(id)
        session.delete(producto)
        session.commit()
    flash("¡Producto eliminado sactifactoriamente!")
    return redirect("/productos")

@productos.route("/modificarProducto/<id>",methods=['POST', 'GET'])
def modificarProducto(id):
    with Session(engine) as session:
        if request.method == 'POST':
            producto=session.query(Productos).get(id)
            producto.nom_producto=request.form['nom_producto']
            producto.descripcion=request.form['descripcion']
            producto.cantidad=request.form['cantidad']
            producto.imagen=request.form['imagen']
            producto.precio=request.form['precio']
            
            print(producto)
            session.commit()
            return redirect("/productos")
        producto=session.query(Productos).get(id)
    flash("¡Producto modificado sactifactoriamente!")
    
    return render_template("modificarProducto.html",producto=producto)