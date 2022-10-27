from flask import Flask
from routes.contacts import contacts
from routes.productos import productos
from routes.trabajadores import trabajadores
app = Flask(__name__)
app.secret_key="Secret key"

app.register_blueprint(contacts)
app.register_blueprint(productos)
app.register_blueprint(trabajadores)