from sqlalchemy import Table,Column,Integer,String,Float,MetaData

metaProductos=MetaData()
productos=Table(
    'productos',metaProductos,
    Column('id',Integer, primary_key=True),
    Column('nom_producto',String(100)),
    Column('descripcion',String(100)),
    Column('cantidad',String(100)),
    Column('imagen',String(50)),
    Column('precio',Integer),
)
