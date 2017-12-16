from gridfs import GridFS
from flask_pymongo import PyMongo

class Database(object):
    DATABASE = None
    FS = None

    def initialize(app):
        mongo = PyMongo(app)
        Database.DATABASE = mongo.db
        Database.FS = GridFS(mongo.db)

    @staticmethod
    def find_by_id(collection, _id):
        result = Database.DATABASE[collection].find({"fields": _id})
        result = [r for r in result]
        return result[0]

    @classmethod
    def get_all(cls, collection):
        data = Database.DATABASE[collection].find({})
        return [d for d in data]

    @staticmethod
    def insert_image(collection, img, content_type, filename, label):
        fields_id = Database.FS.put(img, content_type=content_type, filename=filename)
        Database.DATABASE[collection].insert({"filename": str(filename), "fields": fields_id, "label": label})
        return fields_id
    
    @staticmethod
    def update(collection, cursor_id, updates):
        Database.DATABASE[collection].update({"_id": cursor_id}, {"$set": updates})
         
