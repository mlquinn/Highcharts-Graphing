import http.server
import socketserver

"""
    Runs a python server on the specified port.
"""

PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

try:
    print("Serving port at:", PORT)
    socketserver.TCPServer(('',PORT), Handler).serve_forever()
except: 
    print("\tERROR!")