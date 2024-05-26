import os

script_dir = os.path.dirname(os.path.abspath(__file__))
folder_path = os.path.join(script_dir, 'temp/')


def process_file(file_path, replacements):
    with open(file_path, 'r') as file:
        filedata = file.read()

    for search, replace in replacements.items():
        filedata = filedata.replace(search, replace)

    with open(file_path, 'w') as file:
        file.write(filedata)


file_suffixes = [
    'VF', 'JPVF', 'GOVVF'
]

file_name_list = [
    {
        '<namerecord nameID="25" platformID="3" platEncID="1" langID="0x409">\n      Pretendard': '<namerecord nameID="25" platformID="3" platEncID="1" langID="0x409">\n      PretendardVariable',
        'Pretendard-': 'PretendardVariable-',
        'Pretendard\n    ': 'Pretendard Variable\n    '
    },
    {
        'Pretendard JP': 'Pretendard JP Variable',
        'PretendardJP': 'PretendardJPVariable'
    },
    {
        'Pretendard GOV': 'Pretendard GOV Variable',
        'PretendardGOV': 'PretendardGOVVariable'
    }
]

for suffix, file_name in zip(file_suffixes, file_name_list):
    file_path = os.path.join(folder_path, f'Pretendard{suffix}.ttx')
    if os.path.exists(file_path):
        process_file(file_path, file_name)
        file_name_print = os.path.basename(file_path)
        print(f"Renamed: {file_name_print}")
    else:
        print(f"File does not exist: {os.path.basename(file_path)}")
