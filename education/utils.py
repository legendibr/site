import os
import markdown

def get_lesson_content(lesson_number):
    # Did not use Django's static file handling here
    file_path = f"education/contents/math/algebra/lesson-{lesson_number}.md"
    if not os.path.exists(file_path):
        return FileNotFoundError(f"Lesson content not found for lesson {lesson_number}")
    with open(file_path, "r", encoding="utf-8") as file:
        content = file.read()
    
    HTML_CONTENT = markdown.markdown(content)
    return {
        "content": HTML_CONTENT,
        "lesson_number": lesson_number,
    }