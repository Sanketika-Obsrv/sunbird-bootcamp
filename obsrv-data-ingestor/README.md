# Obsrv Data Ingestor

## Installation
```code
pip install -r requirements.txt
```
- Note - Python needs to be installed in the system as a prerequisite

## Usage
- Update the following properties in config.py file
```code
"API_KEY": "",
"DATASET_ID": "",
"FILE_PATH": ""
```

- `API_KEY` - Obsrv API Key for authorization
- `DATASET_ID` - The DATASET_ID to push the data into
- `FILE_PATH` - Location of the JSON file to push the data from
```code
Example FILE_PATH (Windows Systems) -
C:\\Users\\username\\sample-data.json

Example FILE_PATH (Linux Systems) -
/home/ubuntu/sample-data.json
```

- Running the script
```code
python app.py
```
