import os

script_dir = os.path.dirname(os.path.abspath(__file__))
folder_path = os.path.join(script_dir, 'temp/')


def process_file(file_path, replacements, suffix):
    with open(file_path, 'r') as file:
        filedata = file.read()

    for search, replace in replacements.items():
        filedata = filedata.replace(search, replace)

    base_name = os.path.basename(file_path)
    new_file_name = base_name.replace('Pretendard', f'PretendardStd')
    new_file_path = os.path.join(os.path.dirname(file_path), new_file_name)

    with open(new_file_path, 'w') as file:
        file.write(filedata)
    print(f"Created: {new_file_name}")


file_suffixes = [
    '-', 'VF'
]

replacements = [
    {
        '<ulCodePageRange1 value="00100000 00001000 00000001 10011111"/>': '<ulCodePageRange1 value="00100000 00000000 00000001 10011111"/>',
        'Base glyphs from Inter by Rasmus Andersson; Hangeul glyphs from Noto Sans CJK(Source Han Sans) by Jang Soo-young and Kang Joo-yeon, Sandoll Communications; Kana glyphs from M PLUS 1p by Coji Morishita, UNDERFOREST DESIGN; Combined and redesigned to Pretendard by Kil Hyung-jin.': 'Base glyphs from Inter by Rasmus Andersson; Combined and redesigned to Pretendard by Kil Hyung-jin.',
        'Pretendard-': 'PretendardStd-',
        'Pretendard\n    ': 'Pretendard Std\n    ',
        '<namerecord nameID="4" platformID="3" platEncID="1" langID="0x409">\n      Pretendard': '<namerecord nameID="4" platformID="3" platEncID="1" langID="0x409">\n      Pretendard Std',
        '"Pretendard ': '"Pretendard Std ',
        '"Pretendard"': '"Pretendard Std"',
    },
    {
        'PretendardVariable': 'PretendardStdVariable',
        'Pretendard Variable': 'Pretendard Std Variable'
    }
]

for suffix in file_suffixes:
    file_names = [f for f in os.listdir(folder_path) if f.startswith(
        f'Pretendard{suffix}') and f.endswith('.ttx')]
    for file_name in file_names:
        full_path = os.path.join(folder_path, file_name)
        replacements_index = file_suffixes.index(suffix)
        process_file(full_path, replacements[replacements_index], suffix)
