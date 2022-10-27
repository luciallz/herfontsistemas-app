from flask import Flask
from routes.usuarios import usuarios
from routes.productos import productos
from routes.trabajadores import trabajadores
app = Flask(__name__)
app.secret_key="Secret key"

app.register_blueprint(usuarios)
app.register_blueprint(productos)
app.register_blueprint(trabajadores)