import requests
import json
import uuid
import time
import logging
from config import APP_CONFIG

logging.basicConfig(
    format='%(asctime)s %(levelname)-8s %(message)s',
    level=logging.ERROR,
    datefmt='%Y-%m-%d %H:%M:%S',
    filemode='a',
    filename='app.log')

session = requests.Session()
start_time = 0
end_time = 0
events_count = 0

session.headers.update({
    'x-api-key': APP_CONFIG["API_KEY"],
})

def send_data(data):
    response = session.post(APP_CONFIG["API_HOST"] + "/obsrv/v1/data/" + APP_CONFIG["DATASET_ID"],
        json=data,
        timeout=30,
    )
    method_len = len(response.request.method)
    url_len = len(response.request.url)
    headers_len = len('\r\n'.join('{}{}'.format(k, v) for k, v in response.request.headers.items()))
    body_len = len(response.request.body if response.request.body else [])
    logging.debug(f'Request size {method_len + url_len + headers_len + body_len}')
    if response.raise_for_status():
        logging.error(response.json())
        pass

def push_batch(events):
    try:
        send_data({
            "data": {
                "id": str(uuid.uuid4()),
                "events": events
        }})
        events_count += len(events)
    except BaseException as e:
        logging.error(e)
        print("Error has occured, exiting...")
        end_time = time.time()
        print(f"The time taken for the program is :", {end_time - start_time}, "seconds")
        print(f"Total no. of events pushed - {events_count}")
        exit()

def batch_data(file_data):
    events = []
    for event in file_data:
        events.append(event)
        if len(events) == APP_CONFIG["EVENTS_PER_BATCH"]:
            push_batch(events)
    if len(events) > 0:
        push_batch(events)

def main():
    try:
        file_data = json.load(open(APP_CONFIG["FILE_PATH"], "r"))
        batch_data(file_data)
    except BaseException as e:
        logging.error(e)
        print("Unable to open file at provided path")
    end_time = time.time()
    print(f"The time taken for the program is :", {end_time - start_time}, "seconds")
    print(f"Total no. of events pushed - {events_count}")

if __name__ == "__main__":
    start_time = time.time()
    main()
