from sqlalchemy import ForeignKey, ForeignKeyConstraint, Table, Column, Integer, MetaData
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from json import JSONEncoder
from models.usuarios import usuarios
import json

metaPedidos = MetaData()
pedidos = Table(
    'pedidos', metaPedidos,
    Column('id', Integer, primary_key=True),
    Column('id_cliente', Integer),
    Column('id_producto', Integer),
    Column('cantidad', Integer),
    Column('precio_total', Integer),
    ForeignKeyConstraint(['id_cliente'], ['usuarios.id'])
)

Base = declarative_base()

class Pedidos(Base):
    __tablename__ = 'pedidos'
    id = Column(Integer, primary_key=True)
    id_cliente = Column(Integer)
    id_producto = Column(Integer)
    cantidad = Column(Integer)
    precio_total = Column(Integer),
    #ForeignKeyConstraint(['id_cliente', 'id_producto'], ['usuarios.id', 'productos.id'])
    #children = relationship('usuarios')


def __init__(self, id, id_cliente, id_producto, cantidad, precio_total):
    self.id = id
    self.id_cliente = id_cliente
    self.id_producto = id_producto
    self.cantidad = cantidad
    self.precio_total = precio_total


class Encoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, Pedidos):
            return {
                "id": o.id,
                "id_cliente": o.id_cliente,
                "id_producto": o.id_producto,
                "cantidad": o.cantidad,
                "precio_total": o.precio_total
            }
        return super().default(o)
