import os
import fitz
import pandas as pd

DATASET_PATH = "dataset/data"

data = []

for category in os.listdir(DATASET_PATH):

    category_path = os.path.join(
        DATASET_PATH,
        category
    )

    if not os.path.isdir(category_path):
        continue

    print(f"Processing {category}")

    for filename in os.listdir(category_path):

        if not filename.endswith(".pdf"):
            continue

        pdf_path = os.path.join(
            category_path,
            filename
        )

        try:

            document = fitz.open(pdf_path)

            text = ""

            for page in document:
                text += page.get_text()

            document.close()

            if len(text.strip()) > 100:

                data.append({
                    "text": text,
                    "label": category
                })

        except Exception as e:

            print(
                f"Error processing {pdf_path}"
            )

            print(e)

df = pd.DataFrame(data)

print(df.head())

print(f"\nTotal Samples: {len(df)}")

df.to_csv(
    "processed_resume_dataset.csv",
    index=False
)

print(
    "\nSaved as processed_resume_dataset.csv"
)