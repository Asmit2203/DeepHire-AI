import torch

from ml.model_loader import (
    tokenizer,
    model,
    label_encoder
)

def classify_resume(text):

    inputs = tokenizer(
        text,
        return_tensors="pt",
        truncation=True,
        padding=True,
        max_length=256
    )

    with torch.no_grad():

        outputs = model(**inputs)

        prediction = torch.argmax(
            outputs.logits,
            dim=1
        )

    category = label_encoder.inverse_transform(
        prediction.numpy()
    )[0]

    return category