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
    '-', 'JP-', 'GOV-'
]

replacements = {
    'Â©': '\(c\)'
}

for suffix in file_suffixes:
    file_names = [f for f in os.listdir(folder_path) if f.startswith(
        f'Pretendard{suffix}') and f.endswith('.ttx')]
    for file_name in file_names:
        full_path = os.path.join(folder_path, file_name)
        process_file(full_path, replacements)
        print(f"Fixed: {file_name}")
