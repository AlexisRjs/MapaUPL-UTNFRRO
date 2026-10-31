import re
import build_all_floors_v2

with open('js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

def replace_floor_svg(text, floor_key, new_svg):
    target = f"'{floor_key}': {{"
    idx = text.find(target)
    if idx == -1:
        target = f'"{floor_key}": {{'
        idx = text.find(target)
    if idx == -1:
        raise ValueError(f"Could not find floor key {floor_key}")

    svg_start = text.find("svg: `", idx)
    if svg_start == -1:
        raise ValueError(f"Could not find svg: ` for floor {floor_key}")

    svg_end = text.find("`", svg_start + 6)
    if svg_end == -1:
        raise ValueError(f"Could not find closing ` for floor {floor_key}")

    updated = text[:svg_start + 6] + "\n" + new_svg + "\n        " + text[svg_end:]
    return updated

content = replace_floor_svg(content, '0', build_all_floors_v2.get_pb_svg())
content = replace_floor_svg(content, '1', build_all_floors_v2.get_piso1_svg())
content = replace_floor_svg(content, '2', build_all_floors_v2.get_piso2_svg())
content = replace_floor_svg(content, '3', build_all_floors_v2.get_piso3_svg())
content = replace_floor_svg(content, '4', build_all_floors_v2.get_piso4_svg())

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Applied updates to floors 0, 1, 2, 3, 4 successfully!")

