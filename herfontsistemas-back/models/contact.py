from utils.db import db
from sqlalchemy import Table,Column,Integer,String,Float,MetaData

meta=MetaData()
contactos=Table(
    'contactos',meta,
    Column('id',Integer, primary_key=True),
    Column('fullname',String(100)),
    Column('email',String(100)),
    Column('phone',String(100)),
)
