import os
import shutil


def read_list(file_path):
    with open(file_path, 'r') as file:
        content = file.read().strip()
    return content.split(', ')


def find_and_copy_files(names, source_dir, target_dir):
    if not os.path.exists(target_dir):
        os.makedirs(target_dir)

    for name in names:
        # 대문자를 포함한 경우 뒤에 '_'를 붙임
        transformed_name = ''.join(
            [char + '_' if char.isupper() else char for char in name])
        # .glyph 확장자 추가
        transformed_name += '.glyph'

        # 정확히 일치하는 파일 검색
        if transformed_name in os.listdir(source_dir):
            src_file = os.path.join(source_dir, transformed_name)
            dest_file = os.path.join(target_dir, transformed_name)
            shutil.copy(src_file, dest_file)
            print(f"Copied {src_file} to {dest_file}")
        else:
            print(f"File {transformed_name} not found in {source_dir}")


def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    list_file = os.path.join(script_dir, 'glyph-target.txt')
    source_directory = os.path.join(
        script_dir, '../../temp/Pretendard-Base.glyphspackage/glyphs')
    target_directory = os.path.join(script_dir, './result')

    # Ensure the target directory exists
    if not os.path.exists(target_directory):
        os.makedirs(target_directory)

    names = read_list(list_file)
    find_and_copy_files(names, source_directory, target_directory)


if __name__ == "__main__":
    main()
