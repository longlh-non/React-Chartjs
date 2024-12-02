import csv
import json
import os
from .utils import get_path

# File paths
csv_file = 'ds_salaries.csv'  # Replace with your CSV file path
json_file = 'data.json'  # Replace with your desired JSON output file path


def csv_to_json(csv_file_path, json_file_path):
    # Read the CSV file and convert it to a list of dictionaries

    data = []
    with open(csv_file_path, mode='r', encoding='utf-8') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            data.append(row)

    # Write the list of dictionaries to a JSON file
    with open(json_file_path, mode='w', encoding='utf-8') as json_file:
        json.dump(data, json_file, indent=4)

def read_json(csv_file, json_file):
    """
    Reads and returns data from a JSON file.

    Args:
        file_path (str): Path to the JSON file.

    Returns:
        dict or list: The data loaded from the JSON file.
        
    """
    parent_folder_path = get_path("", "data")  # Replace with your folder and file names

    csv_file_path = os.path.join(parent_folder_path, csv_file)
    json_file_path = os.path.join(parent_folder_path, json_file)

    csv_to_json(csv_file_path, json_file_path)

    with open(json_file_path, mode='r', encoding='utf-8') as file:
        data = json.load(file)
    return data


print(f"Converted {csv_file} to {json_file} successfully!")
