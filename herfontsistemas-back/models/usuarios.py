from sqlalchemy import Table,Column,Integer,String,Float,Boolean,MetaData
from sqlalchemy.ext.declarative import declarative_base
from json import JSONEncoder
import json

metaUsuarios=MetaData()
usuarios=Table(
    'usuarios',metaUsuarios,
    Column('id',Integer,primary_key=True),
    Column('nombre',String(100)),
    Column('apellidos',String(100)),
    Column('correo',String(100)),
    Column('telefono',String(50)),
    Column('contrasena',String(50)),
    Column('direccion',String(50)),
    Column('ciudad',String(50)),
    Column('provincia',String(50)),
    Column('codigo_postal',Integer),
    Column('descuento',String(50)),
    Column('admin',Boolean, default=False),
)

Base=declarative_base()
class Usuarios(Base):
    __tablename__='usuarios'
    id=Column(Integer,primary_key=True)
    nombre=Column(String)
    apellidos=Column(String)
    correo=Column(String)
    telefono=Column(String)
    contrasena=Column(String)
    direccion=Column(String)
    ciudad=Column(String)
    provincia=Column(String)
    codigo_postal=Column(Integer)
    descuento=Column(String)
    admin=Column(Boolean)
    

    def __init__(self, nombre, apellidos, correo, telefono, contrasena, direccion, ciudad, provincia, codigo_postal, descuento,admin):
        self.nombre=nombre
        self.apellidos=apellidos
        self.correo=correo
        self.telefono=telefono
        self.contrasena=contrasena
        self.direccion=direccion
        self.ciudad=ciudad
        self.provincia=provincia
        self.codigo_postal=codigo_postal
        self.descuento=descuento
        self.admin=admin
   
class Encoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o,Usuarios):
            return {
                "id":o.id,
                "nombre":o.nombre,
                "apellidos":o.apellidos,
                "correo":o.correo,
                "telefono":o.telefono,
                "contrasena":o.contrasena,
                "direccion":o.direccion,
                "ciudad":o.ciudad,
                "provincia":o.provincia,
                "codigo_postal":o.codigo_postal,
                "descuento":o.descuento,
                "admin":o.admin
            }
        return super().default(o)