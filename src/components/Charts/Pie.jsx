import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip, Inject } from '@syncfusion/ej2-react-charts';

import { useStateContext } from '../../contexts/ContextProvider';

const Pie = ({ id, data, legendVisiblity, height }) => {
  const { currentMode } = useStateContext();
  
  // Custom palette for dark mode
  const darkModeColors = ['#4ade80', '#60a5fa', '#f97316', '#8b5cf6', '#ec4899', '#facc15'];
  const lightModeColors = ['#00bdae', '#357cd2', '#e94649', '#f6b53f', '#6faab0', '#ff9966'];

  return (
    <AccumulationChartComponent
      id={id}
      legendSettings={{ 
        visible: legendVisiblity, 
        background: currentMode === 'Dark' ? '#33373E' : 'white',
        textStyle: { color: currentMode === 'Dark' ? '#fff' : '#333' }
      }}
      height={height}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      tooltip={{ enable: true }}
      palettes={currentMode === 'Dark' ? darkModeColors : lightModeColors}
    >
      <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Sale"
          dataSource={data}
          xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius="70%"
          explode
          explodeOffset="10%"
          explodeIndex={2}
          dataLabel={{
            visible: true,
            name: 'text',
            position: 'Inside',
            font: {
              fontWeight: '600',
              color: currentMode === 'Dark' ? '#fff' : '#000',
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default Pie;