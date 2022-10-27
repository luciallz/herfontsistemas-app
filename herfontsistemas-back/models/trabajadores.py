from sqlalchemy import Table,Column,Integer,String,Float,MetaData
from sqlalchemy.ext.declarative import declarative_base

metaTrabajadores=MetaData()
trabajadores=Table(
    'trabajadores',metaTrabajadores,
    Column('id',Integer, primary_key=True),
    Column('nom_trabajador',String(100)),
    Column('primer_ape_trabajador',String(100)),
    Column('segundo_ape_trabajador',String(100)),
    Column('dni_trabajador',String(100)),
    Column('fecha_nacimiento_trabajador',String(50)),
    Column('direccion_trabajador',String(50)),
    Column('poblacion_trabajador',String(50)),
    Column('correo_trabajador',String(50)),
    Column('codigo_postal_trabajador',String(50)),
    Column('tel_fijo_trabajador',String(50)),
    Column('tel_movil_personal',String(50)),
    Column('tel_movil_empresa',String(50)),
    Column('persona_emergencias',String(50)),
    Column('tel_emergencias',String(50)),
    Column('banco',String(50)),
    Column('iban',Integer),
    Column('bic',String(100)),
)

Base=declarative_base()
class Trabajadores(Base):
    __tablename__='trabajadores'
    id=Column(Integer,primary_key=True)
    nom_trabajador=Column(String)
    primer_ape_trabajador=Column(String)
    segundo_ape_trabajador=Column(String)
    dni_trabajador=Column(String)
    fecha_nacimiento_trabajador=Column(String)
    direccion_trabajador=Column(String)
    poblacion_trabajador=Column(String)
    correo_trabajador=Column(String)
    codigo_postal_trabajador=Column(String)
    tel_fijo_trabajador=Column(String)
    tel_movil_personal=Column(String)
    tel_movil_empresa=Column(String)
    persona_emergencias=Column(String)
    tel_emergencias=Column(String)
    banco=Column(String)
    iban=Column(Integer)
    bic=Column(String)

    def __init__(self, nom_trabajador, primer_ape_trabajador, segundo_ape_trabajador, dni_trabajador, fecha_nacimiento_trabajador, direccion_trabajador, poblacion_trabajador, correo_trabajador, codigo_postal_trabajador, tel_fijo_trabajador, tel_movil_personal, tel_movil_empresa, persona_emergencias,tel_emergencias, banco, iban, bic):
        self.nom_trabajador=nom_trabajador
        self.primer_ape_trabajador=primer_ape_trabajador
        self.segundo_ape_trabajador=segundo_ape_trabajador
        self.dni_trabajador=dni_trabajador
        self.fecha_nacimiento_trabajador=fecha_nacimiento_trabajador
        self.direccion_trabajador=direccion_trabajador
        self.poblacion_trabajador=poblacion_trabajador
        self.correo_trabajador=correo_trabajador
        self.codigo_postal_trabajador=codigo_postal_trabajador
        self.tel_fijo_trabajador=tel_fijo_trabajador
        self.tel_movil_personal=tel_movil_personal
        self.tel_movil_empresa=tel_movil_empresa
        self.persona_emergencias=persona_emergencias
        self.tel_emergencias=tel_emergencias
        self.banco=banco
        self.iban=iban
        self.bic=bic










    

