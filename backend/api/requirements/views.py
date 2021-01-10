# coding: utf-8

import datetime as dt

from flask import Blueprint, jsonify
from flask_apispec import marshal_with, use_kwargs
from flask_jwt_extended import current_user, jwt_required, jwt_optional
from marshmallow import fields

from api.exceptions import InvalidUsage
from api.user.models import User
from .models import Requirement
from .serializers import (requirement_schema, requirements_schema)

blueprint = Blueprint('requirements', __name__)


##########
# Requirements
##########

@blueprint.route('/api/requirements', methods=['GET'])
@jwt_optional
@marshal_with(requirements_schema)
def get_requirements(limit=20, offset=0):
    res = Requirement.query
    return res.offset(offset).limit(limit).all()

@blueprint.route('/api/requirements/<id>', methods=['GET'])
@jwt_optional
@marshal_with(requirement_schema)
def get_requirement_by_id(id):
    req = Requirement.query.filter_by(id=id).first()
    if not req:
        raise InvalidUsage.article_not_found()
    return req

@blueprint.route('/api/requirements', methods=['POST'])
@use_kwargs(requirement_schema)
@jwt_optional
@marshal_with(requirement_schema)
def create_requirement(name, age, **kwargs):
    requirement = Requirement(name=name, age=age)
    requirement.save()
    return requirement
