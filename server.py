import http.server
import socketserver

"""
    Runs a python server on the specified port using python 3.5.
"""

PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

try:
    server = socketserver.TCPServer(('',PORT), Handler)
    print("Serving on port:", PORT)
    print("Visit localhost:8000 to begin.")
    server.serve_forever()
except: 
    print("\tServer is terminating...")
finally:
    server.server_close()