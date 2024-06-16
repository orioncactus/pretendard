import os
import re


def replace_layer_id():
    # 스크립트의 현재 디렉토리 가져오기
    script_dir = os.path.dirname(os.path.abspath(__file__))
    directory = os.path.join(script_dir, './temp')

    # 조건을 만족하는 layerId를 찾기 위한 정규 표현식
    layer_id_pattern = re.compile(
        r'layerId\s*=\s*"([^"]+)";\s*shapes\s*=\s*\(')
    exclude_layer_ids = ["B1F27B51-9973-4381-9301-4FE46FE1CA59",
                         "5C20EF92-B63D-42A8-8878-93C2863E0093"]
    replacement_id = "CD0E3B44-F66A-4791-B84C-A1128DC61275"

    for filename in os.listdir(directory):
        if filename.endswith(".glyph"):
            file_path = os.path.join(directory, filename)
            with open(file_path, 'r', encoding='utf-8') as file:
                content = file.read()

            # 조건에 부합하는 layerId를 찾기
            matches = layer_id_pattern.findall(content)
            specific_layer_id = None
            for match in matches:
                if match not in exclude_layer_ids:
                    # 해당 layerId가 name과 같은 줄에 없는지 확인
                    if not re.search(rf'layerId\s*=\s*"{re.escape(match)}";\s*name\s*=\s*"', content):
                        specific_layer_id = match
                        break

            if specific_layer_id:
                # 모든 특정된 layerId를 치환
                content = content.replace(specific_layer_id, replacement_id)

                with open(file_path, 'w', encoding='utf-8') as file:
                    file.write(content)


# 스크립트를 실행
replace_layer_id()
