import os
import json, csv

# function to make a list of dictionaries of the data 
# for easy access in js
def col_query(file_name, *args):
    data = []
    with open(file_name) as file:
        reader = csv.reader(file)
        col_titles = next(reader)

        for row in reader:
            to_add = {}
            for i in range(len(col_titles)):
                to_add[col_titles[i]] = row[i]
            data.append(to_add)

        return json.dumps(data)

print(col_query('USCS_OverviewMap.csv'))
