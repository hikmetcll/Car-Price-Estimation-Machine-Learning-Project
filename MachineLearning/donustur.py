import tensorflow as tf
tf.compat.v1.enable_eager_execution()
#tf.compat.v1.disable_eager_execution()
from tensorflow.python.keras.models import load_model

import tensorflowjs as tfjs

model = load_model("model.h5");
tfjs.converters.save_keras_model(model, './json_model/')