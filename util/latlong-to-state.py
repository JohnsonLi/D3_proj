#import urllib.request
import json
import ssl


context = ssl._create_unverified_context()

# pulls the data from openAQ dataset
def get_state():

    f = open("data/openAQ.csv", "r")
    lines = f.readlines()
    print(lines)
    sum = lines[0]
    lines = lines[1:]

    for line in lines:
        line = line.split(",")
        _lat = str(line[8])
        _long = str(line[9])
        #print(_lat, _long)
        url = "http://open.mapquestapi.com/geocoding/v1/reverse?key=TRZray6mAQGYacpvsM0Hz9pZjIgZ2Fyj&location={lat},{long}".format(lat = _lat, long = _long)
        cri = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'}) # SETS UP REQUEST

        stuff = urllib.request.urlopen(cri, context=context) # GETS STUFF
        js = stuff.read() # gets info from urlopen
        jason = json.loads(js) # loads into JSON
        # try:
        if jason["results"][0]['locations'][0]["adminArea3Type"] == "State":
            line[1] = jason["results"][0]['locations'][0]["adminArea3"]
            sum += ",".join(line)
        # except:
        #     print(jason["results"][0]['locations'][0]["adminArea3"])
        #     print(line[0])

    f.close()
    g = open("data/openAQ.csv", "w")
    g.write(sum)
    g.close()
    print("done")


    #
    # print(jason)
def abbrev_to_full():
    states = {
        'AK': 'Alaska',
        'AL': 'Alabama',
        'AR': 'Arkansas',
        'AS': 'American Samoa',
        'AZ': 'Arizona',
        'CA': 'California',
        'CO': 'Colorado',
        'CT': 'Connecticut',
        'DC': 'District of Columbia',
        'DE': 'Delaware',
        'FL': 'Florida',
        'GA': 'Georgia',
        'GU': 'Guam',
        'HI': 'Hawaii',
        'IA': 'Iowa',
        'ID': 'Idaho',
        'IL': 'Illinois',
        'IN': 'Indiana',
        'KS': 'Kansas',
        'KY': 'Kentucky',
        'LA': 'Louisiana',
        'MA': 'Massachusetts',
        'MD': 'Maryland',
        'ME': 'Maine',
        'MI': 'Michigan',
        'MN': 'Minnesota',
        'MO': 'Missouri',
        'MP': 'Northern Mariana Islands',
        'MS': 'Mississippi',
        'MT': 'Montana',
        'NA': 'National',
        'NC': 'North Carolina',
        'ND': 'North Dakota',
        'NE': 'Nebraska',
        'NH': 'New Hampshire',
        'NJ': 'New Jersey',
        'NM': 'New Mexico',
        'NV': 'Nevada',
        'NY': 'New York',
        'OH': 'Ohio',
        'OK': 'Oklahoma',
        'OR': 'Oregon',
        'PA': 'Pennsylvania',
        'Puerto Rico': 'Puerto Rico',
        'RI': 'Rhode Island',
        'SC': 'South Carolina',
        'SD': 'South Dakota',
        'TN': 'Tennessee',
        'TX': 'Texas',
        'UT': 'Utah',
        'VA': 'Virginia',
        'VI': 'Virgin Islands',
        'VT': 'Vermont',
        'WA': 'Washington',
        'WI': 'Wisconsin',
        'WV': 'West Virginia',
        'WY': 'Wyoming',
        'District of Columbia': 'Maryland'
    }
    f = open("data/openAQ.csv", "r")
    lines = f.readlines()
    res = lines[0]
    lines = lines[1:]

    for line in lines:
        line = line.split(",")
        if(line[1]) != "Sonora" and (line[1]) != "Chihuahua":
            line[1] = states[line[1]]

            res += ",".join(line)



    f.close()
    g = open("data/openAQ.csv", "w")
    g.write(res)
    g.close()
    print("done")

abbrev_to_full()
#get_state()
