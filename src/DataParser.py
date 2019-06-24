import json, csv

"""
    Processes the data from a csv file and converts it into
    JSON and outputs to a file.
"""

try:
    fin = open('data/airline-safety.csv', 'r')
    fieldnames = fin.readline().strip().split(',')
    reader = csv.DictReader(fin, fieldnames=fieldnames)
    out = json.dumps([row for row in reader])
    fin.close()

    fout = open('data/airline-safety.json', 'w')
    fout.write(out)
    fout.close()
except FileNotFoundError:
    print("\tERROR: JSON file not found.")