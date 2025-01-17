from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

# Create your views here.


def education(request):
    return render(request, 'education/education.html')

def math(request):
    subjects = [
        {
            "title": 'Algebra',
            "intro": 'Algebra is a branch of mathematics dealing with symbols and the rules for manipulating those symbols. In elementary algebra, those symbols (today written as Latin and Greek letters) represent quantities without fixed values, known as variables. This is useful because it lets us write general formulas that work for a wide range of numbers. Algebra also includes real numbers, complex numbers, matrices, vectors, and much more.',
            "image": "https://images.squarespace-cdn.com/content/v1/5df299c65e4a5e604b11deb5/50f54ecc-c740-4341-a758-a4c4f9a8b890/antoine-dautry-05A-kdOH6Hw-unsplash.jpg",
        },
        {
            "title": 'Geometry',
            "intro": 'Geometry is a branch of mathematics that studies the sizes, shapes, positions angles and dimensions of things. Flat shapes like squares, circles, and triangles are a part of flat geometry and are called 2D shapes. These shapes have only 2 dimensions, the length and the width. Cubes, prisms, pyramids, spheres, cones, and cylinders are examples of 3D shapes. These shapes have 3 dimensions, the length, the width, and the height.',
            "image": "https://www.thoughtco.com/thmb/CxIHfXlNGJudzL69XMa5rxQePA4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/large-group-of-various-multi-colored-geometric-shapes-530022001-5a9ec575119fa80037446909.jpg",
        },
    ]
    return render(request, 'education/math.html', {'subjects': subjects})

def biology(request):
    subjects = [
        {
            "title": 'Muscle structure',
            "intro": 'Muscle tissue is a soft tissue that composes muscles in animal bodies, and gives rise to muscles\' ability to contract. This is opposed to other components or tissues in muscle such as tendons or perimysium. It is composed of cells called muscle fibers, which are able to contract. There are three types of muscle tissues: Visceral, Cardiac, and Skeletal.',
            "image": "https://media.post.rvohealth.io/wp-content/uploads/2020/07/muscular2-25.jpg",
        },
        {
            "title": 'Gene and inheritance',
            "intro": 'Genes are the basic physical and functional unit of heredity. Genes are made up of DNA. Some genes act as instructions to make molecules called proteins. However, many genes do not code for proteins. In humans, genes vary in size from a few hundred DNA bases to more than 2 million bases. The Human Genome Project has estimated that humans have between 20,000 and 25,000 genes.',
            "image": "https://media.wired.com/photos/6633de0a98970aea706a784e/191:100/w_1280,c_limit_The%20White%20House%20Is%20Cracking%20Down%20on%20Mail-Order%20DNA%20-%20May%206GettyImages-153525529.jpg",
        }
    ]
    return render(request, 'education/biology.html', {'subjects': subjects})

def computer_science(request):
    subjects = [
        {
            "title": 'Python',
            "intro": 'Python is an interpreted, high-level and general-purpose programming language. Python\'s design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.',
            "image": "https://www.qsarlab.com/wp-content/uploads/2023/07/Projekt-bez-nazwy-6.png"
        },
        {
            "title": 'Java',
            "intro": 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.',
            "image": "https://www.edureka.co/blog/wp-content/uploads/2018/01/2-2.png"
        }
    ]
    return render(request, 'education/computer-science.html', {'subjects': subjects})