from sqlalchemy import Table,Column,Integer,String,Float,MetaData
from sqlalchemy.ext.declarative import declarative_base
metaProductos=MetaData()
productos=Table(
    'productos',metaProductos,
    Column('id',Integer, primary_key=True),
    Column('nom_producto',String(100)),
    Column('descripcion',String(100)),
    Column('cantidad',Integer),
    Column('imagen',String(50)),
    Column('precio',Integer),
)
Base=declarative_base()
class Productos(Base):
    __tablename__='productos'
    id=Column(Integer,primary_key=True)
    nom_producto=Column(String)
    descripcion=Column(String)
    cantidad=Column(Integer)
    imagen=Column(String)
    precio=Column(Integer)

    def __init__(self, nom_producto, descripcion, cantidad, imagen, precio):
        self.nom_producto=nom_producto
        self.descripcion=descripcion
        self.cantidad=cantidad
        self.imagen=imagen
        self.precio=precio

