var mymap = L.map('map').setView([39.8, -95.49], 5);

// Limiter la carte au campus de l'UNIL:
mymap.setMaxBounds([[24.275, -130.01367], [60, -50]]);
mymap.setMinZoom(1);


var providers = addPoviders();
// // Définir les différentes couches de base:
// var mapboxStreets = L.tileLayer(
//   'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2thaXNlciIsImEiOiJaS2cxcmVzIn0.IVsFCwYP0dpDlCdpsAGEcQ', {
//     attribution: '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> &copy; <a href="http://www.openstreetmap.org">OpenStreetMap</a> contributors'
//   }
// );
// var esriImagery = L.tileLayer(
//   'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/t\ile/{z}/{y}/{x}', {
//     attribution: '&copy; <a href="http://www.esri.com">Esri</a>, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
//   }
// );

// Ajouter la couche de base par défaut à la carte.
//mapboxStreets.addTo(mymap);

// Créer les boutons pour changer la couche de base
// var baseLayers = {
//   "Streets": mapboxStreets,
//   "Satellite": esriImagery
// };
// var overlays = {};
// L.control.layers(baseLayers, overlays).addTo(mymap);

var layers = [];
for (var providerId in providers) {
    layers.push(providers[providerId]);
}
layers.push({
    layer: {
        onAdd: function() {},
        onRemove: function() {}
    },
    title: 'empty'
})
var ctrl = L.control.iconLayers(layers).addTo(mymap);



// Marqueurs
// specify popup options
var customOptions =
    {
    'maxWidth': '350',
    'maxHeight': '400',
    'className' : 'custom',
    }

var monumentIcon = L.icon({
      iconUrl: 'images/monument.png',
      iconSize: [26, 40], // size of the icon
      popupAnchor: [0,-33],
      iconAnchor:   [13, 39]
    });

var natureIcon = L.icon({
      iconUrl: 'images/nature.png',
      iconSize: [26, 40], // size of the icon
      popupAnchor: [0,-33],
      iconAnchor:   [13, 39]
   });

// create popup contents
var customPopup = "<b>Cape Canaveral Air Force Station</b><p>This base is the main launching ground for US rockets since 1949. The first U.S. Earth satellite, the first U.S. astronaut and the first manned spacecraft were all launched from this base, as well as many other American's firsts space exploration.</p><a href='https://en.wikipedia.org/wiki/Cape_Canaveral_Air_Force_Station' target='_blank'>More informations</a><img src=\"images/CCAFS3.jpg\"><br><img src=\"images/CCAFS2.jpg\"><img src='images/CCAFS.jpg'>";
  L.marker([28.39601, -80.61891], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Okefenokee Swamp Park</b><p>The Okefenokee Swamp is a 1,770sqkm westland between Georgia and Florida. This swamp is the home of many seabirds and is famous for its alligators.</p><a href='http://www.okeswamp.com/' target='_blank'>More informations</a><img src=\"images/OSP.jpg\"><img src=\"images/OSP2.jpg\"><img src=\"images/OSP3.jpg\">";
  L.marker([31.05778, -82.27254], {icon: natureIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Fort Sumter National Monument</b><p>Fort Sumter is a sea fort in Charleston notable for two battles during the American Civil War. The attack of Confederate artillery on April 12, 1861 was actually the declaration of war.</p><a href='https://en.wikipedia.org/wiki/Fort_Sumter#Fort_Sumter_National_Monument' target='_blank'>More informations</a><img src=\"images/FSNM.jpg\"><img src=\"images/FSNM2.jpg\">";
  L.marker([32.75997, -79.85743], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Lost World Caverns</b><p>The Lost World Caverns is an underground natural series of caverns registered as a National Natural Landmark. The walking tour is a perfect oportunity to experience and discover amazing karst topography. The wild tour offers a rougher tour through the remote sections of the cave.</p><a href='https://en.wikipedia.org/wiki/Lost_World_Caverns' target='_blank'>More informations</a><img src=\"images/LWC.jpg\"><img src=\"images/LWC2.jpg\"><img src=\"images/LWC3.jpg\">";
  L.marker([37.832552, -80.446879], {icon: natureIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Wright Brothers National Memorial</b><p>This memorial commemorates the first successful powered flights in a heavier-than-air machine by the Wright brothers in 1903. The memorial is placed at the top of the hill where the Wright brothers made their first flights.</p><a href='https://en.wikipedia.org/wiki/Wright_Brothers_National_Memorial' target='_blank'>More informations</a><img src=\"images/WBNM.jpg\"><img src=\"images/WBNM2.jpg\"><img src=\"images/WBNM3.jpg\">";
  L.marker([35.907897, -75.675695], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Mount Vernon</b><p>Mount Vernon was the plantation house of George Washington, first President of the United States and his wife. It is located about 15 miles south of Washington, D.C. and 8 miles south of Alexandria, Virginia along the banks of the Potomac River. The historic estate includes not only the Mount Vernon Mansion, but also a host of colonial era buildings, beautiful gardens and working distillery and gristmill. Mount Vernon was designated a National Historic Landmark in 1960 and is today listed on the National Register of Historic Places.</p><a href='https://en.wikipedia.org/wiki/Mount_Vernon' target='_blank'>More informations</a><img src='images/MV.jpg'><img src='images/MV2.jpg'><img src='images/MV3.jpg'>";
  L.marker([38.727265, -77.111894], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>The White House</b><p>The White House is the official residence and principal workplace of the President of the United States, located at 1600 Pennsylvania Avenue NW in Washington, D.C. It has been the residence of every U.S. president since John Adams in 1800. The modern-day White House complex includes the Executive Residence, West Wing, East Wing, the Eisenhower Executive Office Building—the former State Department, which now houses offices for the President's staff and the Vice President—and Blair House, a guest residence. The Executive Residence is made up of six stories—the Ground Floor, State Floor, Second Floor, and Third Floor, as well as a two-story basement. The property is a National Heritage Site owned by the National Park Service and is part of the President's Park. In 2007, it was ranked second on the American Institute of Architects list of America's Favorite Architecture.</p><a href='https://en.wikipedia.org/wiki/White_House' target='_blank'>More informations</a><img src='images/WH.jpg'><img src='images/WH2.jpg'><img src='images/WH3.jpg'>";
  L.marker([38.9002, -77.03654], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Colonial Annapolis Historic District</b><p>The Colonial Annapolis Historic District is a historic district in the City of Annapolis, the state capital of Maryland, that was created as a National Historic Landmark in 1965 and was geographically further expanded in 1984. Annapolis has served as the capital of both the Colony/Province and the State, along with being the county seat of Maryland's third county, Anne Arundel County, and is one of the first planned cities in colonial America.</p><a href='https://en.wikipedia.org/wiki/Colonial_Annapolis_Historic_District' target='_blank'>More informations</a><img src='images/CAHD.jpg'><img src='images/CAHD2.jpg'><img src='images/CAHD3.jpg'><img src='images/CAHD4.jpg'>";
  L.marker([38.978795, -76.490974], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>New Castle Historic District</b><p>The New Castle Historic District is an area approximately 4 by 5 blocks square in the center of town with about 500 historic buildings that date from c. 1700 to 1940. It is a site significant for its architecture from the 17th, 18th, and 19th centuries. It was declared a National Historic Landmark in 1967. Overlooking the Delaware River, Historic New Castle is the oldest continuously occupied town in the Delaware Valley and it remains one of the most important Colonial/Federal villages in America - second only to Williamsburg, Virginia in the number and authenticity of its historic structures.</p><a href='https://en.wikipedia.org/wiki/Cape_Canaveral_Air_Force_Station' target='_blank'>More informations</a><img src='images/NCHD.jpg'><img src='images/NCHD2.jpg'><img src='images/NCHD3.jpg'>";
  L.marker([39.805029, -75.458209], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Cape May Historic District</b><p>The Cape May Historic District is an area of 1.5sqkm with over 600 buildings in the resort town of Cape May. The city claims to be America's first seaside resort and has numerous buildings in the Late Victorian style, including the Eclectic, Stick, and Shingle styles, as well as the later Bungalow style. Cape May has one of the largest collections of late 19th century frame buildings left in the United States, that give it a homogeneous architectural character.</p><a href='https://en.wikipedia.org/wiki/Cape_May_Historic_District' target='_blank'>More informations</a><img src='images/CMHD.jpg'><img src='images/CMHD2.jpg'><img src='images/CMHD3.jpg'><img src='images/CMHD4.jpg'>";
  L.marker([38.931625, -74.924694], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Liberty Bell</b><p>The Liberty Bell is an iconic symbol of American independence, located in Philadelphia. The bell was commissioned from the London firm of Lester and Pack in 1752, and was cast with the lettering <i>Proclaim LIBERTY throughout all the land unto all the inhabitants thereof</i>, a Biblical reference from the Book of Leviticus (25:10).<br> The bell first cracked when rung after its arrival in Philadelphia, and was twice recast by local workmen John Pass and John Stow, whose last names appear on the bell. In its early years, the Liberty Bell was used to summon lawmakers to legislative sessions and to alert citizens to public meetings and proclamations. The bell acquired its distinctive large crack some time in the early 19th century—a widespread story claims it cracked while ringing after the death of Chief Justice John Marshall in 1835.</p><a href='https://en.wikipedia.org/wiki/Liberty_Bell' target='_blank'>More informations</a><img src='images/LB.jpg'><img src='images/LB2.jpg'><img src='images/LB3.jpg'>";
  L.marker([39.949668, -75.150583], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Statue of Liberty</b><p>The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor. The copper statue, designed by Frédéric Auguste Bartholdi, a French sculptor, was built by Gustave Eiffel and dedicated on October 28, 1886. It was a gift to the United States from the people of France. The statue is of a robed female figure representing Libertas, the Roman goddess, who bears a torch and a tabula ansata (a tablet evoking the law) upon which is inscribed the date of the American Declaration of Independence, July 4, 1776. A broken chain lies at her feet. The statue is an icon of freedom and of the United States, and was a welcoming sight to immigrants arriving from abroad.</p><a href='https://en.wikipedia.org/wiki/Statue_of_Liberty' target='_blank'>More informations</a><img src='images/SoL.jpg'><img src='images/SoL2.jpg'><img src='images/SoL3.jpg'>";
  L.marker([40.704806, -74.016379], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>The Mark Twain House & Museum</b><p>The Mark Twain House and Museum in Hartford, Connecticut was the home of Samuel Langhorne Clemens (Mark Twain) and his family from 1874 to 1891. Designed by Edward Tuckerman Potter, the house was built in the American High Gothic style. While living there, Clemens wrote his best-known works. In 2012 the Mark Twain House was named one of the Ten Best Historic Homes in the world in <i>The Ten Best of Everything</i>, a National Geographic Books publication.</p><a href='https://en.wikipedia.org/wiki/Mark_Twain_House' target='_blank'>More informations</a><img src='images/MTHM.jpg'><img src='images/MTHM2.jpg'><img src='images/MTHM3.jpg'>";
  L.marker([41.767493, -72.701478], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>The Breakers</b><p>The Breakers is a Vanderbilt mansion located on Ochre Point Avenue, Newport on the Atlantic Ocean. It is a National Historic Landmark, a contributing property to the Bellevue Avenue Historic District, and is owned and operated by the Preservation Society of Newport County. The 70-room mansion has a gross area of 125,339 square feet and 62,482 square feet of living area on five floors.</p><a href='https://en.wikipedia.org/wiki/The_Breakers' target='_blank'>More informations</a><img src='images/TB.jpg'><img src='images/TB2.jpg'><img src='images/TB3.jpg'><img src='images/TB4.jpg'>";
  L.marker([41.469825, -71.299627], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Uss Constitution</b><p>USS Constitution is a wooden-hulled, three-masted heavy frigate of the United States Navy, named by President George Washington after the Constitution of the United States of America. The ship is the world's oldest commissioned naval vessel afloat. <i>Constitution</i> was launched in 1797, one of six original frigates authorized for construction by the Naval Act of 1794 and the third constructed.<br>Her first duties with the newly formed U.S. Navy were to provide protection for American merchant shipping during the Quasi-War with France and to defeat the Barbary pirates in the First Barbary War. <i>Constitution</i> is most noted for her actions during the War of 1812 against the United Kingdom, when she captured numerous merchant ships and defeated five British warships.</p><a href='https://en.wikipedia.org/wiki/USS_Constitution' target='_blank'>More informations</a><img src='images/UC.jpg'><img src='images/UC2.jpg'><img src='images/UC3.jpg'>";
  L.marker([42.373864, -71.055849], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Acadia National Park</b><p>Acadia National Park is a national park located in the state of Maine. It reserves much of Mount Desert Island, and associated smaller islands, off the Atlantic coast. Initially created as the Sieur de Monts National Monument in 1916, the park was renamed Lafayette National Park in 1919, and was given its current name of Acadia in 1929. It is the oldest American national park east of the Mississippi River.<br>The park is home to many plants and animals, and the tallest mountain on the U.S. Atlantic coast. Today visitors come to Acadia to hike granite peaks, bike historic carriage roads, or relax and enjoy the scenery. In total, Acadia National Park consists of 19,851 ha.</p><a href='https://en.wikipedia.org/wiki/Acadia_National_Park' target='_blank'>More informations</a><img src='images/ANP.jpg'><img src='images/ANP2.jpg'><img src='images/ANP3.jpg'><img src='images/ANP4.jpg'>";
  L.marker([44.363942, -68.306476], {icon: natureIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Mount Washington</b><p>Mount Washington, called Agiocochook by some Native American tribes, is the highest peak in the Northeastern United States at 1,917 m and the most prominent mountain east of the Mississippi River. The mountain is notorious for its erratic weather. On the afternoon of April 12, 1934, the Mount Washington Observatory recorded a windspeed of 372 km/h at the summit, the world record for most of the 20th century, and still a record for measured wind speeds not involved with a tropical cyclone. The Mount Washington Hotel was built by an American who’d struck a fortune as a coal broker, this magnificent building opened in 1902 to welcome its first sojourners. Today it’s an updated resort that retains its historical charm.</p> <a href='https://en.wikipedia.org/wiki/Mount_Washington' target='_blank'>More informations</a><img src='images/MW.jpg'><img src='images/MW2.jpg'><img src='images/MW3.jpg'><img src='images/MW4.jpg'>";
  L.marker([44.258420, -71.441176], {icon: natureIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Shelburne Farms</b><p>Shelburne Farms is a nonprofit education center for sustainability, 570 ha working farm, and National Historic Landmark on the shores of Lake Champlain in Shelburne, Vermont. The property is nationally significant as a well-preserved example of a Gilded Age ornamental farm, developed in the late 19th century with architecture by Robert Henderson Robertson and landscaping by Frederick Law Olmsted. Shelburne Farms was incorporated as a nonprofit educational organization in 1972. The farm serves as an educational resource by practicing rural land use that is environmentally, economically and culturally sustainable. Visitors may enjoy the walking trails, children’s farmyard, inn, restaurant, property tours and special events.</p><a href='https://en.wikipedia.org/wiki/Shelburne_Farms' target='_blanl'>More informations</a><img src='images/SF.jpg'><img src='images/SF2.jpg'>";
  L.marker([44.395637, -73.247052], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Fox Theater</b><p>The Fox Theatre is a performing arts center located at 2211 Woodward Avenue in Downtown Detroit, Michigan, near the Grand Circus Park Historic District. Opened in 1928 as a flagship movie palace in the Fox Theatres chain, it was listed on the National Register of Historic Places in 1985 and was designated a National Historic Landmark in 1989. The area surrounding the Fox is nicknamed Foxtown. The city's major performance centers and theatres emanate from the Fox Theatre and Grand Circus Park Historic District and continue along Woodward Avenue toward the Fisher Theatre in the city's New Center.<br>The Fox has 5,048 seats (5,174 seats if removable seats placed in the raised orchestra pit are included). It is the largest surviving movie palace of the 1920s and the largest of the original Fox Theatres.</p><a href='https://en.wikipedia.org/wiki/Fox_Theatre' target='_blank'>More informations</a><img src='images/FT.jpg'><img src='images/FT2.jpg'><img src='images/FT3.jpg'><img src='images/FT4.jpg'>";
  L.marker([42.387402, -83.084841], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Spring Grove Cemetery</b><p>Spring Grove Cemetery and Arboretum is a nonprofit garden cemetery and arboretum located at 4521 Spring Grove Avenue, Cincinnati, Ohio. It is the second largest cemetery in the United States and is recognized as a US National Historic Landmark.</p><a href='https://en.wikipedia.org/wiki/Spring_Grove_Cemetery' target='_blank'>More informations</a><img src='images/SGC.jpg'><img src='images/SGC2.jpg'><img src='images/SGC3.jpg'><img src='images/SGC4.jpg'><img src='images/SGC5.jpg'><img src='images/SGC6.jpg'>";
  L.marker([39.159969, -84.530887], {icon: natureIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Mammoth Cave National park</b><p>Mammoth Cave National Park is a U.S. national park in central Kentucky, encompassing portions of Mammoth Cave, the longest cave system known in the world. The official name of the system is the Mammoth-Flint Ridge Cave System for the ridge under which the cave has formed. The park was established as a national park on July 1, 1941. It became a World Heritage Site on October 27, 1981, and an international Biosphere Reserve on September 26, 1990.<br>With 652 km of surveyed passageways Mammoth Cave is by far the world's longest known cave system, being over twice as long as the second-longest cave system, Mexico's Sac Actun underwater cave.</p><a href='https://en.wikipedia.org/wiki/Mammoth_Cave_National_Park' target='_blank'>More informations</a><img src='images/MCNP.jpg'><img src='images/MCNP2.jpg'><img src='images/MCNP3.jpg'><img src='images/MCNP4.jpg'>";
  L.marker([37.187472, -86.099478], {icon: natureIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>West Baden Springs</b><p>The West Baden Springs Hotel, part of the French Lick Resort Casino, is a national historic landmark hotel in West Baden Springs. It is known for the 61 m dome covering its atrium. Prior to the completion of the Coliseum in Charlotte, North Carolina, in 1955, the hotel had the largest free-spanning dome in the United States. From 1902 to 1913 it had the largest in the world. Listed on the National Register of Historic Places in 1974, the hotel became a National Historic Landmark in 1987. It is a National Historic Civil Engineering Landmark and one of the hotels in the National Trust for Historic Preservation's Historic Hotels of America program.</p><a href='https://en.wikipedia.org/wiki/West_Baden_Springs_Hotel' target='_blank'>More informations</a><img src='images/WBS.jpg'><img src='images/WBS2.jpg'><img src='images/WBS3.jpg'>";
  L.marker([38.567139, -86.613857], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Abraham Lincoln's Home</b><p>Lincoln Home National Historic Site preserves the Springfield, Illinois home and a historic district where Abraham Lincoln lived from 1844 to 1861, before becoming the 16th President of the United States. The presidential memorial includes the four blocks surrounding the home and a visitor center.</p><a href='https://en.wikipedia.org/wiki/Lincoln_Home_National_Historic_Site' target='_blank'>More informations</a><img src='images/ALH.jpg'>";
  L.marker([39.797458, -89.646494], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Gateway Arch</b><p>The Gateway Arch is a 192 m monument in St. Louis. Clad in stainless steel and built in the form of an inverted, weighted catenary arch, it is the world's tallest arch, the tallest man-made monument in the Western Hemisphere, and Missouri's tallest accessible building. Built as a monument to the westward expansion of the United States, it is the centerpiece of the Jefferson National Expansion Memorial and has become an internationally famous symbol of St. Louis.</p><a href='https://en.wikipedia.org/wiki/Gateway_Arch' target='_blank'>More informations</a><img src='images/GA.jpg'><img src='images/GA2.jpg'><img src='images/GA3.jpg'>";
  L.marker([38.624348, -90.183991], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>C.W. Parker Carousel Museum</b><p>The C.W. Parker Carousel Museum, also known as the Leavenworth Carousel Museum, is located in Leavenworth, Kansas and is one of several museums sponsored by the Leavenworth Historical Museum Association. Opened in 2005, the building houses carousels that are historically registered, as well as a C.W. Parker cylinder piano, an Artizan A-X-1 band organ, and a Wurlitzer 153 Band Organ. It also has several reproduced or repaired carousel horses. Charles Wallace Parker (C. W. Parker) manufactured the first Carry-Us-All amusement ride in 1898.</p><a href='https://en.wikipedia.org/wiki/C.W._Parker_Carousel_Museum' target='_blank'>More informations</a><img src='images/PCM.jpg'><img src='images/PCM2.jpg'><img src='images/PCM3.jpg'>";
  L.marker([39.310657, -94.914340], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Terrace Hill</b><p>Terrace Hill, also known as Hubbell Mansion, Benjamin F. Allen House, and Iowa Governor's Mansion, is the official residence of the Governor of Iowa. Located at 2300 Grand Avenue in Des Moines, Iowa, it is an example of Second Empire architecture. The home measures 1,600 sqm. It sits on a hill overlooking downtown Des Moines, and has a 27 m tower that offers a commanding view of the city. The house was designated a National Historic Landmark in 2003.<br>Terrace Hill is located at 2300 Grand Avenue. Most visitors stop first at the Carriage House, which is located near the house. Nowadays the building is used as a reception area for most visitors who arrive to tour the home. It also contains permanent and unique changing exhibits - such as a permanent display on the previous owners of the house, the Hubbell family.</p><a href='https://en.wikipedia.org/wiki/Terrace_Hill' target='_blank'>More informations</a><img src='images/TH.jpg'><img src='images/TH2.jpg'><img src='images/TH3.jpg'><img src='images/TH4.jpg'>";
  L.marker([41.584418, -93.649208], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);

var customPopup = "<b>Taliesin</b><p>Taliesin, sometimes known as Taliesin East or Taliesin Spring Green after 1937, was the home and estate of American architect Frank Lloyd Wright. The design of the original building was consistent with the design principles of the Prairie School, emulating the flatness of the plains and the natural limestone outcroppings of Wisconsin's Driftless Area. The structure (which included an agricultural and studio wing) was completed in 1911. The property was designated a National Historic Landmark in 1976 and is being considered as part of a UNESCO World Heritage Site.</p><a href='https://en.wikipedia.org/wiki/Taliesin' target='_blank'>More informations</a><img src='images/T.jpg'><img src='images/T2.jpg'><img src='images/T3.jpg'><img src='images/T4.jpg'>";
  L.marker([43.151161, -90.093426], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Fort Snelling</b><p>Fort Snelling, originally known as Fort Saint Anthony, was a military fortification located at the confluence of Minnesota and Mississippi Rivers in Hennepin County, Minnesota. The fort is a National Historic Landmark and has been named a national treasure by the National Trust for Historic Preservation. Built in the early 1820s, Historic Fort Snelling is a great place to learn about military history from before the Civil War through World War II, fur trade history, slavery in Minnesota, the U.S.-Dakota War of 1862 and much more. Its location — at the junction of the Minnesota and Mississippi Rivers — has been significant for centuries to many American Indian communities.</p><a href='https://en.wikipedia.org/wiki/Fort_Snelling' target='_blank'>More informations</a><img src='images/FS.jpg'><img src='images/FS2.jpg'><img src='images/FS3.jpg'><img src='images/FS4.jpg'>";
  L.marker([44.892904, -93.183699], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Ashfall Fossil Beds</b><p>The Ashfall Fossil Beds of Antelope County in northeastern Nebraska are rare fossil site types called lagerstätten that, due to extraordinary local conditions, capture a moment in time ecological snapshot in a range of well-preserved fossilized organisms. Ash from a Yellowstone hotspot eruption 10-12 million years ago created these fossilized bone beds. The Ashfall Fossil Beds are especially famous for fossils of mammals from the middle Miocene geologic epoch.<br>The site is now protected as Ashfall Fossil Beds State Historical Park, which includes a visitor center with interpretive displays and working fossil preparation laboratory, and a building over an ongoing excavation site featuring fossil <i>Teleoceras</i> (native hippo-like ancestral rhinoceros) and ancestral horses.</p><a href='https://en.wikipedia.org/wiki/Ashfall_Fossil_Beds' target='_blank'>More informations</a><img src='images/AFB.jpg'><img src='images/AFB2.jpg'><img src='images/AFB3.jpg'><img src='images/AFB4.jpg'><img src='images/AFB5.jpg'>";
  L.marker([42.425231, -98.158882], {icon: natureIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Mount Rushmore</b><p>Mount Rushmore National Memorial is a sculpture carved into the granite face of Mount Rushmore, a granite batholith formation in the Black Hills in Keystone, South Dakota. Sculpted by Gutzon Borglum and his son, Lincoln Borglum, Mount Rushmore features 18 m sculptures of the heads of four United States presidents: George Washington (1732–1799), Thomas Jefferson (1743–1826), Theodore Roosevelt (1858–1919), and Abraham Lincoln (1809–1865).<br>The entire memorial covers 5.17 sqkm and is 1,745 m above sea level.Mount Rushmore has become an iconic symbol of the United States, and has appeared in works of fiction, and has been discussed or depicted in other popular works. It attracts over two million people annually.</p><a href='https://en.wikipedia.org/wiki/Mount_Rushmore' target='_blank'>More informations</a><img src='images/MR.jpg'>";
  L.marker([43.877123, -103.456116], {icon: natureIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Fort Union Trading Post</b><p>Fort Union Trading Post National Historic Site is the site of a partially reconstructed trading post on the Missouri River and the North Dakota/Montana border, twenty-five miles from Williston, North Dakota. It is one of the earliest declared National Historic Landmarks in the United States. The fort, possibly first known as Fort Henry or Fort Floyd, was built in 1828 or 1829 by the Upper Missouri Outfit managed by Kenneth McKenzie and capitalized by John Jacob Astor's American Fur Company. Fort Union was the most important fur trading post on the upper Missouri until 1867. It was instrumental in developing the fur trade in Montana.<br>The site was declared a National Historic Landmark in 1961 and was named Fort Union Trading Post by the National Park Service to differentiate it from Fort Union National Monument, a historic frontier Army post in New Mexico.</p><a href='https://en.wikipedia.org/wiki/Fort_Union_Trading_Post_National_Historic_Site' target='_blank'>More informations</a><img src='images/FUTP.jpg'><img src='images/FUTP2.jpg'><img src='images/FUTP3.jpg'><img src='images/FUTP4.jpg'>";
  L.marker([47.999229, -104.042267], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Glacier National Park</b><p>Glacier National Park is a national park located in Montana, on the Canada–United States border with the Canadian provinces of Alberta and British Columbia. The park encompasses over 4,000 sqkm and includes parts of two mountain ranges (sub-ranges of the Rocky Mountains), over 130 named lakes, more than 1,000 different species of plants, and hundreds of species of animals. This vast pristine ecosystem is the centerpiece of what has been referred to as the <i>Crown of the Continent Ecosystem</i>, a region of protected land encompassing 41,000 sqkm.<br>The mountains of Glacier National Park began forming 170 million years ago when ancient rocks were forced eastward up and over much younger rock strata. Known as the Lewis Overthrust, these sedimentary rocks are considered to have some of the finest fossilized examples of extremely early life found anywhere on Earth. The current shapes of the Lewis and Livingston mountain ranges and positioning and size of the lakes show the telltale evidence of massive glacial action, which carved U-shaped valleys and left behind moraines which impounded water, creating lakes. Of the estimated 150 glaciers which existed in the park in the mid-19th century, only 25 active glaciers remained by 2010. Scientists studying the glaciers in the park have estimated that all the glaciers may disappear by 2030 if the current climate patterns persist.<br>Glacier National Park has almost all its original native plant and animal species. Large mammals such as the Grizzly bears, moose, and mountain goats, as well as rare or endangered species like the wolverines and Canadian lynxes, inhabit this park. Hundreds of species of birds, more than a dozen fish species, and a few reptile and amphibian species have been documented. The park has numerous ecosystems ranging from prairie to tundra. Notably, the easternmost forests of western redcedar and hemlock grow in the southwest portion of the park.</p><a href='https://en.wikipedia.org/wiki/Glacier_National_Park' target='_blank'>More informations</a><img src='images/GNP.jpg'><img src='images/GNP2.jpg'><img src='images/GNP3.jpg'><img src='images/GNP4.jpg'><img src='images/GNP5.jpg'><img src='images/GNP6.jpg'><img src='images/GNP7.jpg'><img src='images/GNP8.jpg'><img src='images/GNP9.jpg'>";
  L.marker([48.521793, -113.988770], {icon: natureIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Hanford Site</b><p>This site is home to so much American history. Hanford Site was the first full-scale plutonium production reactor in the world, but now lies essentially decommissioned and whispering of days from long ago. Established in 1943 as part of the Manhattan Project in Hanford, south-central Washington, the site was home to the B Reactor, the first full-scale plutonium production reactor in the world. Plutonium manufactured at the site was used in the first nuclear bomb, tested at the Trinity site, and in Fat Man, the bomb detonated over Nagasaki, Japan.<br>During the Cold War, the project expanded to include nine nuclear reactors and five large plutonium processing complexes, which produced plutonium for most of the more than 60,000 weapons in the U.S. nuclear arsenal. Hanford is currently the most contaminated nuclear site in the United States and is the focus of the nation's largest environmental cleanup. On November 10, 2015, it was designated as part of the Manhattan Project National Historical Park alongside other sites in Oak Ridge and Los Alamos.</p><a href='https://en.wikipedia.org/wiki/Hanford_Site' target='_blank'>More informations</a><img src='images/HS.jpg'><img src='images/HS2.jpg'>";
  L.marker([46.377084, -119.283667], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Columbia River Highway</b><p>The Historic Columbia River Highway is an approximately 121 km scenic highway in Oregon between Troutdale and The Dalles, built through the Columbia River Gorge between 1913 and 1922. As the first planned scenic roadway in the United States, it has been recognized in numerous ways, including a listing on the National Register of Historic Places as a National Historic Landmark, designation as a National Historic Civil Engineering Landmark by the American Society of Civil Engineers, and considered a <i>destination unto itself</i> as an All-American Road by the U.S. Secretary of Transportation.</p><a href='https://en.wikipedia.org/wiki/Historic_Columbia_River_Highway' target='_blank'>More informations</a><img src='images/CRH.jpg'><img src='images/CRH2.jpg'><img src='images/CRH3.jpg'><img src='images/CRH4.jpg'>";
  L.marker([45.711323, -121.520264], {icon: natureIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>San Francisco Cable Cars</b><p></p>";
  L.marker([37.794691, -122.411401], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>San Andreas Fault</b><p></p>";
  L.marker([35.136416, -119.678746], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Hoover Dam</b><p></p>";
  L.marker([36.016067, -114.737728], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Grand Canyon</b><p></p>";
  L.marker([36.052362, -112.105463], {icon: natureIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Bryce Canyon National Park</b><p></p>";
  L.marker([37.673963, -112.156427], {icon: natureIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Craters of the Moon</b><p></p>";
  L.marker([43.636580, -113.300129], {icon: natureIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Yellowstone National Park</b><p></p>";
  L.marker([44.414884, -110.578597], {icon: natureIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Pike Peak</b><p></p>";
  L.marker([38.839818, -105.044747], {icon: natureIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Carlsbad Caverns National Park</b><p></p>";
  L.marker([32.175958, -104.376351], {icon: natureIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>The Alamo</b><p></p>";
  L.marker([29.42578, -98.486623], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>The Platt Historic District</b><p></p>";
  L.marker([34.507164, -96.969878], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Toltec Mounds</b><p></p>";
  L.marker([34.644025, -92.060779], {icon: natureIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Elvis Presley's Graceland</b><p></p>";
  L.marker([35.047884, -90.025137], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>Vicksburg National Military Park</b><p></p>";
  L.marker([32.354716, -90.843509], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>French Quarter</b><p></p>";
  L.marker([29.957812, -90.063484], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);
var customPopup = "<b>USS Alabama</b><p></p>";
  L.marker([30.683356, -88.014472], {icon: monumentIcon}).bindPopup(customPopup,customOptions).addTo(mymap);

//Fly-to//
document.getElementById("FL").addEventListener('click', function() {
  mymap.flyTo([28.39601, -80.61891], 8);
});
document.getElementById("GA").addEventListener('click', function() {
  mymap.flyTo([31.05778, -82.27254], 8);
});
document.getElementById("SC").addEventListener('click', function() {
  mymap.flyTo([32.75997, -79.85743], 8);
});
document.getElementById("WV").addEventListener('click', function() {
  mymap.flyTo([37.832552, -80.446879], 8);
});
document.getElementById("NC").addEventListener('click', function() {
  mymap.flyTo([35.907897, -75.675695], 8);
});
document.getElementById("WA").addEventListener('click', function() {
  mymap.flyTo([38.727265, -77.111894], 8);
});document.getElementById("WADC").addEventListener('click', function() {
  mymap.flyTo([38.9002, -77.03654], 8);
});
document.getElementById("MD").addEventListener('click', function() {
  mymap.flyTo([38.978795, -76.490974], 8);
});
document.getElementById("DE").addEventListener('click', function() {
  mymap.flyTo([39.805029, -75.458209], 8);

});document.getElementById("NJ").addEventListener('click', function() {
  mymap.flyTo([39.805029, -75.458209], 8);
});
document.getElementById("PA").addEventListener('click', function() {
  mymap.flyTo([39.949668, -75.150583], 8);
});
document.getElementById("NY").addEventListener('click', function() {
  mymap.flyTo([40.704806, -74.016379], 8);
});
document.getElementById("CT").addEventListener('click', function() {
  mymap.flyTo([41.767493, -72.701478], 8);
});
document.getElementById("RI").addEventListener('click', function() {
  mymap.flyTo([41.469825, -71.299627], 8);
});
document.getElementById("MA").addEventListener('click', function() {
  mymap.flyTo([42.373864, -71.055849], 8);
});
document.getElementById("ME").addEventListener('click', function() {
  mymap.flyTo([44.363942, -68.306476], 8);
});
document.getElementById("NH").addEventListener('click', function() {
  mymap.flyTo([44.258420, -71.441176], 8);
});
document.getElementById("VT").addEventListener('click', function() {
  mymap.flyTo([44.395637, -73.247052], 8);
});
document.getElementById("MI").addEventListener('click', function() {
  mymap.flyTo([42.387402, -83.084841], 8);
});
document.getElementById("OH").addEventListener('click', function() {
  mymap.flyTo([39.159969, -84.530887], 8);
});
document.getElementById("KY").addEventListener('click', function() {
  mymap.flyTo([37.187472, -86.099478], 8);
});
document.getElementById("IN").addEventListener('click', function() {
  mymap.flyTo([38.567139, -86.613857], 8);
});
document.getElementById("IL").addEventListener('click', function() {
  mymap.flyTo([39.797458, -89.646494], 8);
});
document.getElementById("MO").addEventListener('click', function() {
  mymap.flyTo([38.624348, -90.183991], 8);
});
document.getElementById("KS").addEventListener('click', function() {
  mymap.flyTo([39.310657, -94.914340], 8);
});
document.getElementById("IA").addEventListener('click', function() {
  mymap.flyTo([41.584418, -93.649208], 8);
});
document.getElementById("WI").addEventListener('click', function() {
  mymap.flyTo([43.151161, -90.093426], 8);
});
document.getElementById("MN").addEventListener('click', function() {
  mymap.flyTo([44.892904, -93.183699], 8);
});
document.getElementById("NE").addEventListener('click', function() {
  mymap.flyTo([42.425231, -98.158882], 8);
});
document.getElementById("SD").addEventListener('click', function() {
  mymap.flyTo([43.877123, -103.456116], 8);
});
document.getElementById("ND").addEventListener('click', function() {
  mymap.flyTo([47.999229, -104.042267], 8);
});
document.getElementById("MT").addEventListener('click', function() {
  mymap.flyTo([48.521793, -113.988770], 8);
});
document.getElementById("VA").addEventListener('click', function() {
  mymap.flyTo([38.727265, -77.111894], 8);
});
document.getElementById("WA").addEventListener('click', function() {
  mymap.flyTo([46.377084, -119.283667], 8);
});
document.getElementById("OR").addEventListener('click', function() {
  mymap.flyTo([45.711323, -121.520264], 8);
});
document.getElementById("CA1").addEventListener('click', function() {
  mymap.flyTo([37.794691, -122.411401], 8);
});
document.getElementById("CA2").addEventListener('click', function() {
  mymap.flyTo([35.136416, -119.678746], 8);
});
document.getElementById("NV").addEventListener('click', function() {
  mymap.flyTo([36.016067, -114.737728], 8);
});
document.getElementById("AZ").addEventListener('click', function() {
  mymap.flyTo([36.016067, -114.737728], 8);
});
document.getElementById("UT").addEventListener('click', function() {
  mymap.flyTo([37.673963, -112.156427], 8);
});
document.getElementById("ID").addEventListener('click', function() {
  mymap.flyTo([43.636580, -113.300129], 8);
});
document.getElementById("WY").addEventListener('click', function() {
  mymap.flyTo([44.414884, -110.578597], 8);
});
document.getElementById("CO").addEventListener('click', function() {
  mymap.flyTo([38.839818, -105.044747], 8);
});
document.getElementById("NM").addEventListener('click', function() {
  mymap.flyTo([32.175958, -104.376351], 8);
});
document.getElementById("TX").addEventListener('click', function() {
  mymap.flyTo([29.42578, -98.486623], 8);
});
document.getElementById("OK").addEventListener('click', function() {
  mymap.flyTo([34.507164, -96.969878], 8);
});
document.getElementById("AR").addEventListener('click', function() {
  mymap.flyTo([34.644025, -92.060779], 8);
});
document.getElementById("TN").addEventListener('click', function() {
  mymap.flyTo([35.047884, -90.025137], 8);
});
document.getElementById("MS").addEventListener('click', function() {
  mymap.flyTo([32.354716, -90.843509], 8);
});
document.getElementById("LA").addEventListener('click', function() {
  mymap.flyTo([29.957812, -90.063484], 8);
});
document.getElementById("AL").addEventListener('click', function() {
  mymap.flyTo([30.683356, -88.014472], 8);
});

mymap.on('mousemove', function(e){
  var coord = e.latlng;
  $('#coordonnees').html('Coordonnées: ' + coord.lat.toFixed(5) +' / '+
  coord.lng.toFixed(5));
});

$('.recherche select').on('change', function(e){
  var id_destination = $('.recherche select').val();
  if (id_destination == "") return;
  var desti=destination[id_desti];
  mymap.panTo(desti.coords, {animate: true});
})

/* --- Menu Sidebar --- */
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "400px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



/* --- Popup de départ --- */
$(document).ready(function() {

		var id = '#dialog';

		var maskHeight = $(document).height();
		var maskWidth = $(window).width();

		//Masque Fullscreen
		$('#mask').css({'width':maskWidth,'height':maskHeight});

		//Effet transition
		$('#mask').fadeIn(1000);
		$('#mask').fadeTo("slow",0.8);

		var winH = $(window).height();
		var winW = $(window).width();

		//Popup centré
		$(id).css('top',  winH/2-$(id).height()/2);
		$(id).css('left', winW/2-$(id).width()/2);

		//Effet transition
		$(id).fadeIn(2000);

	//Fermer
	$('.window .close').click(function (e) {
		e.preventDefault();

		$('#mask').hide();
		$('.window').hide();
	});

	//Click masque
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});

});

/* --- MiniMap ---*/
var osm2 = L.tileLayer(
  'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2thaXNlciIsImEiOiJaS2cxcmVzIn0.IVsFCwYP0dpDlCdpsAGEcQ', {
    attribution: '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> &copy; <a href="http://www.openstreetmap.org">OpenStreetMap</a> contributors'
  }
);
var miniMap = new L.Control.MiniMap(osm2).addTo(mymap);
mymap.on('baselayerchange', function(e){
  miniMap.changeLayer(L.tileLayer(e.layer._url, {}));
});

for (var i in itinéraire.features) {
  var feature = itinéraire.features[i];
  var itinéraireStyle = {
    "color": feature.properties.color,
  	"weight": 5,
  	"opacity": 0.7
  };
  L.geoJSON(feature, itinéraireStyle).addTo(mymap);
};

function addPoviders() {
    var providers = {};

    providers['OpenStreetMap_Mapnik'] = {
        title: 'osm',
        icon: './images/icons/openstreetmap_mapnik.png',
        layer: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        })
    };

    providers['OpenStreetMap_BlackAndWhite'] = {
        title: 'osm bw',
        icon: './images/icons/openstreetmap_blackandwhite.png',
        layer: L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        })
    };

    providers['OpenStreetMap_DE'] = {
        title: 'osm de',
        icon: './images/icons/openstreetmap_de.png',
        layer: L.tileLayer('http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        })
    }

    providers['Stamen_Toner'] = {
        title: 'toner',
        icon: './images/icons/stamen_toner.png',
        layer: L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
            attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            subdomains: 'abcd',
            minZoom: 0,
            maxZoom: 20,
            ext: 'png'
        })
    };

    providers['Esri_OceanBasemap'] = {
        title: 'esri ocean',
        icon: './images/icons/esri_oceanbasemap.png',
        layer: L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri',
            maxZoom: 13
        })
    };

    providers['HERE_normalDay'] = {
        title: 'normalday',
        icon: './images/icons/here_normalday.png',
        layer: L.tileLayer('http://{s}.{base}.maps.cit.api.here.com/maptile/2.1/maptile/{mapID}/normal.day/{z}/{x}/{y}/256/png8?app_id={app_id}&app_code={app_code}', {
            attribution: 'Map &copy; 1987-2014 <a href="http://developer.here.com">HERE</a>',
            subdomains: '1234',
            mapID: 'newest',
            app_id: 'Y8m9dK2brESDPGJPdrvs',
            app_code: 'dq2MYIvjAotR8tHvY8Q_Dg',
            base: 'base',
            maxZoom: 20
        })
    };

    providers['HERE_normalDayGrey'] = {
        title: 'normalday grey',
        icon: './images/icons/here_normaldaygrey.png',
        layer: L.tileLayer('http://{s}.{base}.maps.cit.api.here.com/maptile/2.1/maptile/{mapID}/normal.day.grey/{z}/{x}/{y}/256/png8?app_id={app_id}&app_code={app_code}', {
            attribution: 'Map &copy; 1987-2014 <a href="http://developer.here.com">HERE</a>',
            subdomains: '1234',
            mapID: 'newest',
            app_id: 'Y8m9dK2brESDPGJPdrvs',
            app_code: 'dq2MYIvjAotR8tHvY8Q_Dg',
            base: 'base',
            maxZoom: 20
        })
    };

    providers['HERE_satelliteDay'] = {
        title: 'satellite',
        icon: './images/icons/here_satelliteday.png',
        layer: L.tileLayer('http://{s}.{base}.maps.cit.api.here.com/maptile/2.1/maptile/{mapID}/satellite.day/{z}/{x}/{y}/256/png8?app_id={app_id}&app_code={app_code}', {
            attribution: 'Map &copy; 1987-2014 <a href="http://developer.here.com">HERE</a>',
            subdomains: '1234',
            mapID: 'newest',
            app_id: 'Y8m9dK2brESDPGJPdrvs',
            app_code: 'dq2MYIvjAotR8tHvY8Q_Dg',
            base: 'aerial',
            maxZoom: 20
        })
    };

    providers['CartoDB_Positron'] = {
        title: 'positron',
        icon: './images/icons/cartodb_positron.png',
        layer: L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
            subdomains: 'abcd',
            maxZoom: 19
        })
    };

    return providers;
};
