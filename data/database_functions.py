import sqlite3
import json

def format_value(value):
    if(isinstance(value, str)):
        value = value.strip()
    if(value == "NULL"):
        value = None
    return value

def db2json(db_file_name, sql_string):
    conn = sqlite3.connect(db_file_name)
    cur = conn.cursor()
    cur.execute(sql_string)
    rows = cur.fetchall()
    columns = cur.description
    json_return = []
    for row in rows:
        jsonRow = {}
        columnIndex = 0
        for column in columns:
            jsonRow[column[0]] = format_value(row[columnIndex])
            columnIndex += 1
        json_return.append(jsonRow)
    return json_return

variables_file = open("values.js","w")
json_data = db2json("naep_data.db", "SELECT * FROM Variables")
variables_file.write(json.dumps(json_data))

jurisdictions_file = open("jurisdictions.js","w")
json_data = db2json("naep_data.db", "SELECT * FROM Jurisdictions WHERE Level = 1 OR Level = 2 or Level = 3")
jurisdictions_file.write(json.dumps(json_data))
