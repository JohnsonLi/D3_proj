states = {'Mississippi': '28', 'Oklahoma': '40', 'Wyoming': '56', 'Minnesota': '27', 'Illinois': '17', 'Georgia': '13', 'Arkansas': '05', 'New Mexico': '35', 'Ohio': '39', 'Indiana': '18', 'Maryland': '24', 'Louisiana': '22', 'Idaho': '16', 'Arizona': '04', 'Iowa': '19', 'Michigan': '26', 'Kansas': '20', 'Utah': '49', 'Virginia': '51', 'Oregon': '41', 'Connecticut': '09', 'Montana': '30', 'California': '06', 'Massachusetts': '25', 'West Virginia': '54', 'South Carolina': '45', 'New Hampshire': '33', 'Vermont': '50', 'Delaware': '10', 'North Dakota': '38', 'Pennsylvania': '42', 'Florida': '12', 'Hawaii': '15', 'Kentucky': '21', 'Alaska': '02', 'Nebraska': '31', 'Missouri': '29', 'Wisconsin': '55', 'Alabama': '01', 'New York': '36', 'South Dakota': '46', 'Colorado': '08', 'New Jersey': '34', 'Washington': '53', 'North Carolina': '37', 'Tennessee': '47', 'Texas': '48', 'Nevada': '32', 'Maine': '23', 'Rhode Island': '44'}
# states = dict([(value, key) for key, value in _states.items()])

f = open("data/car_accidents/accident_2016.csv", "r")
lines = f.readlines()[2:]
d = dict()

for line in lines:
    try:
        line = line.split(",")
        try:
            state = states[line[1]]
        except KeyError:
            print(line[1])
        num_accidents = int(line[3])
        d[state] += num_accidents
    except KeyError:
        d[state] = num_accidents

#print(d)
total = 0
for k in d:
    total += d[k]
#print(total)
f.close()

g = open("data/USCS_OverviewMap.csv", "r")
lines = g.readlines()[1:]
d = dict()
for line in lines:

    line = line.split(",")
    try:
        state = states[line[0]]
    except KeyError:
        print(line[0])
    num_cancer = int(round(float(line[5])/float(line[6]) * 100000)) # PER THOUSAND
    d[state] = num_cancer


#print(d)


g.close()

h = open("data/openAQ.csv", "r")
lines = h.readlines()[1:]
d = dict()
for line in lines:

    line = line.split(",")
    try:
        state = states[line[1]]
    except KeyError:
        print(line[1])
    if line[6] != "ppm":
        num_pollution = float(line[4])
        try:
            d[state] = max(d[state], num_pollution)
        except KeyError:
            d[state] = num_pollution


print(d)


h.close()




