from app.models.employee import EmployeeSchema
from app.db import db,ma


class Skills(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    porcentage = db.Column(db.Integer, nullable=False)

    # Relación uno a muchos
    employee_id = db.Column(db.Integer, db.ForeignKey("employee.id"))

    def __init__(self, name, porcentage, employee_id):
        self.name = name
        self.porcentage = porcentage
        self.employee_id = employee_id


class SkillsSchema(ma.Schema):
    class Meta:
        fields = ("id", "name", "porcentage")

    employee = ma.Nested(EmployeeSchema, exclude=("skills",))


skills_schema = SkillsSchema()
skills_schema = SkillsSchema(many=True)
