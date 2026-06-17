from ml.bert_classifier import classify_resume

sample = """
Experienced software engineer with
Python, JavaScript, React,
Node.js and machine learning.
"""

print(
    classify_resume(sample)
)