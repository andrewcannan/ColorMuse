from flask import Flask, request
from Pylette import extract_colors

app = Flask(__name__)


@app.route("/process_image", methods=['POST'])
def process_image():
    """
    Extracts colors using Pylette library, calls rgb method on each returned value, converts to hex value and returns that to the client
    """
    image = request.files['image']
    palette = extract_colors(image=image, palette_size=5, mode='MC', sort_mode='luminance')
    
    rgb_colors = [color.rgb for color in palette]
    hex_colors = [rgb_to_hex(*rgb) for rgb in rgb_colors]

    return {"colors": hex_colors}
    

def rgb_to_hex(r, g, b):
    """
    Converts rgb color to its hexidecimal value
    """
    return '#{:02x}{:02x}{:02x}'.format(r, g, b)


if __name__ == "__main__":
    app.run(debug=True)