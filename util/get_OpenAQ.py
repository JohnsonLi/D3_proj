# IN ORDER FOR THIS TO WORK, YOU NEED TO INSTALL Google Cloud BigQuery (pip install google-cloud-bigquery)
# You also need google credentials (see: https://cloud.google.com/docs/authentication/getting-started)

from google.cloud import bigquery

client = bigquery.Client()
hn_dataset_ref = client.dataset('openaq', project='bigquery-public-data')
hn_dset = client.get_dataset(hn_dataset_ref)
hn_full = client.get_table(hn_dset.table('global_air_quality'))


schema_subset = [col for col in hn_full.schema]
#print(schema_subset)
results = [x for x in client.list_rows(hn_full, start_index=0, selected_fields=schema_subset)]
#print(results[0]['pollutant'])
f = open("openAQ.csv","w")
res = ""
for k in schema_subset:
    res += k.name + ","

res = res[:-1] + "\n"

for k in schema_subset:
    res += k.description.replace(",", "|") + ","

res = res[:-1] + "\n"

for r in results:
    if r["country"] == "US":
        for k in schema_subset:
            res += str(r[k.name]) + ","

        res += "\n"


f.write(res)
#print(res)
f.close()
