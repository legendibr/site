from django.shortcuts import render, get_object_or_404, redirect
from .models import PageLookupModel
# from .utils import get_lesson_content

# Create your views here.

MATH_DATA = {
    "subjects": [
        {
            "title": "Algebra",
            "intro": "Algebra is a branch of mathematics dealing with symbols and the rules for manipulating those symbols. In elementary algebra, those symbols (today written as Latin and Greek letters) represent quantities without fixed values, known as variables. This is useful because it lets us write general formulas that work for a wide range of numbers. Algebra also includes real numbers, complex numbers, matrices, vectors, and much more.",
            "image_url": "education/images/algebra.jpg",
        },
        {
            "title": "Geometry",
            "intro": "Geometry is a branch of mathematics that studies the sizes, shapes, positions angles and dimensions of things. Flat shapes like squares, circles, and triangles are a part of flat geometry and are called 2D shapes. These shapes have only 2 dimensions, the length and the width. Cubes, prisms, pyramids, spheres, cones, and cylinders are examples of 3D shapes. These shapes have 3 dimensions, the length, the width, and the height.",
            "image_url": "education/images/geometry.jpg",
        },
    ]
}
BIOLOGY_DATA = {
    "subjects": [
        {
            "title": "Muscle structure",
            "intro": "Muscle tissue is a soft tissue that composes muscles in animal bodies, and gives rise to muscles' ability to contract. This is opposed to other components or tissues in muscle such as tendons or perimysium. It is composed of cells called muscle fibers, which are able to contract. There are three types of muscle tissues: Visceral, Cardiac, and Skeletal.",
            "image_url": "education/images/muscle-structure.jpg",
        },
        {
            "title": "Gene and inheritance",
            "intro": "Genes are the basic physical and functional unit of heredity. Genes are made up of DNA. Some genes act as instructions to make molecules called proteins. However, many genes do not code for proteins. In humans, genes vary in size from a few hundred DNA bases to more than 2 million bases. The Human Genome Project has estimated that humans have between 20,000 and 25,000 genes.",
            "image_url": "education/images/gene-and-inheritance.jpg",
        },
    ]
}

COMPUTER_SCIENCE_DATA = {
    "subjects": [
        {
            "title": "Python",
            "intro": "Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.",
            "image_url": "education/images/python.jpg",
        },
        {
            "title": "Java",
            "intro": "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.",
            "image_url": "education/images/java.jpg",
        },
    ]
}


def education(request):
    return render(request, "education/education.html")


def math(request):
    return render(request, "education/math.html", {"subjects": MATH_DATA["subjects"]})


def biology(request):
    return render(
        request, "education/biology.html", {"subjects": BIOLOGY_DATA["subjects"]}
    )


def computer_science(request):
    return render(
        request,
        "education/computer-science.html",
        {"subjects": COMPUTER_SCIENCE_DATA["subjects"]},
    )
    


def generic_md_page(request, page_path, lesson_id, slug):
    page = get_object_or_404(PageLookupModel, page_id=lesson_id, url_base_path=page_path)
    if slug != page.slug:
        return redirect("education:generic_md_page", page_path=page_path, lesson_id=lesson_id, slug=page.slug)
    return render(request, f"education/{page_path}/{lesson_id}.html")