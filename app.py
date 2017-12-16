from server.models.image import Image
from server.database.database import Database
from flask import Flask, render_template, request, send_file, make_response, session
import codecs
import tensorflow as tf
import numpy as np
import os


DIR = 'server/cnn_saved_model/saved_model/'
LABELS_ = ["Airplane",
        "Automobile",
        "Bird",
        "Cat",
        "Deer",
        "Dog",
        "Frog",
        "Hourse",
        "Ship",
        "Truck"]

app = Flask(__name__, template_folder=".")

app.config['MONGO_DBNAME'] = 'gallery_instagram'
app.config['MONGO_URI'] = 'mongodb://pavlo_kuzina:silverok911@ds141406.mlab.com:41406/gallery_instagram'
app.secret_key = "secretverysecetkeyishere"

@app.before_first_request 
def initiliae_database():
    Database.initialize(app)


@app.route("/")
def index(images=[]):
    return render_template("index.html", images=images)

@app.route('/get_all_images')
def get_image():
    img = Database.get_all('images')
    image = Database.FS.get(img[0]["fields"])
    
    base64_data = codecs.encode(image.read(), 'base64')
    image = base64_data.decode('utf-8')

    return index(images=image)
    

@app.route("/upload", methods=["POST"])
def upload_image():
    img_file = request.files['img']


    content_type = img_file.content_type
    filename = img_file.filename

    Image.save_to_mongo(img_file, content_type, filename, label='' )

    pic = Database.get_all('images')
    cur_id = pic[0]['_id']
    picture = Database.FS.get(pic[0]["fields"])

    image = tf.image.decode_jpeg(picture.read(), channels=3)
    image = tf.image.resize_images(image,[ 32, 32])
    
    with tf.Session() as sess:
        sess.run(tf.global_variables_initializer())
        tf.get_default_graph().as_graph_def()

        image_value = sess.run([image])
        reshaped_image = np.reshape(image_value[0], [1, 32, 32, 3]).astype(np.float32)

        saver = tf.train.import_meta_graph(os.path.join(DIR,'model-ckpt-4900.meta'))
        saver.restore(sess, os.path.join(DIR,"model-ckpt-4900"))

        x = tf.get_collection('training_data_input')[0]
        y_true = tf.get_collection('training_data_outpuy')[0]
        y_predicted = tf.get_collection('prediction')[0]
        keep_prob =  tf.get_collection('keep_prob')[0]

        pred = sess.run(y_predicted, feed_dict={x: reshaped_image , keep_prob: 1.0})
        sess.close()
        label_idx = np.argmax(pred[0])
        label = LABELS_[label_idx]
    ### AFTER PREDICTION WE CAN FETCH THIS SINGLE IMAGE FOM IMAGES COLLECTION AND ADD LABEL
    
    return index(images=label)
    

if __name__ == '__main__':
    app.run(debug=True)


