import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import icon from "../assets/images/react-logo.png"
import icon1 from "../assets/images/partial-react-logo.png"
import icon2 from "../assets/images/adaptive-icon.png"
import icon3 from "../assets/images/react-logo.png"
import icon4 from "../assets/images/splash.png"

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <View style={styles.topContainer}>
        <Text style={styles.headerTitle}>Leader Board</Text>
        <View style={styles.mainCardContainer}>
          {ThreeData.map((item, index) => {
            return (<View key={index} style={[styles.mainCard,item.id !==1 && {marginTop:20}]}>
              <Image source={item.imageUrl} style={styles.mainCardImage} resizeMode="cover" />
              <Text style={styles.mainCardTitle}>{item.name}</Text>
              <View style={styles.mainCardRangeContainer}>
                <Text style={styles.mainCardRankContainerText}>{item.id}</Text>

              </View>
            </View>)
          })}
        </View>
      </View>
      <FlatList data={datalist} renderItem={({item,index})=>{
        return(
          <View style={styles.card}>
            <View style={styles.cardDataContainer}>
              <Text style={styles.cardIndex}>{index + 1}</Text>
              <Image source={item.imageUrl} style={styles.cardImage} resizeMode="cover"/>
              <Text style={styles.cardTitle}>{item.name}</Text>
            </View>
            <View style={styles.cardRankContainer}>
              <Text style={styles.cardRankTitle}>{item.scoreObtained}</Text>
            </View>
          </View>
        )
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#272C35"
  },
  topContainer: {
    backgroundColor:"#1A1F25",
    paddingTop:40,
    paddingBottom:30,
    borderBottomRightRadius:40,
    borderBottomLeftRadius:40,
    gap:20,

   
    
  },
  headerTitle: {
    textAlign:"center",
    color:"white",
    fontSize:25,
    fontWeight:"bold" 
  },
  mainCard: {
    backgroundColor: "#272C35",
    padding:20,
    alignItems:"center",
     borderRadius:10,
     gap:15,
     paddingBottom:30,
     height:150
  },
  mainCardContainer: {
    flexDirection:"row",
    gap:10,
    justifyContent:"center"
  },
  mainCardImage: {
    width:60,
    height:70,
    borderRadius:20,

  },
  mainCardRangeContainer: {
    backgroundColor:"orange",
    width:30,
    height:30, 
    justifyContent:"center",
    alignItems:"center",
    borderRadius:30,
    position:"absolute",
    bottom:-10,
    left:40
  },
  mainCardTitle: {
    color:"white",
    fontSize:17,
    fontWeight:"600"
  },
  mainCardRankContainerText: {
    color:"white"
  },
  card: {
     flexDirection: "row", 
    alignItems:"center",
    justifyContent:"space-between",
    padding:20
   },
  cardIndex: {
    color:"white"
  },
  cardImage: {
    width:30,
    height:30,
    borderRadius:50,
    marginLeft:15,
  },
  cardTitle: {
    color:"white",
    fontSize:17,
  },
  cardDataContainer: {
   flexDirection:"row",
   alignItems:"center",
   gap:10
  },
  cardRankContainer: {},
  cardRankTitle: {
    color:"orange"
  }
});

const datalist = [
  {
    id: '1',
    name: 'John Doe',
    imageUrl:icon,
    scoreObtained: 85,
  },
  {
    id: '2',
    name: 'Jane Smith',
    imageUrl: icon1,
    scoreObtained: 92,
  },
  {
    id: '3',
    name: 'Michael Johnson',
    imageUrl: icon2,
    scoreObtained: 78,
  },
  {
    id: '4',
    name: 'Emily Davis',
    imageUrl: icon3,
    scoreObtained: 88,
  },
  {
    id: '5',
    name: 'David Wilson',
    imageUrl: icon4,
    scoreObtained: 95,
  },
  {
    id: '5',
    name: 'David Wilson',
    imageUrl: icon4,
    scoreObtained: 95,
  }, {
    id: '5',
    name: 'David Wilson',
    imageUrl: icon4,
    scoreObtained: 95,
  },
  {
    id: '4',
    name: 'Emily Davis',
    imageUrl: icon3,
    scoreObtained: 88,
  }, {
    id: '4',
    name: 'Emily Davis',
    imageUrl: icon3,
    scoreObtained: 88,
  },
  {
    id: '2',
    name: 'Jane Smith',
    imageUrl: icon1,
    scoreObtained: 92,
  }, {
    id: '2',
    name: 'Jane Smith',
    imageUrl: icon1,
    scoreObtained: 92,
  }, {
    id: '2',
    name: 'Jane Smith',
    imageUrl: icon1,
    scoreObtained: 92,
  }, {
    id: '2',
    name: 'Jane Smith',
    imageUrl: icon1,
    scoreObtained: 92,
  },
];

const ThreeData = [
  {
    id: 2,
    name: 'JohnDoe',
    imageUrl: icon,
    scoreObtained: 85,
  },
  {
    id: 1,
    name: ' Smith',
    imageUrl: icon1,
    scoreObtained: 92,
  },
  {
    id:3,
    name: 'Michael ',
    imageUrl: icon2,
    scoreObtained: 78,
  }
]