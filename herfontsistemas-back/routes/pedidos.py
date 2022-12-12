from flask_marshmallow import Marshmallow
from flask import  Flask,Blueprint, jsonify,render_template,request,url_for,redirect,flash
from sqlalchemy.orm import sessionmaker,Session
from models.pedidos import pedidos,Pedidos,Encoder
from sqlalchemy import Integer, insert,Column,String, true
from utils.db import engine,db
import json

pedidos = Blueprint('pedidos', __name__)

@pedidos.route("/pedidos")
def pedidosList():
    SessionListarPedidos = sessionmaker(bind=engine)
    session = SessionListarPedidos()
    result = session.query(Pedidos).all()
    jsonPedidos = json.dumps(result, cls=Encoder, indent=4)
    print(jsonPedidos)
    return jsonPedidos

@pedidos.route("/nuevoPedido", methods=['POST'])
def nuevoPedido():
    _id_cliente = request.json['idCliente']
    _id_producto = request.json['id']
    _nombre_producto = request.json['nombre']
    _cantidad = request.json['cantidad']
    _precio = request.json['precio']
    nuevoPedido = Pedidos(_id_cliente,_id_producto,_nombre_producto, _cantidad, _precio)
    print(nuevoPedido)
    with Session(engine) as session:
        session.add(nuevoPedido)
        session.commit()
        flash("¡Pedido añadido sactifactoriamente!")
        jsonPedidoInsertado = json.dumps(nuevoPedido, cls=Encoder, indent=4)
        return jsonPedidoInsertado


@pedidos.route("/borrarPedido/<id>")
def borrarPedido(id):
    with Session(engine) as session:
        pedido = session.query(Pedidos).get(id)
        session.delete(pedido)
        session.commit()
    flash("¡Pedido eliminado sactifactoriamente!")
    jsonPedidoBorrado = json.dumps(pedido, cls=Encoder, indent=4)
    return jsonPedidoBorrado


@pedidos.route("/modificarPedido/<id>", methods=['POST', 'GET'])
def modificarPedido(id):
    with Session(engine) as session:
        if request.method == 'POST':
            pedido = session.query(Pedidos).get(id)
            pedido.nombre = request.json['nombre']
            pedido.cantidad = request.json['cantidad']
            pedido.imagen = request.json['imagen']
            pedido.precio = request.json['precio']
            session.commit()
        pedido = session.query(Pedidos).get(id)
    flash("¡Pedido modificado sactifactoriamente!")
    jsonPedidoModificado = json.dumps(pedido, cls=Encoder, indent=4)
    return jsonPedidoModificado