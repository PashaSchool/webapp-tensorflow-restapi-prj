from server.database.database import Database
import uuid

class Image(object):
    def __init__(self, filename, fields, label='', _id=None):
        self.filename = filename
        self.fields = fields
        self.label = label
        self._id = uuid.uuid4().hex if _id is None else _id
    
    @staticmethod
    def save_to_mongo(image, content_type, filename, label):
        return Database.insert_image('images', image, content_type, filename, label)
        
    @classmethod
    def find_image(cls, id):
        image = Database.find_by_id('images', id)
        return cls(**image)

    @classmethod
    def get_images(cls):
        images = Database.get_images('images')
        return [cls(**image) for image in images]
    
    def set_label(self, label):
        self.label = label
        Database.update('images', cursor_id=self._id, updates={"label": label})

    @staticmethod
    def get_by_label(label):
        batch_fields = Database.find_by('images', {"label": label})
        batch_images = []
        for field in batch_fields:
            fs_file = Database.FS.get(field._id)
            base64_data = codecs.encode(fs_file.read(), 'base64')
            image = base64_data.decode('utf-8')
            img_str = "data:image/png;base64," + image
            jsonImg = json.dumps(img_str)

            batch_images.append({"url":jsonImg, "label": label_file})
        
        return batch_images

    
