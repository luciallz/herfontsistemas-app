from sqlalchemy import Table,Column,Integer,String,Float,MetaData

metaTrabajadores=MetaData()
trabajadores=Table(
    'trabajadores',metaTrabajadores,
    Column('id',Integer, primary_key=True),
    Column('nombre',String(100)),
    Column('primer_apellido',String(100)),
    Column('segundo_apellido',String(100)),
    Column('DNI',String(100)),
    Column('Fecha_nacimiento',String(50)),
    Column('direccion',String(50)),
    Column('poblacion',String(50)),
    Column('correo',String(50)),
    Column('codigo_postal',String(50)),
    Column('telefono_fijo',String(50)),
    Column('telefono_movil_personal',String(50)),
    Column('telefono_movil_empresa',String(50)),
    Column('telefono_emergencias',String(50)),
    Column('nombre_persona_emergencias',String(50)),
    Column('banco',String(50)),
    Column('IBAN',Integer),
    Column('BIC',String(100)),
)
