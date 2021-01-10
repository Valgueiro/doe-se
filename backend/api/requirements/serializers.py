
from marshmallow import Schema, fields, post_dump

class RequirementSchema(Schema):
    id = fields.Int()
    name = fields.Str()
    age = fields.Str()
    bloodType = fields.Str()
    rhFactor = fields.Str()
    description = fields.Str()
    hospital = fields.Str()
    bloodBank = fields.Str()
    
    createdAt = fields.DateTime()
    updatedAt = fields.DateTime()

class RequirementSchemas(RequirementSchema):
    @post_dump(pass_many=True)
    def dump_requirements(self, data, many, **kwargs):
        return {'requirements': data, 'requirementsCount': len(data)}


requirement_schema = RequirementSchema()
requirements_schema = RequirementSchemas(many=True)
