import os

def get_path(file_name, folder_name):
    """
    Gets the absolute path to a file in a parent folder of the script.

    Args:
        file_name (str): The name of the file to locate.
        folder_name (str): The folder where the file is located.

    Returns:
        str: The absolute path to the file.
    """
    # Get the directory of the current script
    script_dir = os.path.dirname(os.path.abspath(__file__))

    # Navigate to the parent directory
    parent_dir = os.path.dirname(script_dir)

    # Construct the full path to the file
    file_path = os.path.join(parent_dir, folder_name, file_name)

    return file_path