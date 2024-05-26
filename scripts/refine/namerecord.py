import os
import re


def modify_and_insert_namerecords(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    modified_lines = []
    insert_index = -1

    for index, line in enumerate(lines):
        if '<name>' in line:
            insert_index = index + 1
            modified_lines.append(line)
            continue

        if insert_index == index:
            # Copy and modify namerecord blocks
            temp_index = index
            while temp_index < len(lines) and '</name>' not in lines[temp_index]:
                if '<namerecord' in lines[temp_index]:
                    # Extract and check nameID
                    nameID_match = re.search(
                        r'nameID="(\d+)"', lines[temp_index])
                    if nameID_match and int(nameID_match.group(1)) >= 16:
                        while '</namerecord>' not in lines[temp_index]:
                            temp_index += 1
                        temp_index += 1
                        continue

                    # First condition: platformID="3" platEncID="1" langID="0x409"
                    if 'platformID="3" platEncID="1" langID="0x409"' in lines[temp_index]:
                        # Modify and insert
                        modified_lines.extend(modify_namerecord_block(
                            lines, temp_index, remove_old_langid=True))

                    # Second condition: platformID="3" platEncID="1" langID="0x412"
                    elif 'platformID="3" platEncID="1" langID="0x412"' in lines[temp_index]:
                        # Modify and insert
                        modified_lines.extend(modify_namerecord_block(
                            lines, temp_index, replace_str='platformID="1" platEncID="3" langID="0x17" unicode="True"', remove_old_langid=True))

                temp_index += 1

        modified_lines.append(line)

    with open(file_path, 'w', encoding='utf-8') as file:
        file.writelines(modified_lines)


def modify_namerecord_block(lines, start_index, replace_str='platformID="1" platEncID="0" langID="0x0" unicode="True"', remove_old_langid=False):
    modified_block = []
    end_index = start_index
    while '</namerecord>' not in lines[end_index]:
        end_index += 1

    # Modify start tag
    line_to_modify = lines[start_index]
    if remove_old_langid:
        # Remove existing langID attribute
        line_to_modify = re.sub(r'langID="0x[0-9A-Fa-f]+"', '', line_to_modify)
    modified_line = line_to_modify.replace(
        'platformID="3" platEncID="1"', replace_str)
    modified_block.append(modified_line)

    # Copy the rest of the namerecord block (content and closing tag)
    for i in range(start_index + 1, end_index + 1):
        modified_block.append(lines[i])

    return modified_block


def process_all_ttx_files(folder_path):
    for file_name in os.listdir(folder_path):
        if file_name.startswith('Pretendard') and file_name.endswith('.ttx'):
            file_path = os.path.join(folder_path, file_name)
            modify_and_insert_namerecords(file_path)
            print(f"Nametable Updated: {file_name}")


# Set script path and target file path
script_dir = os.path.dirname(os.path.abspath(__file__))
folder_path = os.path.join(script_dir, 'temp/')

process_all_ttx_files(folder_path)
