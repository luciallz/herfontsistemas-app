from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from models.productos import metaProductos
from models.usuarios import metaUsuarios
from models.trabajadores import metaTrabajadores
from sqlalchemy.orm import sessionmaker,scoped_session

db=SQLAlchemy()
engine=create_engine("mysql://root@localhost/herfontsistemasdb",echo=True)



# Session=scoped_session(sessionmaker(bind=engine))

Session=sessionmaker(bind=engine)

session=Session()

metaProductos.create_all(engine)
metaUsuarios.create_all(engine)
metaTrabajadores.create_all(engine)
