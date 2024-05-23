from flask import Flask, request
from Pylette import extract_colors

app = Flask(__name__)


@app.route("/process_image", methods=['POST'])
def process_image():
    """
    Extracts colors using Pylette library, picks 5 random colors from palette until there are no duplicate colors,
    performs conversion from rgba to rbg and then to its hex value, returns hex values to client.
    """
    image = request.files['image']
    palette = extract_colors(image=image, palette_size=10, mode='MC', sort_mode='luminance')

    while True:
        random_colors = palette.random_color(N=5, mode='uniform')

        if not has_duplicates(random_colors):
            rgb_colors = [color.rgb for color in random_colors]
            hex_colors = [rgb_to_hex(*rgb) for rgb in rgb_colors]
            return {"colors": hex_colors}
    

def has_duplicates(obj):
    """
    Convert tuples to sets and check for length difference as sets can't have duplicates
    """
    return len(obj) != len(set(obj))

def rgb_to_hex(r, g, b):
    """
    Converts rgb color to its hexidecimal value
    """
    return '#{:02x}{:02x}{:02x}'.format(r, g, b)


if __name__ == "__main__":
    app.run(debug=True)