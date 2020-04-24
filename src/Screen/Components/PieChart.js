import React from 'react';
import Pie from 'react-native-pie'

  const PieCharts= ({confirmed,deaths,recovered})=>{
      
    const persentase=(data)=>{
        return(data/confirmed *100)
      }
      let deathsPersentase = (deaths / confirmed) * 100;
      let recoveredPersentase =
        (recovered / confirmed) * 100;
      let activeCases =
        confirmed - (recovered + deaths);
        let activePersentase= activeCases/confirmed*100
    return(
        <Pie
        radius={60}
        innerRadius={30}
        sections={[
          {
            percentage: deathsPersentase,
            color: '#C70039',
          },
          {
            percentage: recoveredPersentase,
            color: '#44CD40',
          },
          {
            percentage: activePersentase,
            color: '#404FCD',
          },
        //   {
        //     percentage: 40,
        //     color: '#EBD22F',
        //   },
        ]}
        
        strokeCap={'butt'}
      />
    
  )}
  export default PieCharts