import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import {data} from './data'
import { Box } from '@mui/material'
import {  useTheme } from "@mui/material/styles";

const Bar = ({isDashboard = false}) => {
    const theme = useTheme()
  return (
    <ResponsiveBar
    data={data}
    keys={[
        'spain',
        'France',
        'Germany',
        
    ]}
    indexBy="year"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'set3' }}
    defs={[
        {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
        },
        {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
        }
    ]}
    fill={[
        {
            match: {
                id: 'fries'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'sandwich'
            },
            id: 'lines'
        }
    ]}
    borderColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                1.6
            ]
        ]
    }}
    axisTop={null}
    theme={{
"background": theme.palette.mode == "light" ?  theme.palette.background.default : theme.palette.grey[900],
"text": {
    "fontSize": 11,
    "fill": theme.palette.text.primary,
    "outlineWidth": 0,
    "outlineColor": "transparent"
},
"axis": {
    "domain": {
        "line": {
            "stroke": theme.palette.divider,
            "strokeWidth": 1
        }
    },
    "legend": {
        "text": {
            "fontSize": 12,
            "fill": theme.palette.text.primary ,
            "outlineWidth": 0,
            "outlineColor": "transparent"
        }
    },
    "ticks": {
        "line": {
            "stroke": theme.palette.divider,
            "strokeWidth": 1
        },
        "text": {
            "fontSize": 11,
            "fill": theme.palette.text.primary,
            "outlineWidth": 0,
            "outlineColor": "transparent"
        }
    }
},
"grid": {
    "line": {
        "stroke": theme.palette.divider,
        "strokeWidth": 1
    }
},
"legends": {
    "title": {
        "text": {
            "fontSize": 11,
            "fill": theme.palette.text.primary,
            "outlineWidth": 0,
            "outlineColor": "transparent"
        }
    },
    "text": {
        "fontSize": 11,
        "fill": theme.palette.text.primary,
        "outlineWidth": 0,
        "outlineColor": "transparent"
    },
    "ticks": {
        "line": {},
        "text": {
            "fontSize": 10,
            "fill": theme.palette.text.primary,
            "outlineWidth": 0,
            "outlineColor": "transparent"
        }
    }
},
"annotations": {
    "text": {
        "fontSize": 13,
        "fill": theme.palette.text.primary,
        "outlineWidth": 2,
        "outlineColor": "#ffffff",
        "outlineOpacity": 1
    },
    "link": {
        "stroke": "#000000",
        "strokeWidth": 1,
        "outlineWidth": 2,
        "outlineColor": "#ffffff",
        "outlineOpacity": 1
    },
    "outline": {
        "stroke": "#000000",
        "strokeWidth": 2,
        "outlineWidth": 2,
        "outlineColor": "#ffffff",
        "outlineOpacity": 1
    },
    "symbol": {
        "fill": "#000000",
        "outlineWidth": 2,
        "outlineColor": "#ffffff",
        "outlineOpacity": 1
    }
},
"tooltip": {
    "container": {
        "background": theme.palette.background.default,
        "color": theme.palette.text.primary,
        "fontSize": 12
    },
    "basic": {},
    "chip": {},
    "table": {},
    "tableCell": {},
    "tableCellValue": {}
}
}}
    axisRight={null}
    axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ?  " " :'Year',
        legendPosition: isDashboard ? "" : 'middle',
        legendOffset: 42,
        truncateTickAt: 0
    }}
    axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? "" : 'salary/Year',
        legendPosition: 'middle',
        legendOffset: -50,
        truncateTickAt: 0
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                1.6
            ]
        ]
    }}
    legends={[
        {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemOpacity: 1
                    }
                }
            ]
        }
    ]}
    role="application"
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
/>
  )
}

export default Bar