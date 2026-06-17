import os
import json

from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel(
    "gemini-2.5-flash"
)

def analyze_resume_with_gemini(resume_text):

    prompt = f"""
You are an ATS and Career Analysis System.

Analyze the following resume.

Return ONLY valid JSON.

Provide maximum 5 roadmap steps.

Format:

{{
    "ats_score": 0,
    "strengths": [],
    "missing_skills": [],
    "recommended_roles": [],
    "roadmap": []
}}

Resume:

{resume_text}
"""

    response = model.generate_content(prompt)

    text = response.text

    text = text.replace("```json", "")
    text = text.replace("```", "")
    text = text.strip()

    return json.loads(text)