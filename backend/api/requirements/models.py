import datetime as dt
from api.database import (Model, SurrogatePK, db,
                              reference_col, relationship)


class Requirement(Model, SurrogatePK):
    __tablename__ = 'requirement'

    # id is needed for primary join, it does work with SurrogatePK class
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    age = db.Column(db.Integer, nullable=False)
    bloodType = db.Column(db.String(2))
    rhFactor = db.Column(db.String(1))
    description = db.Column(db.Text)
    hospital = db.Column(db.Text)
    bloodBank = db.Column(db.Text)
    
    createdAt = db.Column(db.DateTime, nullable=False, default=dt.datetime.utcnow)
    updatedAt = db.Column(db.DateTime, nullable=False, default=dt.datetime.utcnow)
    
    # Add later:
    #photo = db.Column(db.)
    # maybe with https://sqlalchemy-imageattach.readthedocs.io/en/1.1.0/

