from transformers import AutoTokenizer
from transformers import AutoModelForSequenceClassification

import pickle

MODEL_PATH = "models/deephire_distilbert"

tokenizer = AutoTokenizer.from_pretrained(
    MODEL_PATH
)

model = AutoModelForSequenceClassification.from_pretrained(
    MODEL_PATH
)

with open(
    "models/label_encoder.pkl",
    "rb"
) as f:

    label_encoder = pickle.load(f)