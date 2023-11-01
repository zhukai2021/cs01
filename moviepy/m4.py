import os
def mkdir_folder(file_path):
    """
    创建一个文件夹，如果不存在就创建；否则不做处理
    :param file_path:
    :return:
    """
    if os.path.exists(file_path):
        return

    os.mkdir(file_path)

# 新建临时文件夹和输出文件夹
mkdir_folder('path_temp')
mkdir_folder('path_output')