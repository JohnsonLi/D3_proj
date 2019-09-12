# Team Trash
#### - William Lu, Jerry Ye, Ivan Zhang, Johnson Li, Jerry Ye

#### Description of data sets
1. [Traffic Fatality](https://www.kaggle.com/usdot/nhtsa-traffic-fatalities): This source gives data on fatal traffic crashes that occur in the United States. To be considered in this data set, a crash must result in the death of a person. 
2. [OpenAQ](https://www.kaggle.com/open-aq/openaq): This source gives data on the air quality based on various locations globally. We will be using data associated with the United States. 
3. [Lung Cancer Rates](https://gis.cdc.gov/Cancer/USCS/DataViz.html): This source gives data on lung cancer rates in the United States by state. 

#### How to make this data come alive
- There will be a map of the US and using buttons, the user will be able to see the car an air pollution density.
- Clicking on specific state will bring up a modal with bar graphs displaying (traffic rates, air pollution rates, air pollution history, car fatalities, lung disease)
- Our visualization allows the user to explore the correlation between the amount of cars in a location to the amount of pollution in that location. Then, for each state, show the correlation between traffic rates, air pollution rates, air pollution history, (car fatalities), and lung disease. The data allows the user to question whether there is a truly a relationship between the data or if the data is independent of each other.
#### D3 feature utilization
- **Enter/Exit Selections**
  - There exists a form on top that will allow users to enter data per state
- **Transitions**
  - Transition when you click on a specific state to show car and air pollution density
  - [Example:](https://bl.ocks.org/mbostock/2206590) click-to-zoom via transform
  - [Example:](https://observablehq.com/@mbostock/u-s-airports-voronoi) This Voronoi diagram shows the region that is closest to each airport
- **Responsiveness/Interactivity**
  - We will have 2 Buttons to switch between car and pollution on the map of the US
  - [Example:](https://observablehq.com/@d3/bivariate-choropleth) Diabetes and obesity rates by county, 2013 estimates
  - [Example:](https://observablehq.com/@d3/bubble-map) Estimated population by county, 2016
#### Sketch
![Air Pollution](https://scontent-iad3-1.xx.fbcdn.net/v/t1.15752-9/55628887_2461785304048863_2311413684875821056_n.png?_nc_cat=100&_nc_ht=scontent-iad3-1.xx&oh=690bed6d395a4491f68d446d2520fed5&oe=5D03A056)
![Traffic](https://scontent-iad3-1.xx.fbcdn.net/v/t1.15752-9/55504352_622413418197546_1092187772233449472_n.png?_nc_cat=105&_nc_ht=scontent-iad3-1.xx&oh=ac6ebe1cf1cdc21208539020a35723f1&oe=5D1740D0)
#### LAUNCH CODES
First, clone this repository:
```
$ git clone https://github.com/WilliamLu0211/Trash.git
```
Activate your virtual environment. If you do not have one set up, you may create one in the current working directory, and activate it like so:
```
$ python3 -m venv dc
$ . dc/bin/activate
```

Next, change your directory to go into your local copy of the repository:
```
(dc)$ cd Trash
```
Now, install all of the requirements needed to run this project. This command simply installs jinja and Flask. Flask is the python framework used to allow for simpler software development. Jinja is used to connect front end HTML/CSS code to back-end Python Flask code.

```
(dc)$ pip install -r requirements.txt
```

Now, run the python file to start the Flask server:
```
(dc)$ python3 app.py
```


Finally, open your web browser and open `localhost:5000`.

To terminate your server instance, type <kbd> CTRL </kbd> + <kbd> C </kbd>.

To exit your virtual environment, run the command `$ deactivate`.

