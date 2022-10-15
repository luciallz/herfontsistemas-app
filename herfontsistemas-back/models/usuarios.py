from sqlalchemy import Table,Column,Integer,String,Float,MetaData

metaUsuarios=MetaData()
usuarios=Table(
    'usuarios',metaUsuarios,
    Column('id',Integer, primary_key=True),
    Column('nombre',String(100)),
    Column('apellidos',String(100)),
    Column('correo',String(100)),
    Column('telefono',String(50)),
    Column('contrasena',String(50)),
    Column('direccion',String(50)),
    Column('ciudad',String(50)),
    Column('provincia',String(50)),
    Column('codigo_postal',String(50)),
    Column('descuento',String(50)),
)
