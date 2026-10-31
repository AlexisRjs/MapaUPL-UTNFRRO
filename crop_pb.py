from PIL import Image

im = Image.open('C:/Users/alexi/.gemini/antigravity/brain/0557edc1-e8fd-49a9-b3d3-c4fdf8f58c8e/.user_uploaded/media_1793415931163_d7f7bcf2.jpg')
w, h = im.size

# Let's crop 4 vertical zones of the right side (from x = 0.45 * w to w)
# 1. Top (Decanato / RRHH / etc)
im.crop((int(w * 0.45), 0, w, int(h * 0.30))).save('pb_r1.jpg')
# 2. Middle-North (Recepción / Secretarías / FAGDUT / etc)
im.crop((int(w * 0.45), int(h * 0.25), w, int(h * 0.55))).save('pb_r2.jpg')
# 3. Middle-South (Entrada Principal / Escalera / etc)
im.crop((int(w * 0.45), int(h * 0.50), w, int(h * 0.75))).save('pb_r3.jpg')
# 4. Bottom (South facing Zeballos / etc)
im.crop((int(w * 0.45), int(h * 0.70), w, h)).save('pb_r4.jpg')

print("Cropped zones saved.")

