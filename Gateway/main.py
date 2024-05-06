import sys
from Adafruit_IO import MQTTClient
import time
import json
import random
from uart import *

AIO_FEED_IDs = ["nutnhan1", "nutnhan2", "quat1", 'quat2']
AIO_USERNAME = "Vaionic4711"
AIO_KEY = "aio_uJIo62aq7xkc2ymkIT1O6jSKO137"

def connected(client):
    print("Ket noi thanh cong ...")
    for topic in AIO_FEED_IDs:
        client.subscribe(topic)

def subscribe(client , userdata , mid , granted_qos):
    print("Subscribe thanh cong ...")

def disconnected(client):
    print("Ngat ket noi ...")
    sys.exit (1)

def message(client , feed_id , payload):
    print("Nhan du lieu: " + payload + ", feet id: " + feed_id)
    if feed_id == "nutnhan1":
        if payload == "0":
            writeData("T1")
        else:
            writeData("B1")
    if feed_id == "nutnhan2":
        if payload == "0":
            writeData("T2")
        else:
            writeData("B2") 
    if feed_id == "quat1":
        if payload == "0":
            writeData(0)
        else:
            if payload == "20":
                writeData(1)
            elif payload == "40":
                writeData(2)
            elif payload == "60":
                writeData(3)
            elif payload == "80":
                writeData(4)
            elif payload == "100":
                writeData(5)      
client = MQTTClient(AIO_USERNAME , AIO_KEY)
client.on_connect = connected
client.on_disconnect = disconnected
client.on_message = message
client.on_subscribe = subscribe
client.connect()
client.loop_background()
counter = 10
while True:
    counter = counter - 1
    if counter <= 0:
        counter = 10
        # print("Random data is publishing...")
        # temp = random.randint(10, 40)
        # client.publish("cambien1", temp)
        # humi = random.randint(0, 100)
        # client.publish("cambien2", humi)
        # light = random.randint(100, 500)
        # client.publish("cambien3", light)
    readSerial(client)
    time.sleep(1)
    

