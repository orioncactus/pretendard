import os
import re


def modify_created_and_modified_values_in_directory(relative_directory, new_value):
    script_dir = os.path.dirname(os.path.abspath(__file__))
    folder_path = os.path.join(script_dir, relative_directory)

    for file_name in os.listdir(folder_path):
        if file_name.endswith('.ttx'):
            file_path = os.path.join(folder_path, file_name)
            with open(file_path, 'r') as file:
                lines = file.readlines()

            modified = False
            head_found = False
            for i, line in enumerate(lines):
                if '<head>' in line:
                    head_found = True
                if head_found and ('<created value="' in line or '<modified value="' in line):
                    lines[i] = re.sub(
                        r'<(created|modified) value="[^"]+"', f'<\\1 value="{new_value}"', line)
                    modified = True

            if modified:
                with open(file_path, 'w') as file:
                    file.writelines(lines)
                print(f"Date Updated: {file_name}")


modify_created_and_modified_values_in_directory(
    'temp', 'Sun Nov  5 15:00:00 2023')
