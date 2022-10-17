from flask import Flask
from routes.contacts import contacts
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import sessionmaker
from models.usuarios import usuarios
from sqlalchemy import create_engine
from models.productos import metaProductos
from models.usuarios import metaUsuarios
from models.trabajadores import metaTrabajadores


app = Flask(__name__)

#engine=create_engine("mysql://root:lucia@localhost/herfontsistemasdb",echo=True)

# metaProductos.create_all(engine)
# metaUsuarios.create_all(engine)
# metaTrabajadores.create_all(engine)

# SessionListar=sessionmaker(bind=engine)
# session=SessionListar()
# result=session.query(usuarios).all()
# for row in result:
#     print (row.nombre, row.correo)
app.register_blueprint(contacts)
