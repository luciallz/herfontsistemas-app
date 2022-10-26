from flask import Flask
from routes.contacts import contacts
from routes.productos import productos
app = Flask(__name__)
app.secret_key="Secret key"

app.register_blueprint(contacts)
app.register_blueprint(productos)
