from fastapi import APIRouter
from fastapi import UploadFile
from fastapi import File

import shutil
import os

from services.pdf_service import extract_text_from_pdf
from services.gemini_service import analyze_resume_with_gemini

router = APIRouter(
    prefix="/analyze",
    tags=["Resume Analysis"]
)

UPLOAD_DIR = "uploads"

os.makedirs(
    UPLOAD_DIR,
    exist_ok=True
)

@router.post("/resume")
async def analyze_resume(
    file: UploadFile = File(...)
):

    file_path = os.path.join(
        UPLOAD_DIR,
        file.filename
    )

    with open(
        file_path,
        "wb"
    ) as buffer:

        shutil.copyfileobj(
            file.file,
            buffer
        )

    resume_text = extract_text_from_pdf(
        file_path
    )

    analysis = analyze_resume_with_gemini(
        resume_text
    )

    return analysis