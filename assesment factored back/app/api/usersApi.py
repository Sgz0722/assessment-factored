from flask import Blueprint, jsonify, request
from app.models import User, users_schema_without_employee, users_schema
import bcrypt

user_api = Blueprint("user", __name__)


@user_api.route("/user", methods=["POST"])
def validate_User():
    data = request.get_json()
    allusers = User.query.all()
    result = users_schema_without_employee.dump(allusers)
    for user in result:
        if user["username"] == data["username"] and bcrypt.checkpw(
            data["password"].encode(), user["password"].encode()
        ):
            return jsonify({"message": "User validated", "UserId": user["id"]})

    return jsonify({"error": "validate user"}), 401

@user_api.route("/user/<id>", methods=["GET"])
def get_user(id):
    user = User.query.get(id)
    if not user:
        return jsonify({"error": "User not found"}), 404
        
    result=users_schema.dump([user])
    return jsonify(result[0]), 200