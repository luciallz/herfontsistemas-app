from flask import Flask, Blueprint, current_app, render_template, request, url_for, redirect, flash, current_app
from sqlalchemy.orm import sessionmaker, Session
from models.productos import productos, Productos, Encoder
from sqlalchemy import Integer, insert, Column, String, true
from werkzeug.utils import secure_filename
from utils.db import engine, db
import os
import json

productos = Blueprint('productos', __name__)

@productos.route("/herfontsistemas-back/productos")
def productosList():
    SessionListarProductos = sessionmaker(bind=engine)
    session = SessionListarProductos()
    result = session.query(Productos).all()
    jsonProductos = json.dumps(result, cls=Encoder, indent=4)
    print(jsonProductos)
    return jsonProductos


@productos.route("/api/nuevoProducto", methods=['POST'])
def nuevoProducto():
    _nom_producto = request.json['nom_producto']
    _descripcion = request.json['descripcion']
    _cantidad = request.json['cantidad']
    _precio = request.json['precio']
    if 'imagen' in request.files:
        _imagen = request.files['imagen']
        if _imagen.filename:
            imagen_name = secure_filename(_imagen.filename)
            print(imagen_name)

            current_app.config['imagenes'] = "./imagenes"
            imagen_dir = current_app.config['imagenes']
            print(imagen_dir)

            os.makedirs(imagen_dir, exist_ok=True)
            imagen_path = os.path.join(imagen_dir, imagen_name)
            _imagen.save(imagen_path)
            print("PATH")
            print(imagen_path)
            nuevoProducto = Productos(_nom_producto, _descripcion, _cantidad, imagen_name, _precio)
    else:
        nuevoProducto = Productos(_nom_producto, _descripcion, _cantidad, 'None', _precio)
    print(nuevoProducto)
    with Session(engine) as session:
        session.add(nuevoProducto)
        session.commit()
        flash("¡Producto añadido sactifactoriamente!")
        jsonProductoInsertado = json.dumps(nuevoProducto, cls=Encoder, indent=4)
        return jsonProductoInsertado


@productos.route("/api/borrarProducto/<id>")
def borrarProducto(id):
    with Session(engine) as session:
        producto = session.query(Productos).get(id)
        session.delete(producto)
        session.commit()
    flash("¡Producto eliminado sactifactoriamente!")
    jsonProductoBorrado = json.dumps(producto, cls=Encoder, indent=4)
    return jsonProductoBorrado


@productos.route("/api/modificarProducto/<id>", methods=['POST', 'GET'])
def modificarProducto(id):
    with Session(engine) as session:
        if request.method == 'POST':
            producto = session.query(Productos).get(id)
            producto.nom_producto = request.json['nom_producto']
            producto.descripcion = request.json['descripcion']
            producto.cantidad = request.json['cantidad']
            producto.imagen = request.json['imagen']
            producto.precio = request.json['precio']
            session.commit()
            # return redirect("/productos")
        producto = session.query(Productos).get(id)
    flash("¡Producto modificado sactifactoriamente!")
    jsonProductoModificado = json.dumps(producto, cls=Encoder, indent=4)
    return jsonProductoModificado
