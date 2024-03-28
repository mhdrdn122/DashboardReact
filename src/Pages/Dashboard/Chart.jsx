import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { useTheme } from '@mui/material'

const Chart = ({schemeColor , data}) => {
    const theme = useTheme()
    
  return (
    <ResponsivePie
        data={data}
        margin={{ top: 0, right: 80, bottom: 0, left: 80 }}
        innerRadius={0.8}
        padAngle={0.7}
        theme={{
    "background": "#fff0",
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
        colors={{ scheme: schemeColor }}
        cornerRadius={1}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        enableArcLinkLabels={false}
        enableArcLabels={false}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
       
      
    />
  )
}

export default Chart